import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiWordpress } from "react-icons/si";
import { SiLaravel, SiPhp, SiMysql } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
  { name: "CodeIgniter", icon: <SiPhp className="text-purple-500" /> }, // CodeIgniter tidak punya icon khusus, pakai PHP
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Wordpress", icon: <SiWordpress className="text-blue-500" /> }
];

const softSkills = ["Task & Time Management", "Team Work"];

const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Intermediate" },
];

const achievements = [
  { title: "3rd Place in ECO English Quiz", year: "2023" },
];

export default function Skills() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
      <p className="text-gray-400 mb-12">Tools and technologies I work with.</p>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3 px-4 py-2 bg-gray-800 rounded-full">
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-white">{skill.name}</span>
          </div>
        ))}
      </div>

      {/* Soft Skills */}
      <h3 className="text-xl font-bold text-white mt-12 mb-4">Soft Skills</h3>
      <div className="flex flex-wrap gap-3">
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-800 rounded-full text-white"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Languages */}
      <h3 className="text-xl font-bold text-white mt-12 mb-4">Languages</h3>
      <div className="flex flex-wrap gap-3">
        {languages.map((lang) => (
          <div key={lang.name} className="px-4 py-2 bg-gray-800 rounded-full">
            <span className="text-white">{lang.name}</span>
            <span className="text-gray-400 text-sm"> — {lang.level}</span>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <h3 className="text-xl font-bold text-white mt-12 mb-4">Achievements</h3>
      <ul className="space-y-2">
        {achievements.map((item) => (
          <li key={item.title} className="flex items-start gap-2 text-gray-300">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 shrink-0" />
            <span>
              {item.title} <span className="text-gray-500">({item.year})</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}