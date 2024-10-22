/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        workerThreads: true,
        maxWorkers: 2, // Reduce this number if necessary
      },
}

export default nextConfig
