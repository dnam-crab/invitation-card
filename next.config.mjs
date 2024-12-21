/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Vì GitHub Pages không hỗ trợ xử lý ảnh động.
  },
};

export default nextConfig;
