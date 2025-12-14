import type { APIRoute } from 'astro';
import { workExperience } from '../../data/work-experience';

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(workExperience, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
};
