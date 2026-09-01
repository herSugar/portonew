// App.tsx
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export type Tab = "projects" | "experience" | "skills" | "contact";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const renderTab = () => {
    switch (activeTab) {
      case "projects":
        return <Projects />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen md:flex">
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between px-6 py-4 bg-gray-950 border-b border-gray-800 sticky top-0 z-20">
        <span className="text-white font-bold">
          Restu<span className="text-blue-400">.</span>
        </span>
        <button
          className="text-white"
          onClick={() => setMobileSidebarOpen(true)}
          aria-label="Open menu"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* Left: static sidebar */}
      <Sidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        mobileOpen={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
      />
      {mobileSidebarOpen && (
        <button
          className="fixed top-4 right-6 z-50 text-white md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
          aria-label="Close menu"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      )}

      {/* Right: scrollable content, switches per tab */}
      <main className="flex-1 md:ml-80 min-h-screen">
        <div key={activeTab} className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16 animate-fadein">
          {renderTab()}
        </div>
      </main>
    </div>
  );
}
