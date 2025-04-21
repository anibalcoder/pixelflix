import { useEffect, useRef, useState } from 'react'

export function useSidebarToggle () {
  const [isOpen, setIsOpen] = useState(false)
  // Utilizo una referencia para evitar buscar el elemento en el DOM cada vez que el estado cambie.
  const sidebarRef = useRef<HTMLElement | null>(null)

  const toggle = () => setIsOpen((prev) => !prev)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verifica si el clic ocurrió fuera del área del sidebar
      if ((sidebarRef.current != null) && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.body.classList.toggle('overflow-hidden', isOpen)

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return {
    isOpen,
    toggle,
    sidebarRef
  }
}
