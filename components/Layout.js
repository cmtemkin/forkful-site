
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/"><span className="text-2xl font-bold text-gray-900">forkful</span></Link>
          <div className="space-x-4 text-base font-medium">
            <Link href="/ideas">Ideas</Link>
            <Link href="/calendar">Calendar</Link>
            <Link href="/groceries">Groceries</Link>
            <Link href="/events">Events</Link>
            <Link href="/about">About</Link>
            <a href="https://forkful.lovable.app" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400 transition">Try Now</a>
          </div>
        </div>
      </nav>
      <main className="max-w-5xl mx-auto px-6 py-12">{children}</main>
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="max-w-5xl mx-auto text-center text-sm">
          © 2025 Forkful. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
