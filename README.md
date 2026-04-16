# Moonr4 Media Platform

A Next.js App Router project for launching a media startup site quickly on Vercel.

## Current status
- Homepage with launch messaging and publishing roadmap.
- API endpoint for reading/creating articles (`/api/articles`) via Supabase.
- NextAuth route scaffold (`/api/auth/[...nextauth]`).

## Local setup
```bash
npm install
npm run dev
```

Visit: `http://localhost:3000`

## Vercel deployment checklist
1. Import this repository into Vercel.
2. Framework preset: **Next.js** (auto-detected).
3. Add required environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET`
4. Deploy the `main` branch.

## Content rollout (start here)
- Publish 5 launch articles.
- Add category tags to every article.
- Set a weekly editorial calendar and newsletter CTA.
