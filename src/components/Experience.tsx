interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string;
  points: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Fix Indonesia",
    location: "Denpasar, Bali",
    role: "Internship",
    period: "Jul 2025 - Jan 2026",
    description:
      "FIX Indonesia is a company that operates in the event planning and event organizing industry, handling the planning, coordination, and execution of various events such as corporate events, festivals, seminars, and community activities, with a focus on creative concepts and professional event management.",
    points: [
      "Developing company website fixindonesia.co.id using WordPress",
      "Developing company website checkloc.id using WordPress",
      "Assisted in on-site event coordination and execution",
    ],
  },
  {
    company: "Mastedata Bali",
    location: "Denpasar, Bali",
    role: "Internship",
    period: "Oct 2021 - Dec 2021",
    description:
      "Mastedata Bali is a trusted IT and electronics solution provider established in 2010, committed to delivering high-quality technology for various business sectors in Indonesia, including hospitality, healthcare, banking, corporations, and SMEs.",
    points: [
      "Troubleshooting client laptop hardware and assembling PCs according to client specification",
    ],
  },
];

export default function Experience() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
      <p className="text-gray-400 mb-12">Where I've worked and what I've learned along the way.</p>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.company} className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <h3 className="text-lg font-bold text-white">
                {exp.company}{" "}
                <span className="font-normal text-gray-400">— {exp.location}</span>
              </h3>
              <span className="text-sm text-blue-400 whitespace-nowrap">{exp.period}</span>
            </div>
            <p className="italic text-gray-400 text-sm mb-3">{exp.role}</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>
            <ul className="space-y-1.5">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-2 text-gray-300 text-sm">
                  <span className="text-blue-400 mt-1.5 w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}