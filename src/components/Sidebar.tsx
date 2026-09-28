import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import type { Tab } from "../App";

interface SidebarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

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

export default function Sidebar({ activeTab, onTabChange, mobileOpen, onCloseMobile }: SidebarProps) {
  const handleTabClick = (tab: Tab) => {
    onTabChange(tab);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-72 md:w-80 bg-gray-950/60 backdrop-blur-xl border-r border-gray-800/50 flex flex-col z-40 transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Mobile Drawer Header */}
        <div className="md:hidden flex items-center px-6 py-4 border-b border-gray-800/50">
          <span className="text-white font-bold text-lg tracking-wide">
            Restu<span className="text-blue-400">.</span>
          </span>
        </div>

        {/* Profile block (Desktop Only) */}
        <div className="hidden md:block px-8 pt-12 pb-6 text-center">
          <div className="relative w-32 h-32 mx-auto mb-5">
            <div className="absolute inset-0 rounded-full border-2 border-blue-400/50" />
            <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-gray-800">
              <img
                src="/images/fotoDiri.webp"
                alt="I Made Restu Jaya Putra"
                width={128}
                height={128}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
          </div>
          <h1 className="text-xl font-bold text-white leading-tight">
            Restu Jaya
          </h1>
          <p className="text-blue-400 text-sm mt-1">Web Developer</p>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Fresh Graduate in Software Engineering passionate about building functional, user focused digital experiences. 
            Hands on with web development, network configuration, and hardware & software troubleshooting.



          </p>
        </div>

        <div className="hidden md:block mx-8 border-t border-gray-800" />

        {/* Tab navigation */}
        <nav className="flex-1 px-4 md:px-6 py-4 md:py-6">
          <ul className="space-y-1.5">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full text-left px-4 py-3 md:py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent"
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div className="px-6 md:px-8 pb-8 pt-4 border-t border-gray-800/50 bg-transparent">
          <div className="flex justify-center gap-6 md:gap-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-500 hover:text-blue-400 text-xl md:text-lg transition-transform hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
