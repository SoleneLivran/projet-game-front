export const HIDE_NAV = "HIDE_NAV"
export const FETCH_STORY = "FETCH_STORY"
export const SET_SCENE = "SET_SCENE"
export const NEXT_SCENE = "NEXT_SCENE"

export const hideNav = () => ({
  type: HIDE_NAV,
})

export const fetchStory = () => ({
  type: FETCH_STORY,
})

export const setScene = (sceneDatas) => ({
  type: SET_SCENE,
  transitions: sceneDatas.transitions,
  event: sceneDatas.event,
  place: sceneDatas.place,
})

export const nextScene = (nextSceneId) => ({
  type: NEXT_SCENE,
  nextSceneId: nextSceneId,
})
