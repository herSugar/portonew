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
        className={`fixed top-0 left-0 h-screen w-80 bg-gray-950 border-r border-gray-800 flex flex-col z-40 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Profile block */}
        <div className="px-8 pt-12 pb-6 text-center">
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
            I Made Restu Jaya Putra
          </h1>
          <p className="text-blue-400 text-sm mt-1">Web Developer</p>
          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            Software Engineering student building interfaces that are both functional and
            engaging.
          </p>
        </div>

        <div className="mx-8 border-t border-gray-800" />

        {/* Tab navigation */}
        <nav className="flex-1 px-6 py-6">
          <ul className="space-y-1">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-blue-500/10 text-blue-400"
                      : "text-gray-400 hover:text-white hover:bg-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Socials */}
        <div className="px-8 pb-8 pt-4 border-t border-gray-800">
          <div className="flex justify-center gap-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-500 hover:text-blue-400 text-lg transition-colors"
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
