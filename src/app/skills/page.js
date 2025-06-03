'use client';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  SiJavascript,
  SiTypescript,
  // SiPython,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,  
  SiExpress,
  SiGraphql,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiAmazon,
  SiVercel,
  SiNetlify,
  SiDocker,
  SiNginx,
  SiCloudflare,
  SiGit,
  SiGithub,
  SiGitlab,
  SiJest,
  SiTestinglibrary,
  SiPostman,
  SiJira,
  SiFigma,
  SiNotion,
  SiRedux,
  SiAxios,
  SiFramer,
} from 'react-icons/si';
import { FaCode, FaTools } from 'react-icons/fa';
import { RiJavaLine } from "react-icons/ri";
import { DiVisualstudio } from "react-icons/di";

const iconMap = {
  Java: <RiJavaLine />,
  JavaScript: <SiJavascript />,
  TypeScript: <SiTypescript />,
  // Python: <SiPython />,
  React: <SiReact />,
  'Next.js': <SiNextdotjs />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  'Tailwind CSS': <SiTailwindcss />,
  Bootstrap: <SiBootstrap />,
  'Node.js': <SiNodedotjs />,
  'Express.js': <SiExpress />,
  'REST APIs': <FaCode />,
  GraphQL: <SiGraphql />,
  'JWT Auth': <SiJsonwebtokens />,
  MongoDB: <SiMongodb />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  Firebase: <SiFirebase />,
  'AWS (Lambda, S3, EC2)': <SiAmazon />,
  Vercel: <SiVercel />,
  Netlify: <SiNetlify />,
  Docker: <SiDocker />,
  Nginx: <SiNginx />,
  Cloudflare: <SiCloudflare />,
  Git: <SiGit />,
  GitHub: <SiGithub />,
  GitLab: <SiGitlab />,
  'GitHub Actions': <SiGithub />, // same icon reused
  'CI/CD Pipelines': <FaTools />,
  Jest: <SiJest />,
  'React Testing Library': <SiTestinglibrary />,
  Postman: <SiPostman />,
  'Chrome DevTools': <FaTools />, // no specific icon in react-icons/si
  'VS Code': <DiVisualstudio />,
  Jira: <SiJira />,
  Figma: <SiFigma />,
  Notion: <SiNotion />,
  Redux: <SiRedux />,
  Axios: <SiAxios />,
  'Framer Motion': <SiFramer />,
};


const skillCategories = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend Technologies',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend Technologies',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT Auth'],
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    category: 'DevOps / Cloud / Server',
    skills: [
      'AWS (Lambda, S3, EC2)',
      'Vercel',
      'Netlify',
      'Render',
      'Nginx',
      'Cloudflare',
      'Docker',
    ],
  },
  {
    category: 'Version Control & CI/CD',
    skills: ['Git', 'GitHub', 'GitLab', 'GitHub Actions', 'CI/CD Pipelines'],
  },
  {
    category: 'Testing & Debugging',
    skills: ['Jest', 'React Testing Library', 'Postman', 'Chrome DevTools'],
  },
  {
    category: 'Project Management / Tools',
    skills: ['VS Code', 'Jira', 'Figma', 'Notion'],
  },
  {
    category: 'Frameworks / Libraries',
    skills: ['Redux', 'Axios', 'Framer Motion'],
  },
];

export default function SkillsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Navbar />
      <main className="flex-grow">
        <motion.div
          className="max-w-6xl mx-auto py-12 px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-indigo-400 text-white mb-10 text-center">
            My Tech Stack
          </h2>

          <div className="space-y-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="text-2xl font-semibold text-pink-400 mb-4">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="flex items-center gap-3 bg-slate-900 text-white px-4 py-3 rounded-2xl border border-slate-700 hover:border-pink-500 hover:text-pink-300 transition-all duration-300 shadow-inner hover:shadow-pink-400/30"
                      whileHover={{ scale: 1.03 }}
                    >
                      <span className="text-xl">{iconMap[skill] || <FaCode />}</span>
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
