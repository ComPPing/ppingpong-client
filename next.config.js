/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const config = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

const nextConfig = withPWA({
  dest: 'public',
})(config);

module.exports = nextConfig;
