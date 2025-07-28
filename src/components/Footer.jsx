import { motion } from 'framer-motion'
import { FiHeart, FiCode, FiCoffee } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gradient mb-4 cursor-pointer"
            >
              Portfolio
            </motion.h3>
            <p className="text-gray-300 leading-relaxed">
              Tôi là một developer đam mê tạo ra những sản phẩm web tuyệt vời 
              với code sạch và thiết kế đẹp mắt.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <nav className="space-y-2">
              {[
                { href: '#home', label: 'Trang chủ' },
                { href: '#about', label: 'Giới thiệu' },
                { href: '#skills', label: 'Kỹ năng' },
                { href: '#projects', label: 'Dự án' },
                { href: '#contact', label: 'Liên hệ' },
              ].map((item) => (
                <motion.button
                  key={item.href}
                  whileHover={{ x: 5 }}
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 your.email@example.com</p>
              <p>📱 +84 123 456 789</p>
              <p>📍 Hà Nội, Việt Nam</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Copyright */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
            >
              © {currentYear} Portfolio. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="mx-1"
              >
                <FiHeart className="text-red-500" />
              </motion.span>
              and{' '}
              <FiCode className="mx-1 text-primary-400" />
              by Tên của bạn
            </motion.p>

            {/* Tech Stack */}
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center">
                <span>Built with React + TailwindCSS</span>
              </div>
              <div className="flex items-center">
                <FiCoffee className="mr-1" />
                <span>Powered by coffee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50"
          aria-label="Back to top"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
