/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://cloutsites.com",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.85,
  exclude: ["/404", "/_not-found"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  transform: async (config, path) => {
    if (path === "/") {
      return { ...config, priority: 1.0 };
    }
    if (path === "/mason" || path === "/resume") {
      return { ...config, priority: 0.9 };
    }
    return config;
  },
};
