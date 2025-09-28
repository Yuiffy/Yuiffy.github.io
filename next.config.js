/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true, // 确保URL末尾有斜杠，对静态导出很重要
    images: {
        unoptimized: true // 对于静态导出，需要禁用图像优化
    },
    distDir: 'out' // 指定输出目录
}

module.exports = nextConfig
