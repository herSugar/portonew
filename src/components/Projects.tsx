interface Project {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    link: string;
  }
  
  export default function Projects() {
    const projects: Project[] = [
      {
        title: "Jendela Wisata",
        description: "Full-featured Vacation Web with cart and payment integration",
        tags: ["CodeIgniter", "Tailwind", "Mysql"],
        link: "https://pariwisata.lab-trpl.id/",
        image: "/images/projects/JW.png"
      },
      {
        title: "FurQon-shop",
        description: "Modern Shop Web with cart",
        tags: ["PHP", "CSS", "Bootstrap", "Mysql"],
        link: "https://github.com/herSugar/furqon-shop.git",
      },
      {
        title: "Frontend-Toko",
        description: "Website Optik for costumer to buy glasses",
        tags: ["PHP", "CSS", "Bootstrap", "Mysql"],
        link: "https://github.com/herSugar/frontend-toko.git",
      },
    ];
  
    return (
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            My <span className="text-blue-400">Projects</span>
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 group"
              >
                <div className="h-48 bg-gray-700 flex items-center justify-center">
                  <div className="text-white/40 text-5xl group-hover:text-blue-400 transition-colors">
                    {project.image ? (
                      <img src={project.image} alt={project.title} />
                    ) : (
                      "🖥️"
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center"
                  >
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }