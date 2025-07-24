// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { versions } from "../data/esFeatures";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">JavaScript ES Documentation</h1>
          <p className="mt-4 text-xl text-gray-600">
            Hi, I’m Achmad Farid. This is a personal documentation project where I explore and summarize modern JavaScript features — from ES6 to the latest proposals and beyond. I built this to deepen my understanding and stay up-to-date
            with the evolving JavaScript ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {versions.map((version) => (
            <Link key={version.id} to={`/es/${version.id}`} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100 text-blue-600 mb-4">
                  <span className="text-lg font-bold">{version.id.slice(2)}</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{version.name}</h3>
                <p className="mt-2 text-gray-500">Features introduced in {version.name}</p>
                <div className="mt-4 flex items-center text-blue-600">
                  <span>View Documentation</span>
                  <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-20 border-t pt-10 pb-6 text-center text-gray-600">
          <p className="text-lg font-semibold">Built by Achmad Farid</p>
          <p className="mt-1 text-sm">Always learning, always building — focused on modern JavaScript and web development.</p>

          <div className="mt-4 flex justify-center space-x-6 text-gray-500">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.8 1.8-1.1.2-.7.6-1.1.9-1.3-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.6.5 1 .4 1 .4v2.3c0 .3.2.6.8.5a10.9 10.9 0 0 0 7.9-10.9C23.5 5.7 18.3.5 12 .5z" />
              </svg>
            </a>

            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.9 3.87 6 2.5 6S0 4.9 0 3.5 1.12 1 2.5 1 4.98 2.1 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.6-1 2.1-2.2 4.3-2.2 4.6 0 5.4 3 5.4 6.8V24h-5V14.4c0-2.3 0-5.2-3.2-5.2-3.3 0-3.8 2.5-3.8 5V24h-5V8z" />
              </svg>
            </a>

            <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.34-1.6.57-2.46.68a4.25 4.25 0 0 0 1.88-2.36 8.34 8.34 0 0 1-2.67 1.02 4.18 4.18 0 0 0-7.12 3.8A11.87 11.87 0 0 1 3.1 4.6a4.18 4.18 0 0 0 1.3 5.57 4.2 4.2 0 0 1-1.9-.52v.05c0 2 1.42 3.67 3.3 4.05a4.2 4.2 0 0 1-1.88.07c.53 1.64 2.06 2.83 3.88 2.86a8.39 8.39 0 0 1-5.2 1.8c-.34 0-.67-.02-1-.06a11.82 11.82 0 0 0 6.4 1.88c7.67 0 11.86-6.35 11.86-11.86 0-.18 0-.36-.01-.54A8.4 8.4 0 0 0 24 4.5a8.27 8.27 0 0 1-2.54.7z" />
              </svg>
            </a>
          </div>

          <p className="mt-4 text-xs text-gray-400">© {new Date().getFullYear()} Achmad Farid. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
