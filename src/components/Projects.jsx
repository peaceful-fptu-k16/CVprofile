import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiEye, FiCode, FiStar } from 'react-icons/fi'

const Projects = () => {
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

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Full Stack',
      description: 'Nền tảng thương mại điện tử hoàn chỉnh với cart, payment, admin dashboard và real-time notifications.',
      longDescription: 'Ứng dụng thương mại điện tử với đầy đủ tính năng như quản lý sản phẩm, giỏ hàng, thanh toán online, theo dõi đơn hàng và admin dashboard. Tích hợp với các API thanh toán và có hệ thống notification real-time.',
      image: '🛒',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io', 'TailwindCSS'],
      features: [
        'Responsive design cho mọi thiết bị',
        'Thanh toán online với Stripe',
        'Admin dashboard với analytics',
        'Real-time notifications',
        'Search và filter sản phẩm',
        'User authentication & authorization'
      ],
      github: 'https://github.com/yourname/ecommerce-platform',
      demo: 'https://ecommerce-demo.vercel.app',
      status: 'Completed',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Frontend',
      description: 'Ứng dụng quản lý công việc với Kanban board, drag & drop, real-time collaboration.',
      longDescription: 'Ứng dụng quản lý task với giao diện Kanban, hỗ trợ drag & drop, collaboration real-time giữa nhiều user. Có tính năng deadline reminder, file attachments và comment system.',
      image: '📋',
      technologies: ['React.js', 'TypeScript', 'Redux Toolkit', 'Firebase', 'Framer Motion'],
      features: [
        'Kanban board với drag & drop',
        'Real-time collaboration',
        'File attachments',
        'Comment system',
        'Deadline notifications',
        'Dark/Light theme'
      ],
      github: 'https://github.com/yourname/task-manager',
      demo: 'https://task-manager-demo.vercel.app',
      status: 'Completed',
      featured: false
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'Frontend',
      description: 'Dashboard thời tiết với forecast 7 ngày, maps, charts và responsive design.',
      longDescription: 'Ứng dụng dashboard thời tiết hiển thị thông tin thời tiết hiện tại, dự báo 7 ngày, bản đồ thời tiết với charts và graphs. Responsive design và hỗ trợ geolocation.',
      image: '🌤️',
      technologies: ['React.js', 'Chart.js', 'OpenWeather API', 'Leaflet Maps', 'SASS'],
      features: [
        'Current weather & 7-day forecast',
        'Interactive weather maps',
        'Charts & graphs',
        'Geolocation support',
        'Search by city',
        'Responsive design'
      ],
      github: 'https://github.com/yourname/weather-dashboard',
      demo: 'https://weather-dashboard-demo.vercel.app',
      status: 'Completed',
      featured: false
    },
    {
      id: 4,
      title: 'Chat Application',
      category: 'Full Stack',
      description: 'Ứng dụng chat real-time với rooms, file sharing, emoji reactions và video calls.',
      longDescription: 'Ứng dụng chat real-time hỗ trợ private & group chat, file sharing, emoji reactions, typing indicators và video calls. Có tính năng message encryption và user presence.',
      image: '💬',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'WebRTC', 'PostgreSQL', 'JWT'],
      features: [
        'Real-time messaging',
        'Private & group chats',
        'File sharing',
        'Video calls',
        'Emoji reactions',
        'Message encryption'
      ],
      github: 'https://github.com/yourname/chat-app',
      demo: 'https://chat-app-demo.vercel.app',
      status: 'In Progress',
      featured: true
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'Frontend',
      description: 'Trang web portfolio responsive với animations, dark mode và contact form.',
      longDescription: 'Website portfolio cá nhân với thiết kế hiện đại, animations mượt mà, dark/light mode, contact form và blog section. Tối ưu SEO và performance.',
      image: '🌐',
      technologies: ['Next.js', 'TailwindCSS', 'Framer Motion', 'MDX', 'Vercel'],
      features: [
        'Responsive design',
        'Dark/Light theme',
        'Smooth animations',
        'Blog with MDX',
        'Contact form',
        'SEO optimized'
      ],
      github: 'https://github.com/yourname/portfolio',
      demo: 'https://your-portfolio.vercel.app',
      status: 'Completed',
      featured: false
    },
    {
      id: 6,
      title: 'Expense Tracker',
      category: 'Mobile',
      description: 'Ứng dụng React Native theo dõi chi tiêu với charts, categories và export data.',
      longDescription: 'Ứng dụng mobile theo dõi chi tiêu với categorization, budget tracking, expense charts, bill reminders và data export. Offline support và data synchronization.',
      image: '💰',
      technologies: ['React Native', 'Expo', 'SQLite', 'Chart.js', 'AsyncStorage'],
      features: [
        'Expense categorization',
        'Budget tracking',
        'Visual charts',
        'Bill reminders',
        'Data export',
        'Offline support'
      ],
      github: 'https://github.com/yourname/expense-tracker',
      demo: 'https://expo.dev/@yourname/expense-tracker',
      status: 'Completed',
      featured: false
    }
  ]

  const ProjectCard = ({ project, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className={`bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
        project.featured ? 'ring-2 ring-primary-500 ring-opacity-50' : ''
      }`}
    >
      {project.featured && (
        <div className="bg-gradient-to-r from-primary-500 to-purple-500 text-white text-center py-2 text-sm font-semibold">
          <FiStar className="inline mr-1" />
          Dự án nổi bật
        </div>
      )}
      
      <div className="p-6">
        {/* Project Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="text-4xl mr-4">{project.image}</div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-xs font-medium">
                  {project.category}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                    : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
            Tính năng chính:
          </h4>
          <div className="grid grid-cols-1 gap-1">
            {project.features.slice(0, 3).map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                {feature}
              </div>
            ))}
            {project.features.length > 3 && (
              <div className="text-sm text-gray-500 dark:text-gray-400 ml-3.5">
                +{project.features.length - 3} tính năng khác
              </div>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
          >
            <FiEye size={16} />
            Demo
          </motion.a>
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 py-2 px-4 rounded-lg font-medium transition-all duration-200"
          >
            <FiGithub size={16} />
            Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )

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
              Dự án của <span className="text-gradient">tôi</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Khám phá các dự án mà tôi đã thực hiện, từ web applications đến mobile apps
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Có ý tưởng dự án? Hãy cùng nhau biến nó thành hiện thực!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Liên hệ với tôi
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
