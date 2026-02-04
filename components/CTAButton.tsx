'use client'

import Link from 'next/link'

interface CTAButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  className = ''
}: CTAButtonProps) {
  const baseClasses = variant === 'primary'
    ? 'btn-primary'
    : 'btn-secondary'

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetHref: string) => {
    if (targetHref.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(targetHref)
      if (element) {
        const headerOffset = 96 // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  // If it's an anchor link, use regular anchor tag with scroll behavior
  if (href.startsWith('#')) {
    return (
      <a
        href={href}
        onClick={(e) => handleScrollTo(e, href)}
        className={`${baseClasses} ${className} cursor-pointer`}
      >
        {children}
      </a>
    )
  }

  // Otherwise use Next.js Link for page navigation
  return (
    <Link href={href} className={`${baseClasses} ${className}`}>
      {children}
    </Link>
  )
}
