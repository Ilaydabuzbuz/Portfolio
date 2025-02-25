import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          whileHover={{ scale: 1.05 }}
        >
          Ilayda Buzbuz
        </motion.h1>
        <TypeAnimation
          sequence={[
            'Computer Engineering Student',
            1000
          ]}
          wrapper="h2"
          className="text-xl md:text-2xl text-gray-400"
          repeat={Infinity}
        />
      </motion.div>
    </div>
  );
};

export default Hero;