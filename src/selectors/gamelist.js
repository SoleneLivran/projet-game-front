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
