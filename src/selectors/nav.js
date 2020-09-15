export const fetchDatasUserPanel = (isLogged) =>
  isLogged
    ? [
        { name: "mon profil", path: "/profil" },
        { name: "deconnexion", path: "/logout" },
      ]
    : [
        { name: "connexion", path: "/login" },
        { name: "inscription", path: "/signup" },
      ]
