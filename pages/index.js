import Layout, { IdeasPage, CalendarPage, GroceriesPage, EventsPage, AboutPage } from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4">Welcome to Forkful</h1>
      <p className="text-lg text-gray-700">Collaborative meal planning made easy. Use the top nav to explore!</p>
    </Layout>
  );
}
