export default function HomePage() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem', lineHeight: 1.6 }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Moonr4 Media Platform</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Welcome! We are launching a modern media startup platform focused on stories, creator growth,
        and fast publishing workflows.
      </p>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2>What is live now</h2>
        <ul>
          <li>Next.js based frontend with API routes.</li>
          <li>Supabase-ready article APIs for listing and publishing content.</li>
          <li>Authentication route scaffolded with NextAuth.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2>Content publishing plan</h2>
        <ol>
          <li>Publish first 5 launch articles (company story, creator guide, product updates).</li>
          <li>Add category pages (Tech, Business, Creator Economy, Opinion).</li>
          <li>Schedule daily posts and build newsletter capture.</li>
        </ol>
      </section>

      <section>
        <h2>Next steps</h2>
        <p>
          Connect Vercel environment variables and trigger a new deployment to make the website publicly
          available.
        </p>
      </section>
    </main>
  );
}
