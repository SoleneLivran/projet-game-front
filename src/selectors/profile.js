export const checkInput = (name, mail, password, newPassword) => {
  const errors = {}
  if (name === "") {
    errors.nameErrors = ["Le nom d'utilisateur ne peut-être vide"]
  } else if (name.length < 2) {
    errors.nameErrors = ["Le nom d'utilisateur doit contenir 2 caractères minimum"]
  }
  if (mail === "") {
    errors.mailErrors = ["L'mail ne peut être vide"]
  }
  if (newPassword === "") {
    errors.passwordCheckErrors = [
      "La confirmation du mot de passe ne peut être vide",
    ]
  }
  if (password === "") {
    errors.passwordErrors = ["Le mot de passe ne peut être vide"]
  } else if (password.length < 6) {
    errors.passwordErrors = ["Le mot de passe doit contenir 6 caractères minimum"]
  } else {
    if (password !== newPassword && newPassword !== "") {
      errors.passwordErrors = ["Les mots de passes ne sont pas identiques"]
    }
  }

  return errors
}
