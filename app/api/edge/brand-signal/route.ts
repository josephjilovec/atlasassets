export function GET() {
  return Response.json(
    {
      brand: 'Atlas Assets',
      mode: 'cross-border-structure-simulation',
      state: 'simulation-only',
      review: ['tax', 'securities', 'sanctions', 'banking', 'professional-routing']
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=60',
        'CDN-Cache-Control': 'public, max-age=1800',
        'Vercel-CDN-Cache-Control': 'public, max-age=7200, stale-while-revalidate=43200'
      }
    }
  );
}
