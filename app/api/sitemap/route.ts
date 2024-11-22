import { NextResponse } from 'next/server'
import client from '@/lib/sanityclient'

const getDynamicSlugs = async () => {
  return await client.fetch(`*[_type == "blog"]{ "slug": slug.current }`);
};

export async function GET() {
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const staticPaths = [
    `${baseUrl}/`,
    `${baseUrl}/noticias`,
  ];
  const slugs = await getDynamicSlugs();
  const dynamicPaths = slugs.map((item: { slug: string }) => `${baseUrl}/noticias/${item.slug}`);
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[...staticPaths, ...dynamicPaths]
      .map((url) => `<url><loc>${url}</loc></url>`)
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
