import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-purple-400 mb-12">Contact Me</h2>
          <div className="flex flex-col items-center space-y-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/ilaydabuzbuz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-purple-400"
            >
              <span>GitHub</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/ilaydabuzbuz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-purple-400"
            >
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="mailto:ilaydabuzbuz@gmail.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-purple-400"
            >
              <span>Email</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 