export const fetchDatasUserPanel = (isLogged, connectedId) =>
  isLogged
    ? [
        { name: "mon profil", path: `/profile/${connectedId}` },
        { name: "deconnexion", path: "/logout" },
      ]
    : [
        { name: "connexion", path: "/login" },
        { name: "inscription", path: "/signup" },
      ]
