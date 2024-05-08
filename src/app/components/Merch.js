import Products from './Products';

export default function Merch() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center my-8">Merch</h1>
      <Products category="Merch" />
    </div>
  );
}