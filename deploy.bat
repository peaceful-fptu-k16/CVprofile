@echo off
echo 🚀 Bắt đầu deploy CV Portfolio...

:: Kiểm tra git repository
if not exist ".git" (
    echo 📁 Khởi tạo Git repository...
    git init
    git add .
    git commit -m "Initial commit: CV Portfolio"
    echo ✅ Git repository đã được khởi tạo
) else (
    echo 📝 Commit changes...
    git add .
    for /f "tokens=1-4 delims=/ " %%a in ('date /t') do set mydate=%%c-%%a-%%b
    for /f "tokens=1-2 delims=/:" %%a in ('time /t') do set mytime=%%a:%%b
    git commit -m "Update: %mydate% %mytime%"
)

:: Build project
echo 🔨 Building project...
call npm run build

if %errorlevel% equ 0 (
    echo ✅ Build thành công!
) else (
    echo ❌ Build thất bại!
    pause
    exit /b 1
)

:: Push lên GitHub (nếu có remote)
git remote get-url origin >nul 2>&1
if %errorlevel% equ 0 (
    echo 📤 Pushing to GitHub...
    git push origin main
    echo ✅ Code đã được push lên GitHub
    echo 🌐 Vercel sẽ tự động deploy trong vài phút
    echo 📋 Kiểm tra deployment tại: https://vercel.com/dashboard
) else (
    echo ⚠️  Chưa có GitHub remote. Hãy thêm remote repository:
    echo git remote add origin https://github.com/yourusername/cv-portfolio.git
    echo git push -u origin main
)

echo 🎉 Hoàn thành!
pause
