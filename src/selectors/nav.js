export const fetchDatasUserPanel = (isLogged, connectedId) =>
  isLogged
    ? [
        { name: "mon profil", path: "/profile/1" },
        { name: "deconnexion", path: "/logout" },
      ]
    : [
        { name: "connexion", path: "/login" },
        { name: "inscription", path: "/signup" },
      ]
