/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
}

const sassOptions = {
    includePaths: [path.join(__dirname, 'styles')],
}

module.exports = nextConfig
module.exports = sassOptions
