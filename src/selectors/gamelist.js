import axios from "axios"

// API Request for categories list
export const fetchCategories = (setCategoriesList) => {
  axios
    .get(
      "http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/story_categories"
    )
    .then((response) => {
      setCategoriesList(response.data)
    })
    .catch((error) => {
      console.log("error")
    })
}

// API Request for stories list
export const fetchStories = (setStoriesList) => {
  axios
    .get("http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/stories")
    .then((response) => {
      setStoriesList(response.data)
    })
    .catch((error) => {
      console.log("error")
    })
}

export const fetchFilterRequest = (setStoriesList, filterId, filterTitle) => {
  if (filterId === 0) {
    return fetchStories(setStoriesList)
  }

  if (filterTitle === "Catégories") {
    axios
      .get(
        `http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/stories?story_category=${filterId}`
      )
      .then((response) => {
        setStoriesList(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  if (filterTitle === "Difficultés") {
    axios
      .get(
        `http://ec2-18-234-186-84.compute-1.amazonaws.com/api/public/stories?story_difficulty=${filterId}`
      )
      .then((response) => {
        setStoriesList(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

// Sort by dropdown option
export const sortStories = (
  storiesList,
  setStoriesList,
  sortMethod,
  activeCheckbox
) => {
  const copyStories = [...storiesList]
  switch (sortMethod) {
    case "name":
      setStoriesList(
        copyStories.sort((a, b) =>
          activeCheckbox
            ? b.title.localeCompare(a.title)
            : a.title.localeCompare(b.title)
        )
      )
      break
    case "category":
      setStoriesList(
        copyStories.sort((a, b) =>
          activeCheckbox
            ? b.category.name.localeCompare(a.category.name)
            : a.category.name.localeCompare(b.category.name)
        )
      )
      break
    case "difficulty":
      setStoriesList(
        copyStories.sort((a, b) =>
          activeCheckbox ? b.difficulty - a.difficulty : a.difficulty - b.difficulty
        )
      )
      break
    case "rating":
      setStoriesList(
        copyStories.sort((a, b) =>
          activeCheckbox ? b.rating - a.rating : a.rating - b.rating
        )
      )
      break
    case "date":
      setStoriesList(
        copyStories.sort((a, b) =>
          activeCheckbox
            ? b.publishedAt.localeCompare(a.publishedAt)
            : a.publishedAt.localeCompare(b.publishedAt)
        )
      )
      break
    default:
      break
  }
}
