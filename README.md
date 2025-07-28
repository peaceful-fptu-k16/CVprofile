# CV Portfolio Website

Trang web CV portfolio hiện đại được xây dựng bằng React và TailwindCSS với thiết kế responsive và animations mượt mà.

## 🚀 Tính năng

- **Responsive Design**: Tối ưu cho mọi thiết bị (desktop, tablet, mobile)
- **Dark/Light Mode**: Chế độ tối và sáng có thể chuyển đổi
- **Smooth Animations**: Hiệu ứng chuyển động mượt mà với Framer Motion
- **Modern UI**: Thiết kế hiện đại với TailwindCSS
- **SEO Friendly**: Tối ưu cho công cụ tìm kiếm
- **Fast Loading**: Tối ưu hiệu suất với Vite

## 📋 Cấu trúc trang

1. **Trang chủ (Hero)** - Giới thiệu ngắn gọn và ấn tượng
2. **Giới thiệu (About)** - Thông tin chi tiết về bản thân
3. **Kỹ năng (Skills)** - Showcase các kỹ năng chuyên môn
4. **Kinh nghiệm (Experience)** - Timeline kinh nghiệm làm việc
5. **Học vấn (Education)** - Bằng cấp và chứng chỉ
6. **Dự án (Projects)** - Portfolio các dự án đã thực hiện
7. **Liên hệ (Contact)** - Form liên hệ và thông tin cá nhân

## 🛠️ Công nghệ sử dụng

- **React.js** - Frontend framework
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Vite** - Build tool
- **PostCSS** - CSS processor

## 🚀 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 16.0 hoặc cao hơn
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm run dev
```

### Build cho production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 📁 Cấu trúc project

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Experience.jsx  # Experience timeline
│   ├── Education.jsx   # Education section
│   ├── Projects.jsx    # Projects portfolio
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── App.jsx             # Main App component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Thay đổi thông tin cá nhân

1. **Hero Section**: Cập nhật tên, title và mô tả trong `src/components/Hero.jsx`
2. **About Section**: Thay đổi thông tin giới thiệu trong `src/components/About.jsx`
3. **Skills**: Cập nhật danh sách kỹ năng trong `src/components/Skills.jsx`
4. **Experience**: Thêm/sửa kinh nghiệm làm việc trong `src/components/Experience.jsx`
5. **Education**: Cập nhật học vấn và chứng chỉ trong `src/components/Education.jsx`
6. **Projects**: Thêm dự án của bạn trong `src/components/Projects.jsx`
7. **Contact**: Thay đổi thông tin liên hệ trong `src/components/Contact.jsx`

### Thay đổi màu sắc

Colors được định nghĩa trong `tailwind.config.js`. Bạn có thể thay đổi:
- `primary`: Màu chính của website
- `dark`: Màu cho dark mode

### Thêm animations

Sử dụng Framer Motion để thêm animations:
```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content here
</motion.div>
```

## 📱 Responsive Breakpoints

- `sm`: 640px và lên
- `md`: 768px và lên  
- `lg`: 1024px và lên
- `xl`: 1280px và lên
- `2xl`: 1536px và lên

## 🚀 Deployment

### Vercel (Recommended) - Hướng dẫn chi tiết

#### Bước 1: Tạo GitHub Repository
1. Tạo repository mới trên [GitHub](https://github.com/new)
2. Clone hoặc push code lên GitHub:
```bash
git init
git add .
git commit -m "Initial commit: CV Portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/cv-portfolio.git
git push -u origin main
```

#### Bước 2: Deploy lên Vercel
1. **Truy cập [Vercel](https://vercel.com)** và đăng nhập bằng GitHub
2. **Click "New Project"** 
3. **Import Git Repository**: Chọn repository vừa tạo
4. **Configure Project**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (để mặc định)
   - **Build Command**: `npm run build` (đã có sẵn)
   - **Output Directory**: `dist` (đã có sẵn)
   - **Install Command**: `npm install`

5. **Environment Variables**: Không cần thiết cho project này
6. **Click "Deploy"** và chờ vài phút

#### Bước 3: Tự động deploy
- Mỗi khi push code mới lên GitHub, Vercel sẽ tự động deploy
- Preview deployments cho pull requests
- Production deployments cho branch `main`

#### Domain tùy chỉnh (Optional)
1. Vào **Project Settings** > **Domains**
2. Add domain của bạn
3. Cấu hình DNS theo hướng dẫn

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourname/cv-portfolio)

### Netlify
1. Build project: `npm run build`
2. Upload thư mục `dist` lên [Netlify](https://netlify.com)
3. Hoặc connect với GitHub repository

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourname/cv-portfolio)

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script vào package.json:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run build && npm run deploy`

### Manual Deployment
1. Build: `npm run build`
2. Upload thư mục `dist` lên web server của bạn

## 📧 Contact Form

Contact form hiện tại chỉ là demo. Để tích hợp thực tế, bạn có thể:

1. **Sử dụng Formspree**: Thêm endpoint vào form action
2. **Tích hợp EmailJS**: Gửi email trực tiếp từ frontend
3. **Backend API**: Tạo API endpoint để xử lý form submission

## 🔧 Tối ưu hóa

- **Images**: Thêm ảnh thật thay cho placeholder emoji
- **SEO**: Cập nhật meta tags trong `index.html`
- **Performance**: Optimize images và lazy loading
- **Analytics**: Thêm Google Analytics tracking

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Made with ❤️ and ☕ by [Your Name]**
