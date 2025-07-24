import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import ReactMarkdown from "react-markdown";

export default function FeatureSection({ feature }) {
  return (
    <section id={feature.id} className="scroll-mt-24 mb-12 pb-6 border-b border-gray-100">
      <div className="flex items-start flex-col lg:flex-row">
        <div className="flex-1 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h2>

          <div className="prose max-w-none bg-gray-50 p-6 rounded-lg border border-gray-200">
            {feature.content ? (
              <div className="space-y-4 text-gray-800 text-base">{feature.content()}</div>
            ) : (
              <div className="min-h-[200px] flex items-center justify-center text-center text-gray-500">
                <div>
                  <div className="text-4xl mb-3">📝</div>
                  <p>
                    Content area for: <span className="font-semibold">{feature.title}</span>
                  </p>
                  <p className="text-sm mt-2">You can add your documentation here</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back to top */}
        <a
          href="#"
          className="mt-6 lg:mt-0 lg:ml-4 p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          title="Back to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
}
