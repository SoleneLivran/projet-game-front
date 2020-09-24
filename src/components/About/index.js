import React from "react"
import "./styles.css"

const About = () => (
  // HTML entre les parenthèses. Bien compris dans la div parents "about"
  <div className="about">
    <div className="about-presentation text-center text-white mt-4 mx-auto md:mt-40 lg:w-8/12 bg-indigo-800 p-3 bg-opacity-75 rounded-lg">
      <h1 className="welcome font-bold uppercase mb-2 text-2xl md:text-4xl">Bienvenue sur GWITH - Game Where I'm The Hero !</h1>
      <p className="website-presentation text-xl mb-2">
        Sur ce site, vous pouvez jouer à des histoires dont vous êtes le héros : à chaque situation, vos choix influenceront la suite de l'aventure ! Vous pouvez également composer vos propres histoires, pour que d'autres utilisateurs et utilisatrices puissent y jouer.
      </p>
      <p className="project-presentation text-xl mb-2">
        Il s'agit de notre projet de fin de formation à l’école O'Clock. Nous avons suivi la formation "Développeur web" pendant 5 mois intensifs, au sein de la promotion Hypérion. Ce projet a été développé en un mois, depuis sa conception fonctionnelle jusqu’à son développement dans sa forme actuelle.
      </p>
      <p className="project-presentation text-xl mb-2">
        Découvrez notre équipe, et suivez nos aventures !
      </p>
    </div>

    <div className="devcards my-8">
      {/* Cyrille */}
      <div className="devcard transform duration-150 ease-in-out hover:scale-105">
        <img
          className="devcard__img h-50 md:h-50 w-full object-cover rounded-t-lg shadow-lg"
          src="/assets/img/avatar_viking.jpg"
          alt="Cyrille"
        />
        <section className="devcard__info bg-gray-900 py-4">
          <div className="devcard__top-info flex justify-center pt-1 px-5 items-center">
            <h2 className="devcard__name text-xl font-bold py-2 text-white text-center overflow-auto">
              Cyrille Coignard
            </h2>
          </div>
          <div className="devcard__bottom-info font-light text-lg text-sm text-white items-center overflow-auto">
            <h3 className="devcard__role text-center text-gray-500 mb-2">
              Lead Back
            </h3>
          </div>
          <div className="devcard__bottom-info font-light text-lg text-sm text-white text-center overflow-auto">
            <a href="https://www.linkedin.com/in/cyrille-coignard-9911b6176/" className="devcard__social-linkedin text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="devcard__social-github text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fab fa-github"></i></a>
            <a href="#" className="devcard__social-portfolio text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fas fa-globe"></i></a>
          </div>
        </section>
      </div>
      {/* Florian */}
      <div className="devcard transform duration-150 ease-in-out hover:scale-105">
        <img
          className="devcard__img h-50 md:h-50 w-full object-cover rounded-t-lg shadow-lg"
          src="/assets/team/florian.jpeg"
          alt="Florian"
        />
        <section className="devcard__info bg-gray-900 py-4">
          <div className="devcard__top-info flex justify-center pt-1 px-5 items-center">
            <h2 className="devcard__name text-xl font-bold py-2 text-white text-center overflow-auto">
            Florian Argaud
            </h2>
          </div>
          <div className="devcard__bottom-info font-light text-lg text-sm text-white items-center overflow-auto">
            <h3 className="devcard__role text-center text-gray-500 mb-2">
              Lead Front
            </h3>
          </div>
          <div className="devcard__bottom-info font-light text-lg text-sm text-white text-center overflow-auto">
            <a href="https://www.linkedin.com/in/florian-argaud/" className="devcard__social-linkedin text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="devcard__social-github text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fab fa-github"></i></a>
            <a href="#" className="devcard__social-portfolio text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fas fa-globe"></i></a>
          </div>
        </section>
      </div>
      {/* Jordi */}
      <div className="devcard transform duration-150 ease-in-out hover:scale-105">
        <img
          className="devcard__img h-50 md:h-50 w-full object-cover rounded-t-lg shadow-lg"
          src="/assets/team/jordi.png"
          alt="Jordi"
        />
        <section className="devcard__info bg-gray-900 py-4">
          <div className="devcard__top-info flex justify-center pt-1 px-5 items-center">
            <h2 className="devcard__name text-xl font-bold py-2 text-white text-center overflow-auto">
            Jordi Le Guet
            </h2>
          </div>
          <div className="devcard__bottom-info font-light text-lg text-sm text-white items-center overflow-auto">
            <h3 className="devcard__role text-center text-gray-500 mb-2">
              Git Master - Dev Front
            </h3>
          </div>
          <div className="devcard__bottom-info font-light text-lg text-sm text-white text-center overflow-auto">
            <a href="https://www.linkedin.com/in/jordileguet/" className="devcard__social-linkedin text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/Jordi-LG" className="devcard__social-github text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fab fa-github"></i></a>
            <a href="https://jordi-lg.github.io/#/" className="devcard__social-portfolio text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fas fa-globe"></i></a>
          </div>
        </section>
      </div>
      {/* Milan */}
      <div className="devcard transform duration-150 ease-in-out hover:scale-105">
        <img
          className="devcard__img h-50 md:h-50 w-full object-cover rounded-t-lg shadow-lg"
          src="/assets/team/milan.jpeg"
          alt="Milan"
        />
        <section className="devcard__info bg-gray-900 py-4">
          <div className="devcard__top-info flex justify-center pt-1 px-5 items-center">
            <h2 className="devcard__name text-xl font-bold py-2 text-white text-center overflow-auto">
            Milan Forrat
            </h2>
          </div>
          <div className="devcard__bottom-info font-light text-lg text-sm text-white items-center overflow-auto">
            <h3 className="devcard__role text-center text-gray-500 mb-2">
              Scrum Master - Dev Back
            </h3>
          </div>
          <div className="devcard__bottom-info font-light text-lg text-sm text-white text-center overflow-auto">
            <a href="#" className="devcard__social-linkedin text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="devcard__social-github text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fab fa-github"></i></a>
            <a href="#" className="devcard__social-portfolio text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fas fa-globe"></i></a>
          </div>
        </section>
      </div>
      {/* Solène */}
      <div className="devcard transform duration-150 ease-in-out hover:scale-105">
        <img
          className="devcard__img h-50 md:h-50 w-full object-cover rounded-t-lg shadow-lg"
          src="/assets/team/solene.png"
          alt="Solène"
        />
        <section className="devcard__info bg-gray-900 py-4">
          <div className="devcard__top-info flex justify-center pt-1 px-5 items-center">
            <h2 className="devcard__name text-xl font-bold py-2 text-white text-center overflow-auto">
            Solène Livran
            </h2>
          </div>
          <div className="devcard__bottom-info font-light text-lg text-sm text-white items-center overflow-auto">
            <h3 className="devcard__role text-center text-gray-500 mb-2">
              Product Owner - Dev Back
            </h3>
          </div>
          <div className="devcard__bottom-info font-light text-lg text-sm text-white text-center overflow-auto">
            <a href="https://www.linkedin.com/in/solenelivran/" className="devcard__social-linkedin text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/SoleneLivran" className="devcard__social-github text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fab fa-github"></i></a>
            <a href="https://solenelivran.github.io/" className="devcard__social-portfolio text-center inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-1 my-2"><i className="fas fa-globe"></i></a>
          </div>
        </section>
      </div>
    </div>
  </div>
)

export default About
