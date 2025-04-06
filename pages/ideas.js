import Layout from '../components/Layout';
export default function Ideas() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">🧠 Idea Feed</h1>
      <p className="mb-6 text-gray-700 max-w-2xl">Add, vote, and browse meal ideas with your crew. Planning starts here!</p>
      <img src="/ideas.png" alt="Idea Feed" className="rounded-xl shadow max-w-full" />
    </Layout>
  );
}