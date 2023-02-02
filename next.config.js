/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
   compiler: {
    styledComponents: true,
  },
  env: {
    PORT: 3000
  },
}

module.exports = nextConfig
