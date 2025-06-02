import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import CompanyCard from "./components/CompanyCard";

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
  // You can add more projects similarly...
];

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
  // Add more companies if needed
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-slate-900 text-white">
      <Navbar />

      <section className="max-w-5xl mx-auto py-10 px-4">
        {/* Introduction */}

        <h1 className="text-5xl font-extrabold mb-6 text-white leading-tight">
          👋 Hey, I’m{" "}
          <span
            className="underline cursor-pointer decoration-pink-500 decoration-2 hover:decoration-pink-400 transition duration-300 tracking-wide
            bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent"
          >
            Anurag Yadav
          </span>
        </h1>

        <p className="text-lg text-slate-300 max-w-lg leading-relaxed mb-14">
          🚀 I’m a{" "}
          <span className="text-indigo-400 font-semibold">Full Stack Developer</span>{" "}
          passionate about crafting{" "}
          <span className="text-pink-400 font-semibold">scalable</span>,{" "}
          <span className="text-purple-400 font-semibold">dynamic</span>, and{" "}
          <span className="text-indigo-400 font-semibold">impactful</span> digital solutions — transforming ideas into powerful, seamless user experiences. Let’s build something extraordinary together!
        </p>

        {/* Projects Section */}
        <h2 id="projects" className="text-2xl font-semibold mb-4 text-indigo-300 text-white">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Companies Section */}
        <h2
          id="companies"
          className="text-2xl font-semibold mt-16 mb-4 text-indigo-300 text-white"
        >
          Companies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {companies.map((company, index) => (
            <CompanyCard key={index} {...company} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
