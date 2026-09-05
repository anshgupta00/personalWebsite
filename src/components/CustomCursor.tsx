import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(true)
      }
    }

    const handleLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"]')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseover', handleEnter)
    document.addEventListener('mouseout', handleLeave)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', handleEnter)
      document.removeEventListener('mouseout', handleLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Small precise dot */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: 'var(--color-accent)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'transform 0.1s ease, opacity 0.2s ease',
          opacity: isHovering ? 0 : 0.8,
        }}
      />
      {/* Larger ring that follows with lag */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          width: isHovering ? '40px' : '24px',
          height: isHovering ? '40px' : '24px',
          borderRadius: '50%',
          border: '1px solid var(--color-accent)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.25s ease, height 0.25s ease, left 0.08s ease, top 0.08s ease, opacity 0.2s ease',
          opacity: 0.4,
        }}
      />
    </>
  )
}
