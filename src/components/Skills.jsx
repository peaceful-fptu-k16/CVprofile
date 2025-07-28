import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiSmartphone, 
  FiDatabase, 
  FiGitBranch,
  FiLayers,
  FiTool
} from 'react-icons/fi'
import { SKILLS_DATA, ADDITIONAL_SKILLS } from '../data/constants'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const skillCategories = [
    {
      icon: FiCode,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: SKILLS_DATA.frontend
    },
    {
      icon: FiDatabase,
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: SKILLS_DATA.backend
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Development',
      color: 'from-purple-500 to-pink-500',
      skills: SKILLS_DATA.mobile
    },
    {
      icon: FiTool,
      title: 'Tools & Technologies',
      color: 'from-orange-500 to-red-500',
      skills: SKILLS_DATA.tools
    }
  ]

  const SkillBar = ({ skill, delay }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ delay: delay + 0.2, duration: 1 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
        />
      </div>
    </motion.div>
  )

  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kỹ năng & <span className="text-gradient">Chuyên môn</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Khám phá những công nghệ và kỹ năng mà tôi sử dụng để tạo ra những sản phẩm chất lượng cao
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skillIndex}
                      skill={skill}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
              Kỹ năng khác
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {ADDITIONAL_SKILLS.map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
