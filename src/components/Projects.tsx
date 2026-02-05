import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'Student Clearance and Monitoring System (SCMS) ',
    description: 'A comprehensive web application designed to streamline the student clearance process for educational institutions. Built with Angular for the frontend and PHP for the backend, SCMS offers an intuitive interface for students and administrators to manage clearance tasks efficiently.',
    tech: ['Angular', 'PHP', 'Typescript', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Enzonggg/scams.git',
  },
  {
    title: 'Dental Clinic Management System',
    description: 'A robust web application tailored for dental clinics to manage patient records, appointments, and treatments. Developed using Angular for a dynamic user interface and Supabase for backend services, this system enhances clinic operations and patient care.',
    tech: ['Flask', 'Python', 'Bootstrap','HTML', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Enzonggg/dentalclinicsystem123.git',
  },
  {
    title: 'Ivans Gourmet',
    description: 'A visually appealing and user-friendly food delivery website built with React, Tailwind CSS, and JavaScript. This project showcases a variety of dishes, complete with menus, ordering functionality, and responsive design to ensure a seamless experience across all devices.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://ivansgourmet.vercel.app/',
    githubUrl: 'https://github.com/Enzonggg/Ivansgourmet.git',
  },
  {
    title: 'Foodie',
    description: 'An e-commerce web application specializing in food delivery services.',
    tech: ['Flask','HTML', 'CSS', 'JavaScript', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Enzonggg/Foodie.git',
  },
  {
    title: 'Pet Health Tracker',
    description: 'A mobile-responsive web application that helps pet owners monitor and manage their pets\' health records, appointments, and dietary needs. Built with Dart(Flutter), this project emphasizes user-friendly design and functionality.',
    tech: ['Dart', 'Flutter'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Enzonggg/Pet-Health-Tracker.git',
  },
  {
    title: 'Expense Tracker',
    description: 'A simple and effective web application for tracking personal expenses and budgeting.This project provides users with tools to log expenses, categorize spending, and visualize financial data through charts and reports.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Notes App',
    description: 'A clean and intuitive web application for creating, organizing, and managing notes. Built with HTML, CSS, and JavaScript, this project focuses on simplicity and ease of use, allowing users to quickly jot down ideas and access them later.',
    tech: ['HTML', 'CSS', 'JavaScript','PHP(CodeIgniter)', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Enzonggg/notesapp_bulma.git',
  },
  {
    title: 'School Club Management System',
    description: 'A web application designed to facilitate the management of school clubs and organizations. Developed using Angular, CSS, and TypeScript, this project allows club members to organize events, manage memberships, and communicate effectively within the club community.',
    tech: ['Angular', 'TypeScript', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Travel Landing Page',
    description: 'Visually appealing landing page for a travel agency, designed to attract and engage visitors. Built with HTML and CSS, this project features stunning imagery, clear calls to action, and a responsive layout to ensure an optimal viewing experience across all devices.',
    tech: ['HTML', 'CSS'],
    liveUrl: 'https://enzonggg.github.io/travel-landing-page/',
    githubUrl: 'https://github.com/Enzonggg/travel-landing-page.git',
  },
  {
    title: 'Portfolio Website',
    description: 'A sleek and modern portfolio website to showcase personal projects and skills. Developed using HTML, CSS, and JavaScript, this project emphasizes responsive design and user experience, making it easy for potential clients or employers to navigate and learn more about the developer.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://lorenzoaurinportfolio.vercel.app/',
    githubUrl: 'https://github.com/Enzonggg/lorenzoaurinportfolio.git',
  }
];


const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl poppins-bold text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mt-2" />
          <p className="text-gray-400 poppins-regular mt-4 max-w-lg mx-auto">
            A selection of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: index * 0.2, ease: 'easeInOut' }} // slow fade-in, staggered
              viewport={{ once: true }}
              className="relative p-6 rounded-xl group hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)', 
                backdropFilter: 'blur(15px)',          
                WebkitBackdropFilter: 'blur(15px)',   
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {/* Gradient hover overlay */}
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl poppins-semibold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r from-purple-400 to-indigo-400 transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm poppins-light mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 poppins-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm poppins-medium text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm poppins-medium text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
