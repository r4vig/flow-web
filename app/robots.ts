export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.flowidg.com//sitemap.xml", // cambia esto al deploy
  };
}
