export const checkInput = (username, email, password, passwordCheck) => {
  const errors = {}
  if (username === "") {
    errors.usernameErrors = ["Le nom d'utilisateur ne peut-être vide"]
  } else if (username.length < 2) {
    errors.usernameErrors = [
      "Le nom d'utilisateur doit contenir 2 caractères minimum",
    ]
  }
  if (email === "") {
    errors.emailErrors = ["L'email ne peut être vide"]
  }
  if (passwordCheck === "") {
    errors.passwordCheckErrors = [
      "La confirmation du mot de passe ne peut être vide",
    ]
  }
  if (password === "") {
    errors.passwordErrors = ["Le mot de passe ne peut être vide"]
  } else if (password.length < 6) {
    errors.passwordErrors = ["Le mot de passe doit contenir 6 caractères minimum"]
  } else {
    if (password !== passwordCheck && passwordCheck !== "") {
      errors.passwordErrors = ["Les mots de passes ne sont pas identiques"]
    }
  }

  return errors
}
