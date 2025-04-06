import Layout from '../components/Layout';
export default function Events() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">🎉 Event Planner</h1>
      <p className="mb-6 text-gray-700 max-w-2xl">Create potlucks, parties, or brunches with crowd-sourced menus and voting.</p>
      <img src="/events.png" alt="Events" className="rounded-xl shadow max-w-full" />
    </Layout>
  );
}