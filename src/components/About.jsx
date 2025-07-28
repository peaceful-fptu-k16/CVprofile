import { motion } from 'framer-motion'
import { FiUser, FiHeart, FiTarget } from 'react-icons/fi'

const About = () => {
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

  const stats = [
    { number: '3+', label: 'Năm kinh nghiệm' },
    { number: '50+', label: 'Dự án hoàn thành' },
    { number: '100%', label: 'Khách hàng hài lòng' },
    { number: '24/7', label: 'Hỗ trợ khách hàng' },
  ]

  const highlights = [
    {
      icon: FiUser,
      title: 'Về tôi',
      description: 'Tôi là một developer đam mê với kinh nghiệm trong việc xây dựng ứng dụng web hiện đại và responsive.'
    },
    {
      icon: FiHeart,
      title: 'Đam mê',
      description: 'Tôi yêu thích việc học hỏi công nghệ mới và tạo ra những sản phẩm có ý nghĩa cho cộng đồng.'
    },
    {
      icon: FiTarget,
      title: 'Mục tiêu',
      description: 'Mục tiêu của tôi là trở thành một full-stack developer xuất sắc và đóng góp cho các dự án lớn.'
    },
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
              Giới thiệu về <span className="text-gradient">tôi</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Tìm hiểu thêm về hành trình, kinh nghiệm và đam mê của tôi trong lĩnh vực phát triển phần mềm
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Stats */}
            <motion.div variants={itemVariants}>
              <div className="relative">
                {/* Profile Image Placeholder */}
                <div className="w-full max-w-md mx-auto bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl p-1">
                  <div className="w-full h-80 bg-gray-200 dark:bg-dark-700 rounded-2xl flex items-center justify-center text-6xl">
                    📸
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white dark:bg-dark-900 rounded-xl p-4 text-center shadow-lg"
                    >
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div variants={itemVariants}>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Xin chào! Tôi là một Full Stack Developer với đam mê tạo ra những ứng dụng web 
                  đẹp mắt và hiệu quả. Với kinh nghiệm trong việc phát triển cả frontend và backend, 
                  tôi luôn tìm cách đưa ý tưởng thành hiện thực.
                </p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Tôi có kinh nghiệm làm việc với các công nghệ như React, Node.js, MongoDB, 
                  và nhiều framework hiện đại khác. Tôi luôn cập nhật với những trend mới nhất 
                  trong ngành công nghệ.
                </p>

                {/* Highlights */}
                <div className="space-y-4 mt-8">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-200"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
