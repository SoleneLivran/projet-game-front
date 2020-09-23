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
