// Personal Information
export const PERSONAL_INFO = {
  name: "Tên của bạn",
  title: "Full Stack Developer | UI/UX Designer",
  bio: "Tôi tạo ra những trải nghiệm web tuyệt vời với code sạch và thiết kế đẹp mắt. Chuyên về React, Node.js và các công nghệ hiện đại.",
  location: "Hà Nội, Việt Nam",
  email: "your.email@example.com",
  phone: "+84 123 456 789",
  website: "https://your-portfolio.vercel.app"
}

// Social Links
export const SOCIAL_LINKS = {
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
  twitter: "https://twitter.com/yourname",
  facebook: "https://facebook.com/yourname"
}

// Skills Data
export const SKILLS_DATA = {
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'TailwindCSS', level: 88 },
    { name: 'Next.js', level: 75 },
    { name: 'Vue.js', level: 70 },
    { name: 'SASS/SCSS', level: 85 }
  ],
  backend: [
    { name: 'Node.js', level: 82 },
    { name: 'Express.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 70 },
    { name: 'REST APIs', level: 85 },
    { name: 'GraphQL', level: 65 },
    { name: 'Firebase', level: 78 },
    { name: 'Prisma', level: 72 }
  ],
  mobile: [
    { name: 'React Native', level: 75 },
    { name: 'Flutter', level: 60 },
    { name: 'iOS Development', level: 50 },
    { name: 'Android Development', level: 55 }
  ],
  tools: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'Docker', level: 70 },
    { name: 'AWS', level: 65 },
    { name: 'Figma', level: 80 },
    { name: 'Webpack', level: 75 },
    { name: 'Jest Testing', level: 70 },
    { name: 'VS Code', level: 95 },
    { name: 'Photoshop', level: 60 }
  ]
}

// Experience Data
export const EXPERIENCE_DATA = [
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

// Projects Data
export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'Nền tảng thương mại điện tử hoàn chỉnh với cart, payment, admin dashboard và real-time notifications.',
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
  }
]

// Additional Skills
export const ADDITIONAL_SKILLS = [
  'Agile/Scrum', 'UI/UX Design', 'SEO Optimization', 'Performance Optimization',
  'Responsive Design', 'Cross-browser Compatibility', 'API Integration',
  'Code Review', 'Team Leadership', 'Problem Solving', 'Technical Writing',
  'Microservices Architecture', 'Progressive Web Apps (PWA)', 'Accessibility (a11y)'
]
