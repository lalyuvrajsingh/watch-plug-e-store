import Link from 'next/link';

export default function ChatMessage({ message }) {
  return (
    <div className="space-y-3">
      <div 
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ 
          __html: formatMessageText(message.text) 
        }} 
      />
      
      {message.products && message.products.length > 0 && (
        <div className="space-y-2 mt-4">
          <p className="font-medium text-gray-700">Recommended Products:</p>
          <div className="grid gap-3">
            {message.products.map((product, idx) => (
              <Link 
                key={idx}
                href={product.url}
                className="block p-3 hover:bg-gray-50 rounded-lg border transition-colors duration-200"
              >
                <div className="font-semibold text-gray-900">{product.name}</div>
                <div className="text-sm text-gray-500 mt-1">
                  ${product.price?.toLocaleString()}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function formatMessageText(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>')
    .replace(/• (.*?)(?=(?:• |\n|$))/g, '<li>$1</li>')
    .replace(/<li>/g, '<ul class="list-disc pl-4 space-y-1"><li>')
    .replace(/<\/li>(?!\n|<li>)/g, '</li></ul>');
} 