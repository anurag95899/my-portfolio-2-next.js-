'use client';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Task Manager",
    description: "A full-stack task manager built using MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/yourgithub/task-manager",
  },
  {
    title: "Chat App",
    description: "Real-time chat app built with Socket.io.",
    tech: ["React", "Node.js", "Socket.io"],
    link: "https://github.com/yourgithub/chat-app",
  },
    {
    title: "Task Manager",
    description: "A full-stack task manager built using MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/yourgithub/task-manager",
  },
  {
    title: "Chat App",
    description: "Real-time chat app built with Socket.io.",
    tech: ["React", "Node.js", "Socket.io"],
    link: "https://github.com/yourgithub/chat-app",
  },
    {
    title: "Task Manager",
    description: "A full-stack task manager built using MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/yourgithub/task-manager",
  },
  {
    title: "Chat App",
    description: "Real-time chat app built with Socket.io.",
    tech: ["React", "Node.js", "Socket.io"],
    link: "https://github.com/yourgithub/chat-app",
  },
    {
    title: "Task Manager",
    description: "A full-stack task manager built using MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    link: "https://github.com/yourgithub/task-manager",
  },
  {
    title: "Chat App",
    description: "Real-time chat app built with Socket.io.",
    tech: ["React", "Node.js", "Socket.io"],
    link: "https://github.com/yourgithub/chat-app",
  },
];

const popInVariants = {
  hidden: { scale: 0, rotate: 15, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  }),
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen  bg-[#FAF9F6] bg-slate-900 text-white">
      <Navbar />

      <main className="flex-grow">
        <div className="max-w-5xl mx-auto py-12 px-6">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">Projects</h1>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={popInVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 15px rgba(99, 102, 241, 0.6)",
                }}
                className="cursor-pointer rounded-xl "
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}