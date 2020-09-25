export const findCategoryImg = (category) => {
  switch (category) {
    case "Absurde":
      return "category_absurd"

    case "Autre":
      return "category_other"

    case "Aventure":
      return "category_adventure"

    case "Combat":
      return "category_combat"

    case "Enquête":
      return "category_investigation"

    case "Gestion":
      return "category_management"

    case "Horreur":
      return "category_horror"

    case "Narratif":
      return "category_narrative"

    default:
      break
  }
}
