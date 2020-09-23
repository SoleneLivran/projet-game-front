import axios from "axios"

export const checkInput = (name, mail, password, newPassword) => {
  const errors = {}
  if (name === "") {
    errors.nameErrors = ["Le nom d'utilisateur ne peut-être vide"]
  } else if (name.length < 2) {
    errors.nameErrors = ["Le nom d'utilisateur doit contenir 2 caractères minimum"]
  }
  if (mail === "") {
    errors.mailErrors = ["L'email ne peut être vide"]
  }
  if (newPassword !== "") {
    if (newPassword.length < 6) {
      errors.passwordCheckErrors = [
        "Le nouveau mot de passe doit contenir 6 caractères minimum",
      ]
    }
  }
  if (password === "") {
    errors.passwordErrors = ["Le mot de passe ne peut être vide"]
  }

  return errors
}

export const fetchUserStories = (setUserStoriesList, connectedId) => {
  axios
    .get(
      `http://ec2-18-234-186-84.compute-1.amazonaws.com/api/app_users/${connectedId}/stories`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`,
        },
      }
    )
    .then((response) => {
      setUserStoriesList(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
