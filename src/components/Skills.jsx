import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 75 },
    { name: 'C', level: 65 },
    { name: 'C#', level: 55 },
    { name: 'Git/GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Maven', level: 80 },
    { name: 'Kaggle', level: 75 },
    { name: 'Eclipse/IntelliJ', level: 85 },
    { name: 'Unity', level: 40 },
  ];

  return (
    <div id="skills" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-purple-400 mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-[#112240] p-4 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <div className="h-2 bg-gray-700 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-purple-400 to-pink-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 