import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  credentialUrl?: string;
  image?: string; // Optional image/logo of the certificate
}

// Example data
const certifications: Certification[] = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Coursera',
    date: 'March 2024',
    credentialUrl: '#',
  },
  {
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: 'January 2024',
    credentialUrl: '#',
  },
  {
    title: 'Data Structures and Algorithms',
    issuer: 'HackerRank',
    date: 'December 2023',
  },
  {
    title: 'UI/UX Design Fundamentals',
    issuer: 'Udemy',
    date: 'October 2023',
    credentialUrl: '#',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl poppins-bold text-white">Certifications</h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-indigo-500 mx-auto rounded-full mt-2" />
          <p className="text-gray-400 poppins-regular mt-4 max-w-lg mx-auto">
            Some of the certifications I have earned to strengthen my skills
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: 'easeInOut' }}
              viewport={{ once: true }}
              className="relative p-6 rounded-xl group hover:scale-[1.03] hover:shadow-2xl transition-all duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <div className="absolute inset-0 rounded-xl bg-linear-to-br from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl poppins-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r from-purple-400 to-indigo-400 transition-all duration-300">
                  {cert.title}
                </h3>

                <p className="text-gray-300 text-sm poppins-medium mb-1">
                  {cert.issuer} • {cert.date}
                </p>

                {cert.description && (
                  <p className="text-gray-400 text-sm poppins-light mb-4">{cert.description}</p>
                )}

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm poppins-medium text-purple-400 hover:text-purple-300 mt-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Credential
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
