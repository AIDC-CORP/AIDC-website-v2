# AIDC Website

Website chính thức của AIDC (AI Development Center) - Trung tâm phát triển và nghiên cứu AI.

## 🚀 Công nghệ sử dụng

- **Framework**: React 18.3.1 + TypeScript
- **Build Tool**: Vite 6.3.5
- **UI Components**: Radix UI + shadcn/ui
- **Styling**: TailwindCSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form

## 📁 Cấu trúc dự án

```
src/
├── components/          # UI components tái sử dụng
│   ├── layout/         # Header, Footer
│   └── ui/             # shadcn/ui components
├── features/           # Các tính năng chính
│   ├── home/          # Trang chủ
│   ├── about/         # Giới thiệu
│   ├── fields/        # Lĩnh vực hoạt động
│   ├── customers/     # Khách hàng
│   ├── career/        # Tuyển dụng
│   └── contact/       # Liên hệ
├── assets/            # Hình ảnh, icons
├── styles/            # Global styles
└── lib/               # Utilities, helpers
```

## 🛠️ Cài đặt và chạy

### Yêu cầu hệ thống

- Node.js >= 16.x
- npm hoặc yarn

### Cài đặt dependencies

```bash
npm install
```

### Chạy development server

```bash
npm run dev
```

Website sẽ chạy tại: `http://localhost:5173`

### Build cho production

```bash
npm run build
```

## 📄 Trang chính

- **Home**: Trang chủ với các dịch vụ cốt lõi
- **About**: Giới thiệu về AIDC, ban lãnh đạo, giá trị cốt lõi
- **Fields**: Các lĩnh vực hoạt động
- **Customers**: Khách hàng và đối tác
- **Career**: Cơ hội nghề nghiệp
- **Contact**: Thông tin liên hệ

## 📝 Design Reference

Design gốc từ Figma: [Website Design Specification](https://www.figma.com/design/pf1LLD4MGZanirSHSUPtKC/Website-Design-Specification)

## 👨‍💻 Development

Khi phát triển, tuân thủ các nguyên tắc:
- Code ngắn gọn, dễ hiểu, có comment đầy đủ
- Cấu trúc components theo chuẩn production
- Chỉ import thư viện cần thiết
- Tách biệt logic và UI

## 📞 Contact

Website: [AIDC](https://aidc.vn)
