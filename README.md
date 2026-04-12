# Media Startup Platform

A Next.js 14 media platform starter with Supabase-backed APIs and NextAuth authentication.

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Add environment variables to `.env.local`:

   ```bash
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   SUPABASE_URL=https://your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

## Publish (Vercel)

1. Push this repository to GitHub.
2. Import the project in Vercel.
3. In Vercel Project Settings → Environment Variables, set all variables from `.env.local`.
4. Deploy (Production branch: usually `main`).

Vercel will run `npm run build` using the included `vercel.json` settings.

## Production Check (before deploying)

```bash
npm run build
npm run start
```
