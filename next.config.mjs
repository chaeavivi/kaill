// GitHub Pages 프로젝트 사이트는 https://<user>.github.io/<repo>/ 하위 경로에서 서빙되므로
// CI에서 PAGES_BASE_PATH=/kaill 를 주입해 basePath를 맞춘다. 로컬(dev)에서는 비워 루트로 동작.
const basePath = process.env.PAGES_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 정적 HTML/CSS/JS로 내보내기 → GitHub Pages·Netlify·아임웹 등 어디든 배포 가능
  output: 'export',
  // 정적 export에서는 Next 이미지 최적화 서버가 없으므로 비활성화
  images: { unoptimized: true },
  // 정적 호스팅에서 새로고침 시 경로 매칭이 안정적이도록 trailing slash 사용
  trailingSlash: true,
  // 하위 경로 배포 지원 (라우트·정적 자산에 자동 적용)
  basePath,
};

export default nextConfig;
