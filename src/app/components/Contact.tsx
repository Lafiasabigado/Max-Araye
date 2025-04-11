"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
    const [state, handleSubmit] = useForm("xdkeyorz");
    if (state.succeeded) {
        return <p className='text-green-500 py-2'>Merci de votre message ! J'ai bien reçu votre message et je vous répondrai dès que possible. Bonne journée !</p>;
    }
    return (
      <section className='max-w-3xl mx-auto pt-16' id='contact'>
        <h2 className='text-xl text-lime-500 font-bold mb-4 text-center uppercase'>Contactez Moi</h2>
        <form onSubmit={handleSubmit} className='space-y-4 grid grid-cols-1 m-2 shadow-sm bg-gray-800/50 p-6 rounded-2xl'>
        <label htmlFor="name">Nom</label>
        <input
          id="name"
          type="text"
          name="name"
          className='border border-none bg-gray-700 border-gray-600 rounded px-4 py-2 focus:ring-blue-500 outline-none transition-all duration-200 text-white'
          required
        />
        <ValidationError 
          prefix="Nom" 
          field="name"
          errors={state.errors}
        />
        <label htmlFor="Prénom">Prénom</label>
        <input
          id="Prénom"
          type="text"
          name="Prénom"
          className='border border-none bg-gray-700 border-gray-600 rounded px-4 py-2 focus:ring-blue-500 outline-none transition-all duration-200 text-white'
          required
        />
        <ValidationError 
          prefix="Prénom" 
          field="Prénom"
          errors={state.errors}
        />
        <label htmlFor="email">
          Adresse Email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          className='border border-none bg-gray-700 border-gray-600 rounded px-4 py-2 focus:ring-blue-500 outline-none transition-all duration-200 text-white'
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className='border border-none bg-gray-700 border-gray-600 rounded px-4 py-2 focus:ring-blue-500 outline-none transition-all duration-200 text-white'
          cols={40}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button className='transition-colors duration-200 bg-lime-500 py-2 px-4 rounded-full text-white hover:bg-lime-600' type="submit" disabled={state.submitting}>
          Envoyer
        </button>
      </form>
      <p className='p-4 text-center text-gray-500 dark:text-gray-400'>© {new Date().getFullYear()}  Alimi Lamidi.</p>
      </section>
    );
  }
  
  function App() {
    return (
      <Contact />
    );
}

export default App