import { motion } from 'framer-motion'
import { FiBook, FiAward, FiCalendar, FiMapPin } from 'react-icons/fi'

const Education = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const educations = [
    {
      id: 1,
      degree: 'Cử nhân Công nghệ Thông tin',
      school: 'Đại học Bách Khoa Hà Nội',
      location: 'Hà Nội, Việt Nam',
      period: '2017 - 2021',
      gpa: '3.7/4.0',
      description: 'Chuyên ngành Kỹ thuật Phần mềm. Học các môn về lập trình, cơ sở dữ liệu, thuật toán và cấu trúc dữ liệu.',
      highlights: [
        'Tốt nghiệp loại Khá',
        'Đồ án tốt nghiệp: Ứng dụng web quản lý thư viện',
        'Tham gia CLB Lập trình',
        'Giải Ba cuộc thi Hackathon 2020'
      ],
      coursework: [
        'Cấu trúc dữ liệu và Thuật toán',
        'Lập trình Web',
        'Cơ sở dữ liệu',
        'Kỹ thuật phần mềm',
        'Mạng máy tính',
        'Trí tuệ nhân tạo'
      ]
    }
  ]

  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-DEV-2023-001',
      description: 'Chứng chỉ xác nhận khả năng phát triển và triển khai ứng dụng trên AWS cloud platform.'
    },
    {
      id: 2,
      name: 'Google Analytics Certified',
      issuer: 'Google',
      date: '2023',
      credentialId: 'GA-CERT-2023-002',
      description: 'Chứng chỉ về phân tích web và tối ưu hóa hiệu suất website.'
    },
    {
      id: 3,
      name: 'React Developer Certificate',
      issuer: 'Meta (Facebook)',
      date: '2022',
      credentialId: 'META-REACT-2022-003',
      description: 'Chứng chỉ chuyên sâu về React.js development và best practices.'
    },
    {
      id: 4,
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2022',
      credentialId: 'FCC-JS-2022-004',
      description: 'Hoàn thành khóa học về JavaScript, thuật toán và cấu trúc dữ liệu.'
    }
  ]

  const onlineCourses = [
    'Complete React Developer Course - Zero to Mastery',
    'Node.js Developer Course - The Complete Guide',
    'AWS Cloud Practitioner Essentials',
    'MongoDB University - M001: MongoDB Basics',
    'Docker Mastery: Complete Toolset From a Docker Captain',
    'Advanced CSS and Sass: Flexbox, Grid, Animations'
  ]

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
              Học vấn & <span className="text-gradient">Chứng chỉ</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Nền tảng học vấn và các chứng chỉ chuyên môn trong quá trình phát triển sự nghiệp
            </p>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <FiBook className="w-6 h-6 mr-3 text-primary-500" />
              Học vấn
            </h3>
            
            {educations.map((edu) => (
              <motion.div
                key={edu.id}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column - Main Info */}
                  <div className="md:col-span-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center">
                        <FiCalendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded font-medium">
                        GPA: {edu.gpa}
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {edu.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Thành tích nổi bật:
                      </h5>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {highlight}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column - Coursework */}
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Môn học chính:
                    </h5>
                    <div className="space-y-2">
                      {edu.coursework.map((course, index) => (
                        <div
                          key={index}
                          className="px-3 py-2 bg-white dark:bg-dark-700 rounded-lg text-sm text-gray-700 dark:text-gray-300"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <FiAward className="w-6 h-6 mr-3 text-primary-500" />
              Chứng chỉ chuyên môn
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {cert.date}
                    </span>
                    <span className="text-xs bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Online Courses */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Khóa học trực tuyến đã hoàn thành
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {onlineCourses.map((course, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium cursor-default"
                >
                  {course}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
