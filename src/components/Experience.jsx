import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi'

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Hà Nội, Việt Nam',
      period: '2023 - Hiện tại',
      type: 'Full-time',
      description: 'Phát triển và duy trì các ứng dụng web quy mô lớn sử dụng React, Node.js và MongoDB. Dẫn dắt team frontend và tham gia thiết kế kiến trúc hệ thống.',
      achievements: [
        'Cải thiện hiệu suất ứng dụng 40% thông qua optimization',
        'Dẫn dắt team 5 developers junior',
        'Triển khai CI/CD pipeline giảm 50% thời gian deployment',
        'Phát triển 3 ứng dụng web với hơn 10k users'
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'TypeScript']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'TP.HCM, Việt Nam',
      period: '2022 - 2023',
      type: 'Full-time',
      description: 'Phát triển giao diện người dùng cho các website và ứng dụng web của khách hàng. Tập trung vào responsive design và user experience.',
      achievements: [
        'Hoàn thành 15+ dự án website cho khách hàng',
        'Tăng conversion rate 25% cho e-commerce sites',
        'Implement design system cho công ty',
        'Mentoring 2 intern developers'
      ],
      technologies: ['React.js', 'Vue.js', 'SASS', 'Bootstrap', 'jQuery', 'Figma']
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'StartUp Innovate',
      location: 'Đà Nẵng, Việt Nam',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Bắt đầu sự nghiệp với vai trò phát triển các tính năng frontend và học hỏi các best practices trong phát triển phần mềm.',
      achievements: [
        'Phát triển và maintain 5 landing pages',
        'Tham gia xây dựng admin dashboard',
        'Học và áp dụng React hooks và context API',
        'Cộng tác với designer để implement UI/UX'
      ],
      technologies: ['JavaScript', 'React.js', 'CSS3', 'HTML5', 'Git', 'REST APIs']
    }
  ]

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
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
              Kinh nghiệm <span className="text-gradient">làm việc</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hành trình phát triển sự nghiệp của tôi với những thành tựu và kinh nghiệm quý báu
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-purple-500"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-800 z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8 md:ml-0' : 'md:ml-8 md:mr-0'
                  } md:w-1/2`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <FiBriefcase className="w-5 h-5 text-primary-500 mr-2" />
                          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900 px-2 py-1 rounded">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <FiCalendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center">
                            <FiMapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Thành tựu chính:
                        </h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Công nghệ sử dụng:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
