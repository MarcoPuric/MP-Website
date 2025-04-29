import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://formspree.io;
  font-src 'self' https: data:;
  frame-ancestors 'none';
  object-src 'none';
  base-uri 'none';
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /* 🌐 Mehrsprachigkeit */
  i18n: {
    locales: ["de", "en"],   // beliebig erweiterbar
    defaultLocale: "de",
  },

  /* HTTP-Security-Header */
  async headers() {
    return [
      {
        source: "/(.*)",      // gilt global
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
