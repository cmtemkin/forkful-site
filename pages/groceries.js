import Layout from '../components/Layout';
export default function Groceries() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">🛒 Grocery List Generator</h1>
      <p className="mb-6 text-gray-700 max-w-2xl">From plan to pantry—turn meals into an actionable, editable shopping list.</p>
      <img src="/groceries.png" alt="Groceries" className="rounded-xl shadow max-w-full" />
    </Layout>
  );
}