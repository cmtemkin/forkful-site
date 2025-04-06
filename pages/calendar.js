import Layout from '../components/Layout';
export default function Calendar() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">📅 Calendar View</h1>
      <p className="mb-6 text-gray-700 max-w-2xl">Drag, drop, and plan out your meals for the week in a clean visual layout.</p>
      <img src="/calendar.png" alt="Calendar View" className="rounded-xl shadow max-w-full" />
    </Layout>
  );
}