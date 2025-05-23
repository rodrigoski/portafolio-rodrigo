"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

const Button = ({ children, className, ...props }) => (
  <button 
    className={`bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 ${className}`} 
    {...props}
  >
    {children}
  </button>
)

export default function HeroComponent() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo animado con burbujas flotantes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-900">
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 20 }).map((_, i) => {
            const top = 10 + (i * 4) % 80
            const left = 5 + (i * 5) % 90
            const width = 100 + (i * 15) % 250
            const height = 100 + (i * 10) % 250
            const opacity = 0.1 + (i % 10) / 20

            return (
              <div
                key={i}
                className="absolute rounded-full bg-cyan-500"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  width: `${width}px`,
                  height: `${height}px`,
                  filter: "blur(70px)",
                  transform: `translateY(${scrollY * (0.1 + (i / 20) * 0.2)}px)`,
                  opacity,
                }}
              />
            )
          })}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center flex flex-col items-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Carlos Rodrigo Rojas González
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Desarrollador web
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Imagen con efecto de hover */}
 <Image 
  src="/evengalion-Photoroom.png" 
  alt="Data analytics" 
  width={300} 
  height={250}
  className="object-cover transition-all duration-500 ease-in-out 
            grayscale brightness-100 contrast-100 rounded-lg
            hover:grayscale-0 hover:brightness-100 hover:contrast-100 
            hover:scale-105 cursor-pointer"
   onClick={() => document.getElementById("contacto").scrollIntoView({ 
    behavior: "smooth",
    block: "start"
  })}
/>
            {/* Botón con margen ajustado */}
            <div className="mt-2">            
              <Button
                onClick={() => document.getElementById("experiencia").scrollIntoView({ 
                  behavior: "smooth",
                  block: "start"
                })}
                className="group hover:shadow-2xl"
              >
                <span className="flex items-center gap-2">
                  Mi experiencia
                  <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Flecha de scroll animada */}
<motion.div
  className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer mt-8"
  onClick={() => document.getElementById("proyectos").scrollIntoView({ 
    behavior: "smooth",
    block: "start"
  })}
>
  <div className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
    <ArrowDown className="text-white h-5 w-5" />
  </div>
</motion.div>
    </section>
  )
}