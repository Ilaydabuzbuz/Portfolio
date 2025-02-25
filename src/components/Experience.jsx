import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div id="experience" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-purple-400 mb-12">Experience</h2>
          <div className="relative">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-purple-400"
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <div className="bg-[#112240] p-6 rounded-lg shadow-lg ml-4 md:ml-0">
                <h3 className="text-xl font-bold mb-2">Software Engineering Club</h3>
                <p className="text-gray-400">Member of Management Board</p>
                <p className="text-sm text-gray-500">Oct. 2023 - Oct.2024</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience; 