import { useState } from "react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link: string;
  useIframe?: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "7ani Travel",
      description: "Travel booking platform",
      tags: ["Web", "Travel", "Booking", "NextJS", "Supabase", "Tailwind"],
      link: "https://7ani-travel.vercel.app/",
      useIframe: true,
    },
    {
      title: "StyleMeUp Shop",
      description: "eCommerce Web for StyleMeUp Shop with cart",
      tags: ["Web", "E-Commerce", "Shop", "NextJS", "Supabase", "Tailwind"],
      link: "https://stylemeup-shop.vercel.app/",
      useIframe: true,
    },
    {
      title: "Fix Indonesia",
      description: "News and information platform for Fix Indonesia Event Planner",
      tags: ["Web", "News", "Company Profile", "Wordpress"],
      link: "https://fixindonesia.co.id",
      image: "/images/projects/FixIndonesia.webp",
    },
    {
      title: "Checkloc",
      description: "Location checking and verification platform",
      tags: ["Web", "Location", "Company Profile", "Wordpress", "Property Listing"],
      link: "https://checkloc.id",
      image: "/images/projects/Checkloc.webp",
    },
    {
      title: "Jendela Wisata",
      description: "Full-featured Vacation Web with cart and payment integration",
      tags: ["CodeIgniter", "Tailwind", "MySQL"],
      link: "https://pariwisata.lab-trpl.id/",
      image: "/images/projects/JW.webp",
    },
    {
      title: "FurQon-shop",
      description: "Modern Shop Web with cart",
      tags: ["PHP", "CSS", "Bootstrap", "MySQL"],
      link: "https://github.com/herSugar/furqon-shop.git",
    },
    {
      title: "Frontend-Toko",
      description: "Website Optik for customer to buy glasses",
      tags: ["PHP", "CSS", "Bootstrap", "MySQL"],
      link: "https://github.com/herSugar/frontend-toko.git",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const total = projects.length;
  const visibleCount = 2;

  const goTo = (dir: "left" | "right") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) =>
        dir === "right" ? (prev + 1) % total : (prev - 1 + total) % total
      );
      setAnimating(false);
    }, 350);
  };

  const getVisible = () =>
    Array.from({ length: visibleCount }, (_, i) => projects[(current + i) % total]);

  return (
    <div>
      {/* Header */}
      <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
      <p className="text-gray-400 mb-12">
        {current + 1} / {total} — things I've built
      </p>

        {/* Carousel */}
        <div className="relative px-10">
          {/* Left Button */}
          <button
            onClick={() => goTo("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors duration-200"
          >
            ‹
          </button>

          {/* Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction === "right" ? "-30px" : "30px"})`
                : "translateX(0)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            {getVisible().map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 group shadow-xl border border-gray-700/50"
              >
                {/* Thumbnail */}
                <div className="aspect-video bg-gray-700 relative overflow-hidden flex items-center justify-center">
                  {project.useIframe ? (
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      {/* Transparent overlay to prevent interaction swallowing */}
                      <div className="absolute inset-0 z-10 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                      <iframe
                        src={project.link}
                        title={project.title}
                        className="w-[200%] h-[200%] origin-top-left scale-50 border-0 pointer-events-none"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    </div>
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-5xl text-white/30 group-hover:text-blue-400 transition-colors duration-300">
                      🖥️
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1 text-sm transition-colors"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={() => goTo("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors duration-200"
          >
            ›
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? "right" : "left");
                setAnimating(true);
                setTimeout(() => {
                  setCurrent(i);
                  setAnimating(false);
                }, 350);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-blue-400 w-6" : "bg-gray-600 hover:bg-gray-400 w-2"
              }`}
            />
          ))}
        </div>
    </div>
  );
}