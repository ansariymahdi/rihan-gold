/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: `https://blog.tetherland.com/`,
      },
      {
        source: "/application/tetherland.apk",
        destination: "https://cdn.tetherland.com/app/tetherland.apk",
      },
      {
        source: "/blog/:slug*",
        destination: "https://blog.tetherland.com/:slug*", // Matched parameters can be used in the destination
      },
    ];
  },
  images: {
    domains: ["https://www.vam.ac.uk/"],
  },
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "/",
  },

  typescript: { ignoreBuildErrors: true },
};
