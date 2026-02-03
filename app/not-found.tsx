import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary text-text">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
        <h2 className="text-2xl text-white mb-4">Página no encontrada</h2>
        <Link href="/" className="btn-primary">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
