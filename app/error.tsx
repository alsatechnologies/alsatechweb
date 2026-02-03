'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={{ padding: '2rem', color: '#F5F5F5', backgroundColor: '#141414', minHeight: '100vh' }}>
      <h1>Algo salió mal</h1>
      <button onClick={reset}>Reintentar</button>
    </div>
  )
}
