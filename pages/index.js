import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout>
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Welcome to Forkful</h1>
        <p className="text-lg text-gray-700">Collaborative meal planning made easy. Use the top nav to explore!</p>
      </div>
    </Layout>
  );
}