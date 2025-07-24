// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import esFeatures from "../data/esFeatures";

export default function Sidebar({ version }) {
  const features = esFeatures[version]?.features || [];

  return (
    <div className="w-64 flex-shrink-0 hidden md:block">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 px-4 border-r border-gray-200">
        <h2 className="text-lg font-semibold mb-4">{esFeatures[version]?.name || "JavaScript Features"}</h2>
        <nav className="space-y-1">
          {features.map((feature) => (
            <NavLink key={feature.id} to={`#${feature.id}`} className={({ isActive }) => `block px-3 py-2 rounded text-gray-700 hover:bg-gray-100 hover:text-blue-600 ${isActive ? "bg-blue-50 text-blue-600 font-medium" : ""}`} smooth={true}>
              {feature.title}
            </NavLink>
          ))}

          <div className="pt-4 mt-4 border-t border-gray-200">
            <a
              href="#"
              className="block px-3 py-2 rounded text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              ↑ Back to Top
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
