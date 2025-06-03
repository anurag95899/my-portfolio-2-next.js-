'use client';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive UI using React, Next.js, and Tailwind CSS.',
  },
  {
    title: 'Backend Development',
    description: 'Developing robust REST APIs using Node.js, Express, and MongoDB.',
  },
  {
    title: 'Full Stack Projects',
    description: 'Creating full-fledged applications with MERN stack.',
  },
  {
    title: 'API Integration',
    description: 'Integrating third-party services and APIs smoothly into apps.',
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-[#1F2937]">
      <Navbar />

      <main className="flex-grow">
        <motion.div
          className="max-w-5xl mx-auto py-10 px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-indigo-600 text-white text-center mb-6">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-[#1F2937] mb-1">{service.title}</h3>
              <p className="text-[#C15C00] font-medium mb-2">Professional Service</p>
              <p className="text-[#6B7280]">{service.description}</p>
            </motion.div>

            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}