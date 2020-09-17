export const FETCH_POPULAR_STORIES = "FETCH_POPULAR_STORIES"
export const SAVE_POPULAR_STORIES = "SAVE_POPULAR_STORIES"
export const SHOW_LOADING_POPULAR = "SHOW_LOADING_POPULAR"

export const showLoadingPopular = () => ({
  type: SHOW_LOADING_POPULAR,
})

export const fetchPopularStories = () => ({
  type: FETCH_POPULAR_STORIES,
})

export const savePopularStories = (data) => ({
  type: SAVE_POPULAR_STORIES,
  popularStories: data,
})
