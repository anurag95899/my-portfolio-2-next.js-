export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="bg-white border border-[#E5E7EB] p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
      <h3 className="text-xl font-bold text-[#1F2937]">{title}</h3>
      <p className="text-sm text-[#6B7280] mt-2">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tech.map((t, idx) => (
          <span
            key={idx}
            className="bg-[#D97706] text-white text-xs px-2 py-1 rounded font-semibold"
          >
            {t}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 text-[#D97706] hover:underline font-semibold"
      >
        View Code →
      </a>
    </div>
  );
}