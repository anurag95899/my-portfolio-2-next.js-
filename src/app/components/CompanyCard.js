export default function CompanyCard({ name, role, description }) {
  return (
    <div className="bg-white border border-[#E5E7EB] p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
      <h3 className="text-xl font-bold text-[#1F2937]">{name}</h3>
      <p className="text-sm text-[#D97706] font-semibold mt-1">{role}</p>
      <p className="text-sm text-[#6B7280] mt-2">{description}</p>
    </div>
  );
}