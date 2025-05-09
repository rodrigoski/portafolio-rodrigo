"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Inicio", href: "#top" }, // Cambiado de "#" a "#top"
    { name: "Proyectos", href: "#proyectos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Contacto", href: "#contacto" },
  ]

  // Función para manejar la navegación
  const handleNavigation = (e, href) => {
    e.preventDefault()
    
    if (href === "#top") {
      // Si es el enlace de inicio, desplazarse al principio de la página
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    } else {
      // Para otros enlaces, usar querySelector normalmente
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    
    // Cerrar el menú móvil si está abierto
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <a 
            href="#top" 
            className="text-2xl font-bold text-white"
            onClick={(e) => handleNavigation(e, "#top")}
          >
            <span className="text-cyan-400">Port</span>folio
          </a>
        </motion.div>

        {/* Menú de escritorio */}
        <motion.ul
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={(e) => handleNavigation(e, link.href)}
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="absolute top-5 right-5 text-white" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
          <ul className="flex flex-col items-center space-y-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  className="text-2xl text-white hover:text-cyan-400 transition-colors duration-300"
                  onClick={(e) => handleNavigation(e, link.href)}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  )
}
