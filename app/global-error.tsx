'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ padding: '2rem', color: '#F5F5F5', backgroundColor: '#141414', minHeight: '100vh' }}>
          <h1>Error Global</h1>
          <button onClick={reset}>Reintentar</button>
        </div>
      </body>
    </html>
  )
}
