"use client"
import { useState, useEffect } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link';
import { searchProducts } from '../utils/productSearch';
import { retrieveWatchInfo, generateContext } from '../utils/knowledgeBase';

const processMessageContent = (content) => {
  return content
    // Format category headers
    .replace(/\*\*(.*?)\*\*/g, '<h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">$1</h3>')
    
    // Format product sections
    .replace(/(\w+):\s*\n/g, '<div class="mb-4"><h4 class="text-md font-semibold text-gray-700 mb-2">$1</h4>')
    
    // Format product listings
    .replace(/• (.*?)(?=\n|$)/g, '<div class="ml-4 mb-2 flex items-center"><span class="mr-2">•</span><span>$1</span></div>')
    
    // Format prices
    .replace(/\$(\d{1,3}(,\d{3})*(\.\d{2})?)/g, '<span class="font-semibold text-green-700">$$$1</span>')
    
    // Format discounts
    .replace(/(\d+)% OFF/g, '<span class="text-red-600 font-medium">$1% OFF</span>')
    
    // Format emphasis
    .replace(/\*(.*?)\*/g, '<em class="text-gray-600 not-italic">$1</em>')
    
    // Add section closings
    .replace(/(?=<h3|$)/g, '</div>')
    
    // Format specifications
    .replace(/Specifications:([\s\S]*?)(?=\n\n|$)/g, 
      '<div class="bg-gray-50 p-3 rounded-lg my-2"><h4 class="font-bold mb-2">Specifications:</h4>$1</div>')
    
    // Format market data
    .replace(/Market Value:([\s\S]*?)(?=\n\n|$)/g,
      '<div class="bg-blue-50 p-3 rounded-lg my-2"><h4 class="font-bold mb-2">Market Value:</h4>$1</div>')
    
    // Format investment insights
    .replace(/Investment Potential:([\s\S]*?)(?=\n\n|$)/g,
      '<div class="bg-green-50 p-3 rounded-lg my-2"><h4 class="font-bold mb-2">Investment Potential:</h4>$1</div>');
};

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
  .replace(/\*\*(.*?)\*\*/g, '<h3 class="text-lg font-bold text-gray-800 mt-4 mb-2">$1</h3>')
  // Format product sections
  .replace(/(\w+):\s*\n/g, '<div class="mb-4"><h4 class="text-md font-semibold text-gray-700 mb-2">$1</h4>')
  // Format product listings
  .replace(/• (.*?)(?=\n|$)/g, '<div class="ml-4 mb-2 flex items-center"><span class="mr-2">•</span><span>$1</span></div>')
  // Format prices
  .replace(/\$(\d{1,3}(,\d{3})*(\.\d{2})?)/g, '<span class="font-semibold text-green-700">$$$1</span>')
  // Format discounts
  .replace(/(\d+)% OFF/g, '<span class="text-red-600 font-medium">$1% OFF</span>')
  // Format emphasis
  .replace(/\*(.*?)\*/g, '<em class="text-gray-600 not-italic">$1</em>')
  // Add section closings
  .replace(/(?=<h3|$)/g, '</div>')
  // Format specifications
  .replace(/Specifications:([\s\S]*?)(?=\n\n|$)/g, 
    '<div class="bg-gray-50 p-3 rounded-lg my-2"><h4 class="font-bold mb-2">Specifications:</h4>$1</div>')
  // Format market data
  .replace(/Market Value:([\s\S]*?)(?=\n\n|$)/g,
    '<div class="bg-blue-50 p-3 rounded-lg my-2"><h4 class="font-bold mb-2">Market Value:</h4>$1</div>')
  // Format investment insights
  .replace(/Investment Potential:([\s\S]*?)(?=\n\n|$)/g,
    '<div class="bg-green-50 p-3 rounded-lg my-2"><h4 class="font-bold mb-2">Investment Potential:</h4>$1</div>');

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
    const watchBrands = ['rolex', 'patek', 'audemars', 'cartier'];
    const brand = watchBrands.find(brand => 
      message.toLowerCase().includes(brand)
    );

    if (brand) {
      // Retrieve knowledge
      const knowledge = await retrieveWatchInfo({ brand });
      const context = generateContext(knowledge, message);

      // Generate response using context
      if (knowledge.productInfo.length > 0) {
        return {
          text: `**Based on our current inventory:**\n\n${context}\n\n` +
               `*Click on any watch below to view details:*`,
          products: knowledge.productInfo.map(p => ({
            name: `${p.brand} ${p.name}`,
            price: p.sellingPrice,
            url: `/product/${p.id}`
          }))
        };
      }
    }

    // Default response remains the same
    return {
      text: "**How can I assist you today?**\n\n" +
            "I can help you with:\n" +
            "• Finding specific watch models\n" +
            "• Providing information about luxury brands\n" +
            "• Checking availability and pricing\n" +
            "• Scheduling viewings\n\n" +
            "*Please mention the brand or model you're interested in.*",
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
            className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth"
            onClick={handleMessageClick}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${
                  message.role === 'user' 
                    ? 'ml-auto bg-black text-white' 
                    : 'mr-auto bg-gray-100 border border-gray-200'
                } rounded-xl p-4 max-w-[85%] shadow-sm hover:shadow-md transition-shadow duration-200`}
              >
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(message.content, {
                      ALLOWED_TAGS: ['div', 'span', 'h3', 'h4', 'em', 'p', 'br'],
                      ALLOWED_ATTR: ['class'],
                    })
                  }}
                />
              </div>
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