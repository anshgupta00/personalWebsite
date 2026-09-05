import { useEffect, useRef, ReactNode } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Start invisible
    el.style.opacity = '0'
    el.style.transform = 'translateY(10px)'
    // Animate in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.45s ease, transform 0.45s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    })
  }, [])

  return (
    <div ref={ref}>
      {children}
    </div>
  )
}
