/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Vì GitHub Pages không hỗ trợ xử lý ảnh động.
  },
  basePath: "/invitation-card",
  assetPrefix: "/invitation-card",
};

export default nextConfig;
