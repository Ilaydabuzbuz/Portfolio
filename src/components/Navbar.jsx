import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#0a192f]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <span className="text-xl font-bold text-purple-400">IB</span>
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <div className="flex space-x-4">
              <NavLink to="about">About</NavLink>
              <NavLink to="skills">Skills</NavLink>
              <NavLink to="projects">Projects</NavLink>
              <NavLink to="experience">Experience</NavLink>
              <NavLink to="contact">Contact</NavLink>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
  >
    {children}
  </Link>
);

export default Navbar; 