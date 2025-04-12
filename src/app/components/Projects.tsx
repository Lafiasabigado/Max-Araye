'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState<number | null>(null)

  const toggleOverlay = (id: number) => {
    setActiveProjectId(activeProjectId === id ? null : id)
  }

  const projects = [
    {
      id: 1,
      name: "Unispace",
      description: "Une application full stack pour la gestion des salles universitaires",
      image: "/projects/unispace.jpeg",
      demolink: "https://gestion-des-salles.vercel.app/",
      githublink: "https://github.com/MaxLaPeuff/Unispace",
      techno: ["#django", "postgresql", "git", "vercel", "render", "react"]
    },
    {
      id: 2,
      name: "Ministore",
      description: "Une application full stack pour la gestion des produits d'un magasin.",
      image: "/projects/ministore.png",
      demolink: "https://ministore-m0zg.onrender.com/",
      githublink: "https://github.com/MaxLaPeuff/Ministore",
      techno: ["#django", "postgresql", "git", "vercel", "render","bootstrap"]
    },
    {
      id: 3,
      name: "Authentification System",
      description: "Un système de gestion des utilisateurs.",
      image: "/projects/authsystem.jpeg",
      demolink: "https://authentification-system.onrender.com/",
      githublink: "https://github.com/MaxLaPeuff/Project3",
      techno: ["#django", "postgresql", "git", "vercel", "render"]
    },
    {
      id: 4,
      name: "Unispace Api",
      description: "API d'une application pour la gestion des salles universitaires.",
      image: "/projects/unispaceapi.jpeg",
      demolink: "/",
      githublink: "https://github.com/MaxLaPeuff/Project4",
      techno: ["#django", "postgresql", "git", "vercel", "render"]
    }
  ]

  return (
    <section id='projects' className='max-w-5xl mx-auto pt-16 px-4'>
      <h2 className='text-2xl text-lime-500 font-bold mb-4 text-center uppercase'>Mes Projets</h2>
      <p className='text-gray-300 text-sm text-center pb-10'>Voici quelques-uns de mes projets que j'ai réalisés.</p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='relative group rounded-2xl overflow-hidden shadow-lg bg-gray-900/40'
            onClick={() => toggleOverlay(project.id)}
          >
            {/* Image avec cover */}
            <div className='relative w-full h-60'>
              <Image 
                src={project.image}
                alt={project.name}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
              {/* Overlay */}
              <div className={`
                absolute inset-0 bg-black/60 flex items-center justify-center space-x-4 transition-opacity duration-300
                ${activeProjectId === project.id ? 'opacity-100' : 'opacity-0'}
                md:opacity-0 md:group-hover:opacity-100
              `}>
                <a href={project.demolink} target='_blank' rel='noopener noreferrer' className='bg-lime-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-lime-700 transition'>
                  <FaExternalLinkAlt /> Voir Démo
                </a>
                <a href={project.githublink} target='_blank' rel='noopener noreferrer' className='bg-white text-gray-800 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-200 transition'>
                  <FaGithub /> Github
                </a>
              </div>
            </div>

            {/* Infos */}
            <div className='p-4'>
              <h3 className='text-xl font-bold text-white mb-1'>{project.name}</h3>
              <p className='text-gray-400 text-sm'>{project.description}</p>
              <div className='mt-3 text-xs text-gray-300 italic'>
                {project.techno.join(" - ")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
