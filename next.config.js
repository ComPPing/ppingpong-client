/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const config = {
  output: 'export'
}
  
const nextConfig = withPWA({
  dest: 'public',
})(config)

module.exports = nextConfig
