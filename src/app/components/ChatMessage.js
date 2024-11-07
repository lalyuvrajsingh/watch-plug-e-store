import Link from 'next/link';

export default function ChatMessage({ message }) {
  return (
    <div className="space-y-2">
      <p>{message.text}</p>
      {message.products && message.products.length > 0 && (
        <div className="space-y-2">
          {message.products.map((product, idx) => (
            <Link 
              key={idx}
              href={product.url}
              className="block p-2 hover:bg-gray-50 rounded-lg border"
            >
              <div className="font-medium">{product.name}</div>
              <div className="text-sm text-gray-500">
                ${product.price?.toLocaleString()}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 