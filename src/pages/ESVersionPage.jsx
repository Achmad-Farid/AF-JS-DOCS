// src/pages/ESVersionPage.jsx
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import FeatureSection from "../components/FeatureSection";
import esFeatures from "../data/esFeatures";

export default function ESVersionPage() {
  const { version } = useParams();
  const features = esFeatures[version]?.features || [];

  // Scroll ke atas saat versi berubah
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [version]);

  return (
    <div className="flex pt-16">
      <Sidebar version={version} />

      <main className="flex-1 min-h-screen bg-white">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="mb-10 pb-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900">{esFeatures[version]?.name || "JavaScript Features"}</h1>
            <p className="mt-2 text-gray-600">Documentation for JavaScript features introduced in this version</p>
          </div>

          <div className="space-y-10">
            {features.map((feature) => (
              <FeatureSection key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
