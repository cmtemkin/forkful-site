import Layout from '../components/Layout';
export default function About() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold">🍽️ The Forkful Origin Story</h1>
      <p className="text-lg font-medium">“Built from love, powered by dinner.”</p>
      <p>Forkful started the way many great ideas do: with one partner constantly texting recipe links to the other... and the other slowly losing patience.</p>
      <p>Hi, I’m the founder—and I do the cooking at home. Throughout the week, I’d find myself sending my wife a stream of recipe ideas: "What about this honey garlic salmon?" But by dinner time, those links were buried under texts and TikToks.</p>
      <p>So I built Forkful: a shared space where we could save ideas, vote, and lock them into our calendar. It even turns our picks into a grocery list. It’s collaborative, fun, and (bonus) stops the 6pm scramble.</p>
      <div className="flex flex-col items-center pt-8">
        <img src="https://source.unsplash.com/featured/?professional,man" className="rounded-full w-40 h-40 object-cover shadow mb-4" alt="Charlie Temkin avatar" />
        <p className="text-lg font-semibold">Charlie Temkin</p>
        <a href="https://www.linkedin.com/in/cmtemkin/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center space-x-2 text-blue-600 hover:underline">
          <span>🔗 LinkedIn</span>
        </a>
      </div>
    </Layout>
  );
}