export const fetchDatasUserPanel = (isLogged) =>
  isLogged
    ? [
        { name: "mon profil", path: "/profile" },
        { name: "deconnexion", path: "/logout" },
      ]
    : [
        { name: "connexion", path: "/login" },
        { name: "inscription", path: "/signup" },
      ]
