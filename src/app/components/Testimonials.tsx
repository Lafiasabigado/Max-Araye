import React from 'react'

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gray-900 py-16 px-4">
    <h2 className="text-2xl font-bold text-lime-500 text-center uppercase mb-2">Témoignages</h2>
    <p className="text-gray-400 text-sm text-center mb-10">
        Ce que disent mes clients après avoir collaboré avec moi
    </p>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[1, 2, 3].map((_, i) => (
      <div key={i} className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={`/avatars/avatar${i + 1}.jpeg`}
            alt="Client avatar"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="text-white font-semibold">Client {i + 1}</h4>
            <p className="text-gray-400 text-sm">Fondateur · Startup {i + 1}</p>
          </div>
        </div>
        <p className="text-gray-300 italic mb-4">
          "Max a su transformer nos idées en solution fonctionnelle avec Django. Travail rapide, propre et efficace. Je recommande à 100%."
        </p>
        <div className="text-yellow-400 text-sm">
          ⭐⭐⭐⭐⭐
        </div>
      </div>
    ))}
  </div>
</section>
  )
}

export default Testimonials