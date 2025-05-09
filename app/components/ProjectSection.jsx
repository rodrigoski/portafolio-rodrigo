"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ChevronRight } from 'lucide-react'

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("todos")

  const categories = ["todos", "web", "móvil", "diseño"]

  const projects = [
    {
      id: 1,
      title: "API-S-user-s-student-s-etc",
      description: "Mi primera API creada con flask-python.",
      image: "/grillz.jpg",
      category: "web",
      technologies: ["Python", "Flask"],
      demoUrl: "#",
      githubUrl: "https://github.com/rodrigoski/API-S-user-s-student-s-etc",
    },
    {
      id: 2,
      title: "visual-front-wikitek-v2.0",
      description: "La obra maestra, la visualización de mi Frontend y mi Backend conectada a una db",
      image: "/lentes.jpg",
      category: "móvil",
      technologies: ["React", "CSS", "HTML", "JavaScript"],
      demoUrl: "#",
      githubUrl: "https://github.com/rodrigoski/visual-front-wikitek-v2.0",
    },
    {
      id: 3,
      title: "Web de películas",
      description: "Sencilla web de películas.",
      image: "/data2.jpg",
      category: "web",
      technologies: ["JavaScript", "HTML", "SCSS"],
      demoUrl: "#",
      githubUrl: "https://github.com/rodrigoski/Peliculas",
    },
    {
      id: 4,
      title: "Rediseño de Marca",
      description: "Renovación completa de identidad visual para empresa de tecnología emergente.",
      image: "/fondo2.jpg",
      category: "diseño",
      technologies: ["Figma", "Illustrator", "Photoshop"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  const filteredProjects =
    activeCategory === "todos" ? projects : projects.filter((project) => project.category === activeCategory)

  // Componente de botón personalizado para evitar dependencias de shadcn
  const Button = ({ children, variant, className, onClick }) => {
    const baseClasses = "px-4 py-2 rounded-md transition-colors duration-300 text-sm font-medium"
    const variantClasses = variant === "default" 
      ? "bg-cyan-500 hover:bg-cyan-600 text-white" 
      : "text-gray-300 hover:text-white border border-gray-700 hover:border-cyan-500"
    
    return (
      <button 
        className={`${baseClasses} ${variantClasses} ${className || ""}`}
        onClick={onClick}
      >
        {children}
      </button>
    )
  }

  return (
    <section id="proyectos" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Mis Proyectos</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Una selección de los trabajos más destacados que he desarrollado a lo largo de mi carrera
          </p>
        </motion.div>

        {/* Filtros de categoría */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "default" : "outline"}
              className={`capitalize`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-slate-800 rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <div className="flex gap-3">
                    <a
                      href={project.demoUrl}
                      className="bg-white text-black p-2 rounded-full hover:bg-cyan-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-white text-black p-2 rounded-full hover:bg-cyan-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs bg-slate-700 text-cyan-400 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  href="https://mail.google.com/mail/u/0/#inbox"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver detalles <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

<motion.div
  className="text-center mt-12"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  <button
    className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-md font-medium transition-all duration-300 hover:shadow-lg"
    onClick={() => window.open('https://github.com/rodrigoski', '_blank', 'noopener,noreferrer')}
  >
    Ver todos los proyectos
  </button>
</motion.div>
      </div>
    </section>
  )
}