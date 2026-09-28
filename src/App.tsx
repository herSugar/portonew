import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BubbleClick from "./components/BubbleClick";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export type Tab = "projects" | "experience" | "skills" | "contact";

const tabs: { id: Tab; label: string }[] = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/herSugar", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/restu-jaya-113667360", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/gr1mriper?igsh=cndhM2pndGtoYmtu", label: "Instagram" },
  { icon: FaYoutube, href: "https://www.youtube.com/@gerip69", label: "YouTube" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("projects");

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
    <div className="bg-transparent text-white min-h-screen md:flex">
      <BubbleClick />
      {/* Mobile top bar (Horizontal Navigation) */}
      <div className="md:hidden flex items-center px-4 py-3 bg-gray-950/60 backdrop-blur-md border-b border-gray-800/50 sticky top-0 z-20 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <nav className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Left: static sidebar (Desktop only) */}
      <div className="hidden md:block">
        <Sidebar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          mobileOpen={false}
          onCloseMobile={() => {}}
        />
      </div>

      {/* Right: scrollable content, switches per tab */}
      <main className="flex-1 md:ml-80 min-h-screen">
        {/* Mobile Profile Header */}
        <div className="md:hidden flex flex-col items-center px-6 pt-10 pb-8 border-b border-gray-800 bg-gray-900/30">
          <div className="relative w-28 h-28 mb-4">
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/50" />
            <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-gray-800">
              <img
                src="/images/fotoDiri.webp"
                alt="Restu Jaya"
                width={112}
                height={112}
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white text-center leading-tight">
            Restu Jaya
          </h1>
          <p className="text-blue-400 text-sm mt-1.5 font-medium">Web Developer</p>
          <p className="text-gray-400 text-sm mt-4 text-center max-w-sm leading-relaxed">
            Fresh Graduate in Software Engineering passionate about building functional, user-focused digital experiences. 
            Hands-on with web development, network configuration, and hardware & software troubleshooting.
          </p>
          
          {/* Mobile Socials */}
          <div className="flex justify-center gap-6 mt-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-500 hover:text-blue-400 text-xl transition-transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div key={activeTab} className="max-w-4xl mx-auto px-6 md:px-12 py-10 md:py-16 animate-fadein">
          {renderTab()}
        </div>
      </main>
    </div>
  );
}
