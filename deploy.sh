#!/bin/bash

# Script deploy CV Portfolio lên Vercel
echo "🚀 Bắt đầu deploy CV Portfolio..."

# Kiểm tra git repository
if [ ! -d ".git" ]; then
    echo "📁 Khởi tạo Git repository..."
    git init
    git add .
    git commit -m "Initial commit: CV Portfolio"
    echo "✅ Git repository đã được khởi tạo"
else
    echo "📝 Commit changes..."
    git add .
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Build project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build thành công!"
else
    echo "❌ Build thất bại!"
    exit 1
fi

# Push lên GitHub (nếu có remote)
if git remote get-url origin > /dev/null 2>&1; then
    echo "📤 Pushing to GitHub..."
    git push origin main
    echo "✅ Code đã được push lên GitHub"
    echo "🌐 Vercel sẽ tự động deploy trong vài phút"
    echo "📋 Kiểm tra deployment tại: https://vercel.com/dashboard"
else
    echo "⚠️  Chưa có GitHub remote. Hãy thêm remote repository:"
    echo "git remote add origin https://github.com/yourusername/cv-portfolio.git"
    echo "git push -u origin main"
fi

echo "🎉 Hoàn thành!"
