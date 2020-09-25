import React from "react"
import "./styles.css"

const Contact = () => (
  // HTML entre les parenthèses. Bien compris dans la div parents "contact"
  <div className="contact">
    <div className="contact-section text-center text-white mt-4 mx-auto md:mt-40 lg:w-8/12 bg-indigo-800 p-3 bg-opacity-75 rounded-lg">
      <h1 className="title font-bold uppercase mb-2 text-2xl md:text-4xl">Dites-nous des choses !</h1>
      <p className="contact-presentation mb-text-xl mb-5">
        Une question, une suggestion, un bug sur le site, une quête à nous confier ?
      </p>
      <a href="mailto:gwith.project@gmail.com" className="contact-link text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 mr-1 my-2">
        Nous envoyer un email
      </a>
    </div>
  </div>
)

export default Contact
