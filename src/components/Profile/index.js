import React from "react"
import "./styles.css"
import Field from "src/containers/Field/index"

const Profile = () => (
  <div className="profile">
    <section className="profile__stories">
      <h1 className="stories__title">Mes histoires</h1>
      <ul className="stories__list">
        <li className="stories__story">
          <h2 className="stories__story-title">Nom de l'histoire</h2>
          <div className="stories__story-options">
            <p className="stories__story-status">Statut</p>
            <button className="stories__story-edit">
              <i class="fas fa-edit" />
            </button>
            <button className="stories__story--delete">
              <i class="fas fa-trash-alt" />
            </button>
          </div>
        </li>
      </ul>
    </section>
    <section className="profile__user">
      <div className="profile__right-panel">
        <img src="" alt="" className="profile__img" />
      </div>
      <div className="profile__left-panel">
        <div className="profile__informations">
          <Field
            
          />
        </div>
      </div>
    </section>
  </div>
)

export default Profile
