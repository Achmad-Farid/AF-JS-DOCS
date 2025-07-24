// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { versions } from "../data/esFeatures";

export default function Navbar() {
  const location = useLocation();
  const currentVersion = location.pathname.split("/")[2] || "";

  return (
    <nav className="bg-gray-800 text-white shadow-lg fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              AF JS DOCS
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {versions.map((version) => (
              <Link key={version.id} to={`/es/${version.id}`} className={`px-3 py-2 rounded-md text-sm font-medium ${currentVersion === version.id ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`}>
                {version.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <select value={currentVersion} onChange={(e) => (window.location.href = `/es/${e.target.value}`)} className="bg-gray-700 text-white px-3 py-2 rounded-md">
              {versions.map((version) => (
                <option key={version.id} value={version.id}>
                  {version.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
