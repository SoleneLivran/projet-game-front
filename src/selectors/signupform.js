export const checkInput = (pseudo, email, password, passwordCheck) => {
  const errors = {}
  if (pseudo === "") {
    errors.pseudoErrors = ["Le pseudo ne peut-être vide"]
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
  } else {
    if (password !== passwordCheck && passwordCheck !== "") {
      errors.passwordErrors = ["Les mots de passes ne sont pas identiques"]
    }
  }

  return errors
}