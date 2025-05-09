"use client"

import { motion } from "framer-motion"
import { Code, Palette, Database, Globe, Cpu, LineChart } from 'lucide-react'

export default function SkillSection() {
  const skillCategories = [
    {
      title: "Desarrollo Frontend",
      icon: <Code className="h-8 w-8 text-cyan-400" />,
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      title: "Diseño UI/UX",
      icon: <Palette className="h-8 w-8 text-purple-400" />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 75 },
        { name: "Photoshop", level: 70 },
        { name: "Illustrator", level: 65 },
      ],
    },
    {
      title: "Desarrollo Backend",
      icon: <Database className="h-8 w-8 text-green-400" />,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 65 },
      ],
    },
    {
      title: "Otros",
      icon: <Globe className="h-8 w-8 text-yellow-400" />,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "SEO", level: 70 },
        { name: "Performance", level: 75 },
      ],
    },
  ]

  return (
    <section id="habilidades" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Mis Habilidades</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un conjunto de tecnologías y herramientas que domino para crear soluciones digitales efectivas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 bg-slate-700/50 rounded-lg">{category.icon}</div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700">
            <Cpu className="h-10 w-10 text-cyan-400 mx-auto mb-3" />
            <h4 className="text-white text-xl font-bold mb-1">4+</h4>
            <p className="text-gray-400">Años de experiencia</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700">
            <Code className="h-10 w-10 text-purple-400 mx-auto mb-3" />
            <h4 className="text-white text-xl font-bold mb-1">50+</h4>
            <p className="text-gray-400">Proyectos completados</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700">
            <Globe className="h-10 w-10 text-green-400 mx-auto mb-3" />
            <h4 className="text-white text-xl font-bold mb-1">15+</h4>
            <p className="text-gray-400">Clientes satisfechos</p>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center border border-slate-700">
            <LineChart className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
            <h4 className="text-white text-xl font-bold mb-1">99%</h4>
            <p className="text-gray-400">Tasa de éxito</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}