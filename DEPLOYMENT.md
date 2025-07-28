# 🚀 Deployment Guide

Hướng dẫn chi tiết deploy CV Portfolio lên các platform khác nhau.

## 📋 Chuẩn bị

### 1. Hoàn thiện thông tin cá nhân
Trước khi deploy, hãy cập nhật thông tin cá nhân trong file:
- `src/data/constants.js` - Thông tin cá nhân, skills, experience, projects
- `src/components/Hero.jsx` - Thông tin trên trang chủ
- `src/components/Contact.jsx` - Thông tin liên hệ
- `public/favicon.ico` - Thay đổi icon website

### 2. Test local
```bash
npm run build
npm run preview
```

### 3. Kiểm tra các link
- Social media links
- Project demo links
- Email và phone numbers
- Resume/CV download link

## 🌐 Vercel Deployment

### Automatic Deployment (Recommended)

1. **Push lên GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect Vercel**
   - Vào [vercel.com](https://vercel.com)
   - Login với GitHub
   - Import repository
   - Deploy tự động

3. **Custom Domain (Optional)**
   - Vào Project Settings
   - Domains → Add domain
   - Cấu hình DNS records

### Manual Deployment

```bash
npm install -g vercel
npm run build
vercel --prod
```

## 🎯 Netlify Deployment

### Drag & Drop Method

1. **Build project**
   ```bash
   npm run build
   ```

2. **Upload to Netlify**
   - Vào [netlify.com](https://netlify.com)
   - Drag & drop thư mục `dist`

### Git Integration

1. **Connect repository**
   - New site from Git
   - Connect với GitHub/GitLab
   - Choose repository

2. **Build settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

### Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## 📱 GitHub Pages

### Using gh-pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist",
       "predeploy": "npm run build"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Repository Settings
   - Pages → Source: gh-pages branch

### Using GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## ☁️ Other Platforms

### Firebase Hosting

```bash
npm install -g firebase-tools
npm run build
firebase login
firebase init hosting
firebase deploy
```

### Surge.sh

```bash
npm install -g surge
npm run build
cd dist
surge
```

### Heroku (với static server)

1. **Add server.js**
   ```javascript
   const express = require('express')
   const path = require('path')
   const app = express()
   
   app.use(express.static(path.join(__dirname, 'dist')))
   
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'dist', 'index.html'))
   })
   
   const port = process.env.PORT || 3000
   app.listen(port, () => {
     console.log(`Server running on port ${port}`)
   })
   ```

2. **Update package.json**
   ```json
   {
     "scripts": {
       "start": "node server.js",
       "heroku-postbuild": "npm run build"
     }
   }
   ```

3. **Deploy**
   ```bash
   heroku create your-app-name
   git push heroku main
   ```

## 🔧 Optimization Tips

### Performance
- Optimize images (use WebP format)
- Enable gzip compression
- Minify CSS/JS (Vite làm tự động)
- Use CDN cho assets

### SEO
- Update meta tags trong `index.html`
- Add Open Graph tags
- Generate sitemap.xml
- Add robots.txt

### Security
- Enable HTTPS
- Add security headers (đã config trong netlify.toml/vercel.json)
- Hide source maps trong production

## 📊 Analytics & Monitoring

### Google Analytics
Add vào `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Google Search Console
- Submit sitemap
- Monitor search performance
- Fix indexing issues

## 🔗 Custom Domain

### Vercel
1. Project Settings → Domains
2. Add domain
3. Configure DNS: CNAME record pointing to vercel-dns.com

### Netlify
1. Site Settings → Domain management
2. Add custom domain
3. Configure DNS records

### GitHub Pages
1. Repository Settings → Pages
2. Custom domain field
3. Add CNAME file to repository root

## ❗ Troubleshooting

### Common Issues

1. **Build fails**
   - Check Node.js version (recommend 18+)
   - Clear cache: `npm run clean`
   - Delete node_modules and reinstall

2. **404 on refresh**
   - Configure redirects (netlify.toml/vercel.json có sẵn)
   - Add fallback route

3. **Images not loading**
   - Check image paths
   - Use relative paths
   - Optimize image sizes

4. **Slow loading**
   - Enable lazy loading
   - Optimize bundle size
   - Use code splitting

### Getting Help
- Check deployment logs
- Test locally first
- Verify environment variables
- Check browser console for errors
