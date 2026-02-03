import Image from 'next/image'

interface ImageBackgroundProps {
  src: string
  alt: string
  opacity?: number
  className?: string
  children: React.ReactNode
}

export default function ImageBackground({
  src,
  alt,
  opacity = 0.15,
  className = '',
  children,
}: ImageBackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          style={{
            filter: 'grayscale(100%) contrast(1.2)',
            opacity: opacity,
            mixBlendMode: 'multiply',
          }}
          priority={false}
        />
        {/* Orange overlay for duotone effect */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(255, 70, 6, 0.3) 0%, rgba(181, 50, 7, 0.2) 100%)`,
            mixBlendMode: 'overlay',
          }}
        />
      </div>
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
