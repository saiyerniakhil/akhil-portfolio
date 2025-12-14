import type { APIRoute } from 'astro';
import { socialLinks, personalInfo } from '../../data/social-links';

export const GET: APIRoute = () => {
  return new Response(
    JSON.stringify(
      {
        personalInfo,
        socialLinks,
      },
      null,
      2
    ),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    }
  );
};
