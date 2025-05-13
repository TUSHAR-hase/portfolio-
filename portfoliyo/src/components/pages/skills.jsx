import { Canvas } from '@react-three/fiber';
import { Sphere, Text } from '@react-three/drei';
import { motion } from 'framer-motion';

const SkillBubble = ({ skill, position }) => {
  return (
    <group position={position}>
      <Sphere args={[0.8]}>
        <meshStandardMaterial
          color="#ec4899"
          metalness={0.6}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>
      <Text
        position={[0, 0, 1.2]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {skill}
      </Text>
    </group>
  );
};

const Skills = () => {
  const skills = ['React', 'Firebase', 'Flutter', 'Node.js', 'Next.js', 'MongoDB','Rest APIs','c++','javascript','MySQL','Machine Learning'];

  return (
    <section id="skills" className="relative py-28 bg-gradient-to-b from-dark-primary to-purple-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
        >
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 3D Canvas */}
          <div className="h-96 w-full rounded-2xl overflow-hidden border border-white/10 bg-dark-primary/30 backdrop-blur-lg">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              
              <SkillBubble skill={skills[0]} position={[-2, 1, 0]} />
              <SkillBubble skill={skills[1]} position={[2, -1, 0]} />
              <SkillBubble skill={skills[2]} position={[0, 2, 0]} />
            </Canvas>
          </div>

          {/* Skill List */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                    <span className="text-xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white/90">{skill}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;