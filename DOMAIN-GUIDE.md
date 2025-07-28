# 🌐 Hướng dẫn cấu hình Domain io.me cho CV Portfolio

## 📋 Tổng quan
Sau khi deploy thành công lên Vercel, bạn có thể cấu hình domain tùy chỉnh `io.me` để có URL đẹp hơn.

## 🛒 Bước 1: Mua domain io.me

### Các nhà cung cấp domain io.me:
- **[Namecheap](https://www.namecheap.com)** - Giá rẻ, UI đơn giản
- **[GoDaddy](https://godaddy.com)** - Phổ biến, hỗ trợ tốt
- **[Cloudflare](https://domains.cloudflare.com)** - Giá gốc, DNS miễn phí
- **[Google Domains](https://domains.google)** - Tích hợp Google services

### Gợi ý tên domain:
- `peaceful.io.me`
- `peaceful-fptu.io.me` 
- `peaceful-dev.io.me`
- `peaceful-portfolio.io.me`

## ⚙️ Bước 2: Cấu hình DNS

### Tại nhà cung cấp domain:
1. **Vào DNS Management / DNS Records**
2. **Thêm CNAME record:**
   ```
   Type: CNAME
   Host/Name: @ (hoặc để trống cho root domain)
   Value/Target: cname.vercel-dns.com
   TTL: 300 (hoặc Auto)
   ```

### Nếu muốn subdomain (www):
```
Type: CNAME
Host/Name: www
Value/Target: cname.vercel-dns.com
TTL: 300
```

## 🚀 Bước 3: Cấu hình trên Vercel

### 3.1 Truy cập Vercel Dashboard:
1. Đăng nhập [vercel.com](https://vercel.com)
2. Chọn project **"CVprofile"**
3. Vào tab **"Settings"**
4. Chọn **"Domains"** từ sidebar

### 3.2 Thêm domain:
1. Click **"Add"** 
2. Nhập domain: `yourname.io.me`
3. Click **"Add"**

### 3.3 Verify domain:
- Vercel sẽ kiểm tra DNS record
- Nếu đúng → ✅ Verified
- Nếu sai → ❌ Hiển thị lỗi và hướng dẫn fix

## ⏱️ Bước 4: Chờ DNS Propagation

### Thời gian chờ:
- **Thường**: 5-30 phút
- **Tối đa**: 24-48 giờ

### Kiểm tra DNS propagation:
- **[whatsmydns.net](https://whatsmydns.net)**
- **[dnschecker.org](https://dnschecker.org)**

### Lệnh kiểm tra local:
```bash
# Windows:
nslookup yourname.io.me

# Mac/Linux:
dig yourname.io.me
```

## 🔒 Bước 5: SSL Certificate

### Tự động:
- Vercel tự động tạo SSL certificate
- Sử dụng Let's Encrypt
- Renew tự động

### Kiểm tra SSL:
- Truy cập `https://yourname.io.me`
- Kiểm tra icon khóa trên browser
- **[SSL Checker](https://sslchecker.com)**

## ✅ Bước 6: Test hoàn thành

### Kiểm tra các URL:
- ✅ `https://yourname.io.me` - Main domain
- ✅ `https://www.yourname.io.me` - WWW (nếu cấu hình)
- ✅ `http://yourname.io.me` - Auto redirect to HTTPS

### Test responsive:
- 📱 Mobile
- 💻 Desktop
- 📺 Tablet

## 🔧 Troubleshooting

### Domain không work:
1. **Kiểm tra DNS**: `nslookup yourname.io.me`
2. **Kiểm tra CNAME**: Phải trỏ về `cname.vercel-dns.com`
3. **Xóa cache browser**: Ctrl+F5
4. **Thử incognito mode**

### SSL certificate lỗi:
1. **Chờ thêm**: SSL có thể mất 1-2 giờ
2. **Kiểm tra domain verification** trên Vercel
3. **Contact Vercel support** nếu quá 24h

## 💡 Tips & Best Practices

### Domain naming:
- ✅ Ngắn gọn, dễ nhớ
- ✅ Không dấu, không ký tự đặc biệt
- ✅ Phù hợp với mục đích CV/Portfolio

### Security:
- ✅ Luôn sử dụng HTTPS
- ✅ Enable Vercel's security headers
- ✅ Regular domain renewal

### Performance:
- ✅ Enable Vercel's CDN
- ✅ Monitor site speed
- ✅ Use Vercel Analytics

## 📞 Support

### Nếu gặp vấn đề:
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Domain Provider Support**: Liên hệ nhà cung cấp domain
- **Community**: [GitHub Discussions](https://github.com/vercel/vercel/discussions)

---

**🎉 Sau khi hoàn thành, bạn sẽ có CV Portfolio tại: `https://yourname.io.me`**
