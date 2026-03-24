import fs from 'fs';

const baseUrl = 'https://convertplus.com';

const pages = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/dashboard', priority: '0.9', changefreq: 'daily' },
  { url: '/supported', priority: '0.8', changefreq: 'weekly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
  { url: '/terms', priority: '0.5', changefreq: 'yearly' },
  { url: '/contact', priority: '0.6', changefreq: 'monthly' },
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
  console.log('Sitemap generated successfully!');
};

generateSitemap();