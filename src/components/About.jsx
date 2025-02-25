import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-purple-400 mb-4">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <p className="text-lg mb-4">
                Computer Engineering third-year student from Izmir University of Economics with a full scholarship. 
                Passionate about software development and problem-solving. Currently working on Data Science and Machine Learning.
              </p>
              <p className="text-lg">
                Experienced in Object-Oriented Programming, Data Structures & Algorithms, 
                and various modern development tools and frameworks.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-purple-400 to-pink-600 p-1 rounded-lg"
            >
              <div className="bg-[#0a192f] p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="mb-2">B.S. Computer Engineering</p>
              <p className="text-gray-400">Izmir University of Economics</p>
              <p className="text-purple-400 mb-4">GPA: 2.83/4.0</p> {/* Added margin-bottom */}
              <p className="mb-2">M.S. Computer Science - Exchange Student</p>
              <p className="text-gray-400">Hochschule Fulda</p>
            </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 