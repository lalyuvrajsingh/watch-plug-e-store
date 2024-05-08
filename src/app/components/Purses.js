import Products from './Products';

export default function Purses() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center my-8">Purses</h1>
      <Products category="Purse" />
    </div>
  );
}
