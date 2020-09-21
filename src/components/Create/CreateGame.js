import React, { useState, useEffect } from "react"
import axios from "axios"

import "./CreateGame.css"

const CreateGame = () => {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  })

  /* Evenement State  */
  const [eventState, setEvenement] = useState({
    event: [],
  })

  /* Lieu State  */
  const [lieuState, setLieu] = useState({
    lieux: [],
  })

  /* Action State  */
  const [actionsState, setActions] = useState({
    transitions: [],
  })

  // Sauvegarder Brouillon
  const saveStory = () => {
    const token = localStorage.getItem("user")

    console.log(scenesState.scenes)

    if (currentStoryID.story_id === null) {
      axios
        .post(
          "http://ec2-18-234-186-84.compute-1.amazonaws.com/api/stories",
          {
            title: currentTitleState.title,
            /* pictureFile: "pictureFile", */
            category: 8,
            /* status: 2, */
            difficulty: 2,
            synopsis: currentSynopsisState.synopsis,
            scenes: [...scenesState.scenes],
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log("POST :")
          console.log(response)
          setStoryID({ story_id: response.data.story_id })
        })
        .catch((error) => {
          console.log(error.response)
        })
    } else {
      axios
        .put(
          "http://ec2-18-234-186-84.compute-1.amazonaws.com/api/stories/" +
            currentStoryID.story_id,
          {
            title: currentTitleState.title,
            /* pictureFile: "pictureFile", */
            category: 8,
            /* status: 2, */
            difficulty: 2,
            synopsis: currentSynopsisState.synopsis,
            scenes: [...scenesState.scenes],
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log("PUT :")
          console.log(response)
          setStoryID({ story_id: response.data.story_id })
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  }
  // Publier Story
  const publishStory = () => {
    const token = localStorage.getItem("user")

    console.log(scenesState.scenes)

    if (currentStoryID.story_id === null) {
      axios
        .post(
          "http://ec2-18-234-186-84.compute-1.amazonaws.com/api/stories",
          {
            title: currentTitleState.title,
            /* pictureFile: "pictureFile", */
            category: 1,
            /* status: 2, */
            difficulty: 2,
            synopsis: currentSynopsisState.synopsis,
            scenes: [...scenesState.scenes],
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log("POST :")
          console.log(response)
          setStoryID({ story_id: response.data.story_id })
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
    axios
      .patch(
        "http://ec2-18-234-186-84.compute-1.amazonaws.com/api/stories/" +
          currentStoryID.story_id +
          "/publish",
        {
          title: currentTitleState.title,
          /* pictureFile: "pictureFile", */
          category: 1,
          /* status: 2, */
          difficulty: 2,
          synopsis: currentSynopsisState.synopsis,
          scenes: [...scenesState.scenes],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("PUT :")
        console.log(response)
        setStoryID({ story_id: response.data.story_id })
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  useEffect(() => {
    const token = localStorage.getItem("user")

    setAppState({ loading: true })
    axios
      .get("http://ec2-18-234-186-84.compute-1.amazonaws.com/api/events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        setEvenement({ event: response.data })
      })

    axios
      .get("http://ec2-18-234-186-84.compute-1.amazonaws.com/api/places", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLieu({ lieux: response.data })
      })
    axios
      .get("http://ec2-18-234-186-84.compute-1.amazonaws.com/api/actions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setActions({ transitions: response.data })
      })
  }, [setAppState])

  // State of current "Title"
  const [currentStoryID, setStoryID] = useState({
    story_id: null,
  })
  // State of current "Title"
  const [currentTitleState, setTitleState] = useState({
    title: "Titre",
  })
  // State of current "Synopsis"
  const [currentSynopsisState, setSynopsisState] = useState({
    synopsis: "Synopsis",
  })

  // State of current "Lieu" module
  const [currentLieuState, setCurrentLieu] = useState({
    currentLieu: "LIEU",
    currentLieuId: 0,
    bgImage: "",
  })
  // State of current "Lieu" module
  const [currentActionIsSelected, setActionIsSelected] = useState({
    currentActionIsSelected: false,
  })
  // State of current "Evenement" module
  const [currentEventState, setCurrentEvent] = useState({
    currentEvent: "EVENEMENT",
    currentEventId: 0,
    bgImage: "",
    isEnd: false,
  })
  // State of current "Action" module
  const [currentActionState, setCurrentAction] = useState({
    currentAction: "ACTION",
    array: [],
    bgImage: "",
  })

  // State of nextSceneId => Current Scene ID
  const [currentNextSceneId, setNextSceneId] = useState({
    nextSceneRef: 0,
  })
  // Current Module State to display
  const [cardsState, setCards] = useState({
    currentCards: "lieuState",
    bgImage: "",
  })

  // Scenes Module State to Save
  const [scenesState, setScenes] = useState({
    scenes: [],
  })
  // Scenes Id State to Save
  // TODO Need to be the length of the Array of the total of the transition
  const [scenesIDTrackerState, setScenesIDTracker] = useState({
    id: 0,
  })

  const [actionDoneState, setActionDone] = useState({
    array: [""],
  })

  // Current index of the action on the saved scenes
  const [currentSceneIndexState, setCurrentSceneIndex] = useState({
    currentSceneIndex: 0,
    currentActionIndex: 0,
  })
  // Action Clicked Index Tracker
  const [currentActionIndex, setActionIndex] = useState({
    actionIndex: 0,
  })

  // Set "Action" current State to the clicked module
  const chooseActionOnClick = (props) => {
    setCurrentAction({
      currentAction: props.name,
      array: [
        ...currentActionState.array,
        {
          actionName: props.name,
          action: props.id,
          nextSceneRef: scenesIDTrackerState.id + 1,
        },
      ],
    })
    /* trackTransitionIds() */
    setScenesIDTracker({
      id: scenesIDTrackerState.id + 1,
    })
  }

  // When module "Lieu" is clicked
  const lieuOnClick = () => {
    setCards({
      currentCards: "lieuState",
    })
  }
  // When module "Evenement" is clicked
  const eventOnClick = () => {
    setCards({
      currentCards: "evenementState",
    })
  }
  // When module "Action" is clicked
  const actionOnClick = () => {
    setCards({
      currentCards: "actionState",
    })
  }
  // Set "Lieu" current State to the clicked module
  const chooseLieuOnClick = (props) => {
    setCurrentLieu({
      currentLieu: props.name,
      bgImage: props.image,
      currentLieuId: props.id,
    })
  }
  // Set "Evenement" current State to the clicked module
  const chooseEventOnClick = (props) => {
    setCurrentEvent({
      currentEvent: props.name,
      bgImage: props.image,
      currentEventId: props.id,
      isEnd: props.isEnd,
    })
  }

  const onDelete = (index) => {
    // Clone the current state array
    const actions = currentActionState.array.slice(0)
    // Remove the element from the array
    actions.splice(index, 1)
    if (currentActionState.array.length == 1) {
      setCurrentAction({ currentAction: "ACTION", array: [], bgImage: "" })
      return
    }
    setCurrentAction({
      ...currentActionState,
      array: actions,
    })
  }

  const saveCurrentScene = () => {
    /*     setScenesIDTracker({
      id: scenesIDTrackerState.id + 1,
    }) */
    if (
      currentLieuState.currentLieu != "LIEU" &&
      currentEventState.currentEvent != "EVENEMENT" &&
      currentActionState.currentAction != "ACTION" &&
      scenesState.scenes.length < 1
    ) {
      setScenes({
        // TODO
        scenes: [
          ...scenesState.scenes,
          {
            reference: 0,
            place: currentLieuState.currentLieuId,
            event: currentEventState.currentEventId,
            isEnd: currentEventState.isEnd,
            lieu: {
              lieuID: currentLieuState.currentLieuId,
              lieuName: currentLieuState.currentLieu,
              lieuBg: currentLieuState.bgImage,
            },
            evenement: {
              evenementID: currentEventState.currentEventId,
              evenementName: currentEventState.currentEvent,
            },
            transitions: [...currentActionState.array],
          },
        ],
      })
    } else if (
      currentLieuState.currentLieu != "LIEU" &&
      currentEventState.currentEvent != "EVENEMENT" &&
      currentActionState.currentAction != "ACTION"
    ) {
      setScenes({
        scenes: [
          ...scenesState.scenes,
          {
            reference: currentNextSceneId.nextSceneRef,
            place: currentLieuState.currentLieuId,
            event: currentEventState.currentEventId,
            isEnd: currentEventState.isEnd,
            lieu: {
              lieuID: currentLieuState.currentLieuId,
              lieuName: currentLieuState.currentLieu,
              lieuBg: currentLieuState.bgImage,
            },
            evenement: {
              evenementID: currentEventState.currentEventId,
              evenementName: currentEventState.currentEvent,
            },
            transitions: [...currentActionState.array],
          },
        ],
      })
      setActionDone({
        array: [...actionDoneState.array, currentNextSceneId.nextSceneRef],
      })
      setActionIsSelected({
        currentActionIsSelected: false,
      })
    } else {
      return
    }
  }

  // Save End Scene

  const saveEndScene = () => {
    if (
      currentLieuState.currentLieu != "LIEU" &&
      currentEventState.currentEvent != "EVENEMENT" &&
      scenesState.scenes.length < 1
    ) {
      setScenes({
        // TODO
        scenes: [
          ...scenesState.scenes,
          {
            reference: 0,
            place: currentLieuState.currentLieuId,
            event: currentEventState.currentEventId,
            lieu: {
              lieuID: currentLieuState.currentLieuId,
              lieuName: currentLieuState.currentLieu,
              lieuBg: currentLieuState.bgImage,
            },
            evenement: {
              evenementID: currentEventState.currentEventId,
              evenementName: currentEventState.currentEvent,
            },
            transitions: [],
          },
        ],
      })
    } else if (
      currentLieuState.currentLieu != "LIEU" &&
      currentEventState.currentEvent != "EVENEMENT"
    ) {
      setScenes({
        scenes: [
          ...scenesState.scenes,
          {
            reference: currentNextSceneId.nextSceneRef,
            place: currentLieuState.currentLieuId,
            event: currentEventState.currentEventId,
            lieu: {
              lieuID: currentLieuState.currentLieuId,
              lieuName: currentLieuState.currentLieu,
              lieuBg: currentLieuState.bgImage,
            },
            evenement: {
              evenementID: currentEventState.currentEventId,
              evenementName: currentEventState.currentEvent,
            },
            transitions: [],
          },
        ],
      })
      setActionDone({
        array: [...actionDoneState.array, currentNextSceneId.nextSceneRef],
      })
      setActionIsSelected({
        currentActionIsSelected: false,
      })
    } else {
      return
    }
  }
  // Update the ID of the Current Scene for the Transition
  const nextSceneId = (props, index, indexaction) => {
    console.log(
      `currentSceneIndex : ${index} - currentActionIndex : ${indexaction} `
    )
    setNextSceneId({
      nextSceneRef: props.nextSceneRef,
    })

    /* Scene index of the actions */
    setCurrentSceneIndex({
      currentSceneIndex: index,
      currentActionIndex: indexaction,
    })

    setActionIsSelected({
      currentActionIsSelected: true,
    })
  }

  const loadNewAction = (props, index) => {
    const newIndex = [...scenesState.scenes]
    console.log(newIndex)
    newIndex[currentSceneIndexState.currentSceneIndex].transitions[
      currentSceneIndexState.currentActionIndex
    ].nextSceneRef = props

    setScenes({ scenes: newIndex })

    // TODO Revoir affichage
    setActionDone({
      array: [...actionDoneState.array, currentNextSceneId.nextSceneRef],
    })
    setActionIsSelected({
      currentActionIsSelected: false,
    })
  }

  // Execute when the author save the current scene with saveCurrentScene
  useEffect(() => {
    // Reset modules state
    setCurrentLieu({ currentLieu: "LIEU", currentLieuId: 0, bgImage: "" })
    setCurrentEvent({
      currentEvent: "EVENEMENT",
      currentEventId: 0,
      bgImage: "",
      isEnd: false,
    })
    setCurrentAction({ currentAction: "ACTION", array: [], bgImage: "" })
  }, [scenesState])

  const [showModal, setShowModal] = useState({
    showModal: false,
  })

  const showModalFun = (props) => {
    setShowModal({ showModal: props })
  }

  // Change current Title State
  const handleTitle = (e) => {
    setTitleState({ title: e.target.value })
  }

  // Change current Synopsis State
  const handleSynopsis = (e) => {
    setSynopsisState({ synopsis: e.target.value })
  }

  return (
    <div className="Nav bg-gray-900 flex  flex-col justify-evenly items-center  h-full mt-32 ">
      {/* Modal */}
      <div
        className={
          showModal.showModal
            ? "absolute h-screen flex justify-center items-center z-50 top-0"
            : "hidden"
        }
      >
        <div className="z-50 bg-white flex flex-col justify-center items-center text-gray-900 text-center rounded-lg shadow-lg p-16">
          <h2 className="text-3xl ">Titre de votre histoire : </h2>
          <input
            onChange={handleTitle}
            placeholder="Votre titre"
            className="px-4 py-2 shadow-inner w-64 focus:border-2 focus:border-gray-700"
          ></input>
          <h2 className="text-3xl ">Synopsis : </h2>
          <textarea
            onChange={handleSynopsis}
            placeholder="Votre titre"
            className="px-4 py-2 shadow-inner w-64"
          ></textarea>
          <button
            className="bg-teal-500 ease-in duration-100 transform my-6 font-bold uppercase shadow-lg text-center px-4 py-2 text-2xl w-64 text-white rounded-lg hover:scale-105"
            onClick={publishStory}
          >
            Publier
          </button>
          <button
            className="bg-red-500 ease-in duration-100 transform  font-bold uppercase shadow-lg text-center px-4 py-2 text-2xl w-64 text-white rounded-lg hover:scale-105"
            onClick={() => showModalFun(false)}
          >
            annuler
          </button>
        </div>
        <div className="absolute  w-screen h-screen opacity-50 bg-white z-30"></div>
      </div>
      {/* /Modal */}
      <div className="flex flex-col w-screen">
        {/* Saved Scenes */}
        <div className="flex    ">
          {scenesState.scenes.length > 0
            ? scenesState.scenes.map((item, index) => (
                <div
                  className="select-none bg-cover mx-8 my-4 w-64  py-4 rounded-lg bg-gray-200  flex flex-col justify-between  border-gray-500 items-center text-gray-100 shadow-lg font-bold text-lg"
                  style={{
                    backgroundImage: `url(${item.lieu.lieuBg})`,
                  }}
                >
                  <div
                    onClick={() => loadNewAction(item.reference, index)}
                    className="flex border-2 border-gray-200  h-16 w-16 justify-center items-center rounded-full bg-gray-900 -mt-10 shadow-lg "
                  >
                    {item.reference}
                  </div>

                  <div>
                    <div className="text-2xl">{item.lieu.lieuName}</div>
                    <div className="text-2xl">{item.evenement.evenementName}</div>
                  </div>
                  <div className="">
                    {item.transitions.map((action, indexaction) => (
                      /* {actionDoneState.array.includes(item.nextSceneId) ?  : } */

                      <div
                        onClick={() =>
                          actionDoneState.array.includes(action.nextSceneRef)
                            ? ""
                            : nextSceneId(
                                actionDoneState.array.includes(item.nextSceneRef)
                                  ? ""
                                  : action,
                                index,
                                indexaction
                              )
                        }
                        className={
                          actionDoneState.array.includes(action.nextSceneRef)
                            ? "py-2 select-none my-4 rounded-lg px-4 bg-teal-500 shadow-md text-white font-bold"
                            : action.nextSceneRef === currentNextSceneId.nextSceneRef
                            ? "py-2 select-none my-4 rounded-lg px-4 bg-blue-600 shadow-md text-white font-bold transform duration-100 ease-in-out hover:scale-95"
                            : "py-2 select-none my-4 rounded-lg px-4 bg-gray-900 shadow-md text-white font-bold transform duration-100 ease-in-out hover:scale-95"
                        }
                      >
                        {/*<div className={scenesState.scenes.actions}></div> */}
                        <div className="flex flex-wrap justify-evenly">
                          {action.actionName}
                          {"  "}
                          {actionDoneState.array.includes(action.nextSceneRef) ? (
                            <div className="mx-2">
                              {" "}
                              <i className="fas fa-arrow-right">
                                {" "}
                                {action.nextSceneRef}
                              </i>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            : ""}
        </div>
        {/* /Saved Scenes */}
        {/* Modules */}
        <div className="flex justify-center items-center">
          {/* Lieu module */}

          <div
            onClick={lieuOnClick}
            className={
              currentLieuState.currentLieu === "LIEU"
                ? "select-none bg-cover my-4 w-48 h-48 rounded-lg bg-gray-200 mx-8 flex justify-center border-4 border-dashed border-gray-500 items-center text-gray-500 font-bold text-2xl"
                : "select-none bg-cover my-4 w-48 h-48 rounded-lg bg-gray-200 mx-8 flex justify-center  border-gray-500 items-center text-gray-100 shadow-lg font-bold text-2xl"
            }
            style={{
              backgroundImage: currentLieuState.bgImage
                ? `url(${currentLieuState.bgImage})`
                : "",
            }}
          >
            {currentLieuState.currentLieu}
          </div>
          {/* /Lieu module */}
          {/* Evenement module */}
          <div
            onClick={eventOnClick}
            className={
              currentEventState.currentEvent === "EVENEMENT"
                ? "select-none bg-cover my-4 w-48 h-48 rounded-lg bg-gray-200 mx-8 flex justify-center border-4 border-dashed border-gray-500 items-center text-gray-500 font-bold text-2xl"
                : "select-none bg-cover my-4 w-48 h-48 rounded-lg bg-gray-200 mx-8 flex justify-center  border-gray-500 items-center text-gray-100 shadow-lg font-bold text-2xl"
            }
            style={{
              backgroundImage: currentEventState.bgImage
                ? `url(${currentEventState.bgImage})`
                : "",
            }}
          >
            {currentEventState.currentEvent}
          </div>

          {/* /Evenement module */}
          {/* Action module */}

          {currentActionState.array == false ? (
            <div
              onClick={actionOnClick}
              className={
                currentActionState.currentAction === "ACTION"
                  ? "select-none my-4 w-48 h-48 rounded-lg bg-gray-200 mx-8 flex justify-center border-4 border-dashed border-gray-500 items-center text-gray-500 font-bold text-2xl"
                  : "select-none my-4 w-48 h-48 rounded-lg bg-gray-700 mx-8 flex justify-center shadow-lg items-center text-gray-100 font-bold text-2xl"
              }
            >
              {currentActionState.currentAction}
            </div>
          ) : (
            currentActionState.array.map((item, index) => (
              <div
                key={index}
                onClick={actionOnClick}
                className={
                  currentActionState.currentAction === "ACTION"
                    ? "select-none my-4 w-48 h-48 rounded-lg bg-gray-200 mx-8 flex justify-center border-4 border-dashed border-gray-500 items-center text-gray-500 font-bold text-2xl"
                    : "select-none my-4 w-48 h-48 rounded-lg bg-gray-700 mx-8 flex justify-center shadow-lg items-center text-gray-100 font-bold text-2xl"
                }
              >
                <div className="flex flex-col">
                  {item.actionName}
                  <span onClick={() => onDelete(index)} className="py-4">
                    X
                  </span>
                </div>
              </div>
            ))
          )}

          {/* /Action module */}
        </div>
        {/* /Modules */}
      </div>
      <button
        className="bg-teal-500 ease-in duration-100 transform my-6 font-bold uppercase shadow-lg text-center px-4 py-2 text-2xl w-64 text-white rounded-lg hover:scale-105"
        onClick={saveStory}
      >
        Enregistrer
      </button>
      <button
        className="bg-teal-500 ease-in duration-100 transform my-6 font-bold uppercase shadow-lg text-center px-4 py-2 text-2xl w-64 text-white rounded-lg hover:scale-105"
        onClick={() => showModalFun(true)}
      >
        Publier
      </button>
      {/* Save Current Scene Button */}
      {currentLieuState.currentLieu != "LIEU" &&
      currentEventState.currentEvent != "EVENEMENT" &&
      currentActionState.currentAction != "ACTION" &&
      (currentActionIsSelected.currentActionIsSelected ||
        scenesState.scenes.length < 1) ? (
        <div>
          <button
            onClick={saveCurrentScene}
            className="text-white text-lg py-2 px-4 bg-gray-700 shadow-lg rounded-md"
          >
            Ajouter une nouvelle scène
          </button>
        </div>
      ) : currentEventState.isEnd ? (
        <div>
          <button
            onClick={saveEndScene}
            className="text-white text-lg py-2 px-4 bg-gray-700 shadow-lg rounded-md"
          >
            Ajouter une nouvelle scène
          </button>
        </div>
      ) : (
        ""
      )}
      {/* /Save Current Scene Button */}
      {/* Cards */}
      <div className=" my-16 flex overflow-x-auto w-screen">
        {/* Display Lieu data cards */}
        {cardsState.currentCards === "lieuState"
          ? lieuState.lieux.map((item, i) => (
              <div
                key={i}
                onClick={() => chooseLieuOnClick(item)}
                className="select-none  text-gray-200 w-48 h-64 rounded-lg bg-gray-800 m-8 flex justify-center items-center text-white font-bold text-2xl transform  duration-200 ease-in-out hover:-translate-y-2"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="flex flex-col justify-center items-center text-center w-48 h-64">
                  <p> {item.name} </p>
                  <p className="text-lg font-normal w-full">{item.description}</p>
                </div>
              </div>
            ))
          : ""}
        {/* Display Evement data cards */}
        {cardsState.currentCards === "evenementState"
          ? eventState.event.map((item, i) => (
              <div
                key={i}
                onClick={() => chooseEventOnClick(item)}
                className="select-none bg-cover text-gray-200 w-48 h-64 px-8 rounded-lg bg-gray-800 m-8 flex justify-center items-center text-white font-bold text-2xl transform  duration-200 ease-in-out hover:-translate-y-2"
                style={{ backgroundImage: `url(${item.pictureFile})` }}
              >
                <div className="flex flex-col justify-center items-center text-center w-48 h-64  ">
                  <p> {item.name} </p>
                  <p className="text-lg font-normal ">{item.description}</p>
                </div>
              </div>
            ))
          : ""}
        {/* Display Action data cards */}
        {cardsState.currentCards === "actionState"
          ? actionsState.transitions.map((item, i) => (
              <div
                key={i}
                onClick={() => chooseActionOnClick(item)}
                className="select-none  text-gray-200 w-48 h-64 rounded-lg bg-gray-800 m-8 flex justify-center items-center text-white font-bold text-2xl transform  duration-200 ease-in-out hover:-translate-y-2"
              >
                <div className="flex flex-col justify-center items-center text-center w-48 h-64  ">
                  <p> {item.name} </p>
                  <p className="text-lg font-normal ">{item.description}</p>
                </div>
              </div>
            ))
          : ""}
      </div>
      {/* /Cards */}
    </div>
  )
}

export default CreateGame
