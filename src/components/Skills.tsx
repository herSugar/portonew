import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { SiLaravel, SiPhp, SiMysql } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
  { name: "CodeIgniter", icon: <SiPhp className="text-purple-500" /> }, // CodeIgniter tidak punya icon khusus, pakai PHP
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          My <span className="text-blue-400">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-3 px-4 py-2 bg-gray-700 rounded-full">
              <span className="text-2xl">{skill.icon}</span>
              <span className="text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}