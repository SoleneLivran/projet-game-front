export const FETCH_POPULAR_STORIES = "FETCH_POPULAR_STORIES"
export const SAVE_POPULAR_STORIES = "SAVE_POPULAR_STORIES"

export const fetchPopularStories = () => ({
  type: FETCH_POPULAR_STORIES,
})

export const savePopularStories = (data) => ({
  type: SAVE_POPULAR_STORIES,
  popularStories: data,
})
