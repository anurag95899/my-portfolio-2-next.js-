'use client';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CompanyCard from "../components/CompanyCard";

const companies = [
  {
    name: "Brisk Minds",
    role: "MERN Stack Intern",
    description: "Worked on scalable internal tools using React & MongoDB.",
  },
  {
    name: "IBR Infotech",
    role: "Frontend Developer",
    description: "Built reusable components and integrated REST APIs.",
  },
];

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: (i) => ({
    height: "auto",
    opacity: 1,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

export default function CompaniesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-[#1F2937]">
      <Navbar />
      <main className="flex-grow">
        <section className="max-w-5xl mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold text-indigo-600 text-white text-center mb-8">Companies</h1>
          <div className="grid md:grid-cols-2 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={accordionVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(99, 102, 241, 0.5)",
                }}
                className="cursor-pointer rounded-lg bg-white overflow-hidden border border-gray-300"
              >
                <CompanyCard {...company} />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}