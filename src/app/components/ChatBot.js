"use client"
import { useState, useEffect } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { searchProducts } from '../utils/productSearch';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Add initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: 'Hello! I\'m your luxury watch expert. I can help you find the perfect timepiece based on your preferences and budget. What kind of watch are you looking for?'
      }]);
    }
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInputMessage(''); // Clear input immediately for better UX

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      const processedContent = data.response
  // Format category headers
  .replace(/\*\*(.*?)\*\*/g, '<h3 class="font-bold text-lg mt-3 mb-2">$1</h3>')
  // Format product bullets
  .replace(/\* (.*?):/g, '<div class="ml-3 mb-2">• <span class="font-semibold">$1</span>')
  // Format price and discounts
  .replace(/\$([\d,]+)/g, '<span class="font-semibold text-black">$$$1</span>')
  .replace(/\((\d+)% discount available\)/g, 
    '<span class="text-green-600 ml-1">(Save $1%)</span></div>')
  // Format final question
  .replace(/Which of these catches your eye\?/, 
    '<p class="mt-4 font-medium">Which of these catches your eye?</p>');

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: processedContent
      }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I encountered an error. Please try again or contact our support team.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    const messageContainer = document.getElementById('message-container');
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight;
    }
  }, [messages]);

  // Handle clicking on links within the chat
  const handleMessageClick = (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const href = e.target.getAttribute('href');
      window.location.href = href;
    }
  };

  const handleUserMessage = async (message) => {
    // Basic intent detection
    const watchBrands = ['rolex', 'patek', 'audemars', 'cartier'];
    const isAskingAboutWatch = watchBrands.some(brand => 
      message.toLowerCase().includes(brand)
    );

    if (isAskingAboutWatch) {
      const products = await searchProducts(message);
      if (products.length > 0) {
        return {
          text: `I found these watches that might interest you:`,
          products: products.map(p => ({
            name: `${p.brand} ${p.name}`,
            price: p.sellingPrice,
            url: p.url
          }))
        };
      }
    }

    // Default response
    return {
      text: "I can help you find specific watches. Please mention the brand or model you're interested in.",
      products: []
    };
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black text-white rounded-full p-4 shadow-lg hover:bg-gray-800 transition-colors duration-200"
          aria-label="Open Chat"
        >
          <FaRobot size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 h-[500px] flex flex-col">
          <div className="p-4 bg-black text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">FineChrono Watch Expert</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-gray-800 p-1 rounded transition-colors duration-200"
              aria-label="Close Chat"
            >
              <FaTimes />
            </button>
          </div>

          <div 
            id="message-container"
            className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
            onClick={handleMessageClick}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.role === 'user' 
                    ? 'ml-auto bg-black text-white' 
                    : 'mr-auto bg-gray-200'
                } rounded-lg p-3 max-w-[80%] transition-all duration-200 ease-in-out`}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(message.content, {
                    ALLOWED_TAGS: ['a', 'p', 'br', 'strong', 'em'],
                    ALLOWED_ATTR: ['href', 'class', 'target'],
                  })
                }}
              />
            ))}
            {isLoading && (
              <div className="mr-auto bg-gray-200 rounded-lg p-3 animate-pulse">
                Thinking...
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about watches..."
                className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:border-black transition-all duration-200"
                disabled={isLoading}
                aria-label="Chat input"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50"
                disabled={isLoading || !inputMessage.trim()}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}