export const checkInput = (username, email, password, passwordCheck) => {
  const errors = []
  if (username === "") {
    errors.push({
      errorMessage: "Le nom d'utilisateur ne peut-être vide",
      type: "username",
    })
    return errors
  } else if (username.length < 2) {
    errors.push({
      errorMessage: "Le nom d'utilisateur doit contenir 2 caractères minimum",
      type: "username",
    })
    return errors
  }
  if (email === "") {
    errors.push({ errorMessage: "L'email ne peut être vide", type: "email" })
    return errors
  }
  if (password === "") {
    errors.push({
      errorMessage: "Le mot de passe ne peut être vide",
      type: "password",
    })
    return errors
  } else if (password.length < 6) {
    errors.push({
      errorMessage: "Le mot de passe doit contenir 6 caractères minimum",
      type: "password",
    })
    return errors
  } else if (passwordCheck === "") {
    errors.push({
      errorMessage: "La confirmation du mot de passe ne peut être vide",
      type: "passwordCheck",
    })
    return errors
  } else {
    if (password !== passwordCheck && passwordCheck !== "") {
      errors.push({
        errorMessage: "Les mots de passes ne sont pas identiques",
        type: "password",
      })
    }
    return errors
  }

  return errors
}
