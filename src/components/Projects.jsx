import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Syllabus Manager',
      description: 'Team project for managing university courses and classrooms. Active role in all stages, from specification to deployment.',
      tech: 'JavaFX, Java, Maven IDE, GitHub',
    },
    {
      title: 'Misti',
      description: 'Developed complex algorithms for an advanced version of the Pisti card game.',
      tech: 'Java, Eclipse IDE, GitHub',
    },
    {
      title: 'Flappy Bird',
      description: 'Created a simple replica game. Improved my skills in JavaFX and game development principles.',
      tech: 'JavaFX, Java, Maven IDE, GitHub',
    },
    {
      title: 'StockCheckerBot',
      description: 'Developed a simple bot using Python\'s Selenium library to monitor product availability.',
      tech: 'Python, Selenium, GitHub',
    },
  ];

  return (
    <div id="projects" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-purple-400 mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#112240] p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3 text-purple-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-gray-400">Tech Stack: {project.tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 