import React from "react"
import "./styles.css"

const About = () => (
  // HTML entre les parenthèses. Bien compris dans la div parents "about"
  <div className="about">
    <div className="about-presentation text-center text-white mt-4 mx-auto md:mt-40 lg:w-8/12 bg-indigo-800 p-3 bg-opacity-75 rounded-lg">
      <h1 className="welcome font-bold uppercase mb-2 text-2xl md:text-4xl">
        Bienvenue sur GWITH - Game Where I'm The Hero !
      </h1>
      <p className="website-presentation mb-text-xl mb-5">
        Sur ce site, vous pouvez jouer à des histoires dont vous êtes le héros : à
        chaque situation, vos choix influenceront la suite de l'aventure ! Vous
        pouvez également composer vos propres histoires, pour que d'autres
        utilisateurs et utilisatrices puissent y jouer.
      </p>
      <p className="project-presentation mb-text-xl mb-5">
        Il s'agit de notre projet de fin de formation à l’école O'Clock. Nous avons
        suivi la formation "Développeur web" pendant 5 mois intensifs, au sein de la
        promotion Hypérion. Ce projet a été développé en un mois, depuis sa
        conception fonctionnelle jusqu’à son développement dans sa forme actuelle.
      </p>
      <p className="project-presentation text-xl mb-text-2xl mb-2 font-bold">
        Découvrez notre équipe, et suivez nos aventures !
      </p>
    </div>

    <div className="devcards my-8">
      {/* Cyrille */}
      <div className="devcard transform duration-150 ease-in-out hover:scale-105">
        <img
          className="devcard__img p-2 h-50 md:h-50 w-full object-cover rounded-t-lg shadow-lg bg-indigo-800 bg-opacity-75"
          src="/assets/team/avatar_cyrille.png"
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
              Dev Back
            </h3>
          </div>
          <div className="devcard__bottom-info flex justify-evenly items-center my-4  font-light text-lg text-sm text-white text-center overflow-auto">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/cyrille-coignard-9911b6176/"
              className="devcard__social-linkedin flex justify-center items-center bg-gray-200 rounded-full h-8 w-8  text-sm font-semibold text-gray-700 "
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/JackMandrake"
              className="devcard__social-linkedin flex justify-center items-center bg-gray-200 rounded-full h-8 w-8  text-sm font-semibold text-gray-700 "
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
      </div>
      {/* Florian */}
      <div className="devcard transform duration-150 ease-in-out hover:scale-105">
        <img
          className="devcard__img p-2 h-50 md:h-50 w-full object-cover rounded-t-lg shadow-lg bg-indigo-800 bg-opacity-75"
          src="/assets/team/avatar_florian.png"
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
              Dev Front
            </h3>
          </div>
          <div className="devcard__bottom-info flex justify-evenly items-center my-4  font-light text-lg text-sm text-white text-center overflow-auto">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/florian-argaud/"
              className="devcard__social-linkedin flex justify-center items-center bg-gray-200 rounded-full h-8 w-8  text-sm font-semibold text-gray-700 "
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/Icesofty"
              className="devcard__social-linkedin flex justify-center items-center bg-gray-200 rounded-full h-8 w-8  text-sm font-semibold text-gray-700 "
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
      </div>
      {/* Jordi */}
      <div className="devcard transform duration-150 ease-in-out hover:scale-105">
        <img
          className="devcard__img p-2 h-50 md:h-50 w-full object-cover rounded-t-lg shadow-lg bg-indigo-800 bg-opacity-75"
          src="/assets/team/avatar_jordi.png"
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
              Dev Front - Git Master
            </h3>
          </div>
          <div className="devcard__bottom-info flex justify-evenly items-center my-4  font-light text-lg text-sm text-white text-center overflow-auto">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jordileguet/"
              className="devcard__social-linkedin flex justify-center items-center bg-gray-200 rounded-full h-8 w-8  text-sm font-semibold text-gray-700 "
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/Jordi-LG"
              className="devcard__social-linkedin flex justify-center items-center bg-gray-200 rounded-full h-8 w-8  text-sm font-semibold text-gray-700 "
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              href="https://jordi-lg.github.io/#/"
              className="devcard__social-linkedin flex justify-center items-center bg-gray-200 rounded-full h-8 w-8  text-sm font-semibold text-gray-700 "
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </section>
      </div>
      {/* Milan */}
      <div className="devcard transform duration-150 ease-in-out hover:scale-105">
        <img
          className="devcard__img p-2 h-50 md:h-50 w-full object-cover rounded-t-lg shadow-lg bg-indigo-800 bg-opacity-75"
          src="/assets/team/avatar_milan.png"
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
              Dev Back - Scrum Master
            </h3>
          </div>
          <div className="devcard__bottom-info flex justify-evenly items-center my-4  font-light text-lg text-sm text-white text-center overflow-auto">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/milan-forrat-09043925/"
              className="devcard__social-linkedin flex justify-center items-center bg-gray-200 rounded-full h-8 w-8  text-sm font-semibold text-gray-700 "
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/MilanForrat"
              className="devcard__social-linkedin flex justify-center items-center bg-gray-200 rounded-full h-8 w-8  text-sm font-semibold text-gray-700 "
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
      </div>
      {/* Solène */}
      <div className="devcard transform duration-150 ease-in-out hover:scale-105">
        <img
          className="devcard__img p-2 h-50 md:h-50 w-full object-cover rounded-t-lg shadow-lg bg-indigo-800 bg-opacity-75"
          src="/assets/team/avatar_solene.png"
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
              Dev Back - Product Owner
            </h3>
          </div>
          <div className="devcard__bottom-info flex justify-evenly items-center my-4  font-light text-lg text-sm text-white text-center overflow-auto">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/solenelivran/"
              className="devcard__social-linkedin flex justify-center items-center bg-gray-200 rounded-full h-8 w-8  text-sm font-semibold text-gray-700 "
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://github.com/SoleneLivran"
              className="devcard__social-linkedin flex justify-center items-center bg-gray-200 rounded-full h-8 w-8  text-sm font-semibold text-gray-700 "
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              href="https://solenelivran.github.io/"
              className="devcard__social-linkedin flex justify-center items-center bg-gray-200 rounded-full h-8 w-8  text-sm font-semibold text-gray-700 "
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
)

export default About
