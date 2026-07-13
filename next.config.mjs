/** @type {import('next').NextConfig} */
const nextConfig = {
  // 정적 HTML/CSS/JS로 내보내기 → GitHub Pages·Netlify·아임웹 등 어디든 배포 가능
  output: 'export',
  // 정적 export에서는 Next 이미지 최적화 서버가 없으므로 비활성화
  images: { unoptimized: true },
  // 정적 호스팅에서 새로고침 시 경로 매칭이 안정적이도록 trailing slash 사용
  trailingSlash: true,
};

export default nextConfig;
