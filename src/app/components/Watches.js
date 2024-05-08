import Products from './Products';

export default function Watches() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center my-8">Watches</h1>
      <Products category="Watch" />
    </div>
  );
}
