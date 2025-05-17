import React from 'react'

const testimonials = [
  {
    avatar: "/avatars/avatar2.jpeg",
    name: "Marc JP",
    role: "Entrepreneur",
    quote: "Max a su transformer nos idées en solution fonctionnelle avec Django. Travail rapide, propre et efficace. Je recommande à 100%.",
  },
  {
    avatar: "/avatars/avatar1.jpeg",
    name: "Sarah L.",
    role: "Responsable Marketing",
    quote: "Une collaboration fluide du début à la fin. Max a développé un site web moderne qui correspond parfaitement à notre image.",
  },
  {
    avatar: "/avatars/avatar3.jpeg",
    name: "Yann K.",
    role: "Fondateur de Startup",
    quote: "Très professionnel, à l'écoute et réactif. Grâce à lui, notre plateforme a été lancée en un temps record.",
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-900 py-16 px-4">
      <h2 className="text-2xl font-bold text-lime-500 text-center uppercase mb-2">Témoignages</h2>
      <p className="text-gray-400 text-sm text-center mb-10">
        Ce que disent mes clients après avoir collaboré avec moi
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={testimonial.avatar}
                alt={`Avatar de ${testimonial.name}`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
            <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
