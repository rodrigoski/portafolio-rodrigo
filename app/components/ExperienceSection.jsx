"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Intership backend developer Nest.js",
      company: "GPT 4 sales.ai",
      period: "September 2024-December 2024",
      description:
        "Desarrollo integral de ChatBots usando Node.js, python y JavaScript.",
      technologies: ["Node.js", "JavaScript", "Python"],
    },
    {
      title: "Quality Assurance",
      company: "Scale",
      period: "Marzo 2023 - Enero 2025",
      description:
        "Pruebas de manejo de prompts, generación y evelacuión de propmts, marcado 3D",
      technologies: ["Lidar", "AI trainning"],
    },
    {
      title: "Web Developer",
      company: "MayanSoft",
      period: "Enero 2025 - Presente",
      description:
        "Desarrollo y mantenimiento de herramientas internas, así como creación de LP y mantenimiento de páginas.",
      technologies: ["C#", "Wordpress", "HTML", "CSS", "JavaScript"],
    },
  ]

  return (
    <section id="experiencia" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Mi Experiencia</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un recorrido por mi trayectoria profesional y los roles que he desempeñado.
          </p>
        </motion.div>

        <div className="relative">
          {/* Línea de tiempo */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative md:flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Punto en la línea de tiempo */}
              <div className="hidden md:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-slate-900 z-10" />

              {/* Contenido */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-colors duration-300">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-5 w-5 text-cyan-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="bg-slate-700 px-3 py-1 rounded-full text-cyan-400 text-sm font-medium">
                      {exp.company}
                    </div>
                    <div className="flex items-center ml-4 text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="text-xs bg-slate-700 text-cyan-400 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
