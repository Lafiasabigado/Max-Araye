import React from 'react'
import { SiPython } from 'react-icons/si' 
import { SiDjango } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiPhp } from 'react-icons/si'
import { SiLaravel } from 'react-icons/si'
import { SiGit } from 'react-icons/si'
import { SiVercel } from 'react-icons/si'
import { SiRender } from 'react-icons/si'

const Skills = () => {
  const sikills = [
    {
      id:1,
      name:"Python",
      icon:<SiPython className='w-10 h-10  text-blue-500'/>,
      description:"Python pour la construction des applications et le machine learning"
    },
    {
      id:2,
      name:"Django",
      icon:<SiDjango className='w-10 h-10 text-green-500'/>,
      description:"Django pour la construction du back-end des applications"
    },
    {
      id:3,
      name:"PostgreSql",
      icon:<SiPostgresql className='w-10 h-10 text-blue-500'/>,
      description:"PostgreSql pour la gestion des bases de données robustes"
    },
    {
      id:4,
      name:"Git",
      icon:<SiGit className='w-10 h-10 text-yellow-500'/>,
      description:"Git pour le contrôle des versions des applications"
    },
    {
      id:5,
      name:"Vercel",
      icon:<SiVercel className='w-10 h-10'/>,
      description:"Vercel pour le déploiement des applications"
    },
    {
      id:6,
      name:"Render",
      icon:<SiRender className='w-10 h-10 text-black'/>,
      description:"Render pour le déploiement des applications"
    },
    {
      id:7,
      name:"Php",
      icon:<SiPhp className='w-10 h-10 text-sky-400'/>,
      description:"Php pour la construction des applications"
    },
    {
      id:8,
      name:"Laravel",
      icon:<SiLaravel className='w-10 h-10 text-red-400'/>,
      description:"Laravel pour la construction du back-end des applications"
    },
  ]
  return (
    <section className='max-w-5xl mx-auto py-16'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-2xl text-lime-500 font-bold mb-2 text-center uppercase'>Mes Compétences</h2>
         <p className='text-gray-300 text-center pb-10'>Voila un aperçu de mes compétences </p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {sikills.map((skill) => (
              <div key={skill.id} className='bg-gray-800/50 m-2 text-center p-4 rounded-2xl shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out'>
                <div className='flex items-center py-2 justify-center'>
                  {skill.icon}
                </div>
                <h3 className='text-lg text-center font-bold py-2'>{skill.name}</h3>
                <p className='text-gray-300 text-center py-2'>{skill.description}</p>
              </div>
            ))}
         </div>
      </div>
    </section>
  )
}

export default Skills