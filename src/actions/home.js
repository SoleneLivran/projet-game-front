export const FETCH_POPULAR_STORIES = "FETCH_POPULAR_STORIES"
export const FETCH_LATEST_STORIES = "FETCH_LATEST_STORIES"
export const SAVE_POPULAR_STORIES = "SAVE_POPULAR_STORIES"
export const SAVE_LATEST_STORIES = "SAVE_LATEST_STORIES"

export const fetchPopularStories = () => ({
  type: FETCH_POPULAR_STORIES,
})

export const fetchLatestStories = () => ({
  type: FETCH_LATEST_STORIES,
})

export const savePopularStories = (data) => ({
  type: SAVE_POPULAR_STORIES,
  popularStories: data,
})

export const saveLatestStories = (data) => ({
  type: SAVE_LATEST_STORIES,
  latestStories: data,
})
