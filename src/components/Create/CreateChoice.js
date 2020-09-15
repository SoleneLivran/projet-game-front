import React, { useState, useEffect } from "react"

import "./Create.css"

const CreateGame = () => {
  /* Lieu State  */
  const [lieuState, setLieu] = useState({
    lieux: [
      {
        name: "Fôret",
        id: 0,
        description: "Une fôret silencieuse",
        image: "assets/img/lieux/forest.jpg",
      },
      {
        name: "Desert",
        id: 1,
        description: "Un desert aride",
        image: "assets/img/lieux/desert.jpg",
      },
      {
        name: "Taverne",
        id: 2,
        description: "Une taverne chaleureuse",
        image: "assets/img/lieux/taverne.jpg",
      },
      {
        name: "Espace",
        id: 2,
        description: "Une planète lointaine",
        image: "assets/img/lieux/space.jpg",
      },
    ],
  })
  /* Evenement State  */
  const [eventState, setEvenement] = useState({
    event: [
      {
        name: "Ours",
        id: 0,
        description: "",
        image: "assets/img/evenements/bear.jpg",
      },
      {
        name: "Bagarre",
        id: 1,
        description: "",
        image: "assets/img/evenements/bagarre.jpg",
      },
      {
        name: "Boire",
        id: 2,
        description: "",
        image: "assets/img/evenements/beer.jpg",
      },
      {
        name: "Alien",
        id: 3,
        description: "",
        image: "assets/img/evenements/alien.jpg",
      },
    ],
  })
  /* Action State  */
  const [actionsState, setActions] = useState({
    actions: [
      { name: "Se battre", id: 0, description: "" },
      {
        name: "Boire",
        id: 1,
        description: "",
      },
      {
        name: "Entrer",
        id: 2,
        description: "",
      },
      {
        name: "Fuir",
        id: 3,
        description: "",
      },
    ],
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
  })
  // State of current "Action" module
  const [currentActionState, setCurrentAction] = useState({
    currentAction: "ACTION",
    array: [],
    bgImage: "",
  })

  // State of nextSceneId => Current Scene ID
  const [currentNextSceneId, setNextSceneId] = useState({
    nextSceneId: 0,
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
          actionID: props.id,
          nextSceneId: scenesIDTrackerState.id + 1,
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
            id: 0,
            lieu: {
              lieuID: currentLieuState.currentLieuId,
              lieuName: currentLieuState.currentLieu,
              lieuBg: currentLieuState.bgImage,
            },
            evenement: {
              evenementID: currentEventState.currentEventId,
              evenementName: currentEventState.currentEvent,
            },
            actions: [...currentActionState.array],
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
            id: currentNextSceneId.nextSceneId,
            lieu: {
              lieuID: currentLieuState.currentLieuId,
              lieuName: currentLieuState.currentLieu,
              lieuBg: currentLieuState.bgImage,
            },
            evenement: {
              evenementID: currentEventState.currentEventId,
              evenementName: currentEventState.currentEvent,
            },
            actions: [...currentActionState.array],
          },
        ],
      })
      setActionDone({
        array: [...actionDoneState.array, currentNextSceneId.nextSceneId],
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
      nextSceneId: props.nextSceneId,
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
    console.log(currentNextSceneId.nextSceneId) // target nextSceneId
    console.log(props) // current nextSceneId to change
    console.log(index) // Index of the current scene clicked
    const newIndex = [...scenesState.scenes]
    newIndex[currentSceneIndexState.currentSceneIndex].actions[
      currentSceneIndexState.currentActionIndex
    ].nextSceneId = props

    setScenes({ scenes: newIndex })

    // TODO Revoir affichage
    setActionDone({
      array: [...actionDoneState.array, currentNextSceneId.nextSceneId],
    })
    setActionIsSelected({
      currentActionIsSelected: false,
    })
  }

  // Execute when the author save the current scene with saveCurrentScene
  useEffect(() => {
    // Reset modules state
    setCurrentLieu({ currentLieu: "LIEU", currentLieuId: 0, bgImage: "" })
    setCurrentEvent({ currentEvent: "EVENEMENT", currentEventId: 0, bgImage: "" })
    setCurrentAction({ currentAction: "ACTION", array: [], bgImage: "" })
  }, [scenesState])

  return (
    <div className="Nav bg-gray-900 h-full w-screen ">
      <div className="flex flex-col w-screen">
        {/* Saved Scenes */}
        <div className="flex flex-wrap   ">
          {scenesState.scenes.length > 0
            ? scenesState.scenes.map((item, index) => (
                <div
                  className="select-none bg-cover mx-8 my-4 w-48  py-4 rounded-lg bg-gray-200  flex flex-col justify-between  border-gray-500 items-center text-gray-100 shadow-lg font-bold text-lg"
                  style={{
                    backgroundImage: `url(${item.lieu.lieuBg})`,
                  }}
                >
                  <div
                    onClick={() => loadNewAction(item.id, index)}
                    className="flex border-2 border-gray-200  h-16 w-16 justify-center items-center rounded-full bg-gray-900 -mt-10 shadow-lg "
                  >
                    {item.id}
                  </div>

                  <div>
                    <div className="text-2xl">{item.lieu.lieuName}</div>
                    <div className="text-2xl">{item.evenement.evenementName}</div>
                  </div>
                  <div className="">
                    {item.actions.map((action, indexaction) => (
                      /* {actionDoneState.array.includes(item.nextSceneId) ?  : } */

                      <div
                        onClick={() =>
                          actionDoneState.array.includes(action.nextSceneId)
                            ? ""
                            : nextSceneId(
                                actionDoneState.array.includes(item.nextSceneId)
                                  ? ""
                                  : action,
                                index,
                                indexaction
                              )
                        }
                        className={
                          actionDoneState.array.includes(action.nextSceneId)
                            ? "py-2 select-none my-4 rounded-lg px-4 bg-teal-500 is-disabled shadow-md text-white font-bold"
                            : action.nextSceneId === currentNextSceneId.nextSceneId
                            ? "py-2 select-none my-4 rounded-lg px-4 bg-blue-600 shadow-md text-white font-bold transform duration-100 ease-in-out hover:scale-95"
                            : "py-2 select-none my-4 rounded-lg px-4 bg-gray-900 shadow-md text-white font-bold transform duration-100 ease-in-out hover:scale-95"
                        }
                      >
                        {/*<div className={scenesState.scenes.actions}></div> */}
                        <div className="flex justify-evenly">
                          {action.actionName}
                          {"  "}
                          {actionDoneState.array.includes(action.nextSceneId) ? (
                            <div className="mx-2">
                              {" "}
                              <i className="fas fa-arrow-right">
                                {" "}
                                {action.nextSceneId}
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
        <div className="flex   justify-center items-center">
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
      ) : (
        ""
      )}
      {/* /Save Current Scene Button */}
      {/* Cards */}
      <div className=" my-16 flex">
        {/* Display Lieu data cards */}
        {cardsState.currentCards === "lieuState"
          ? lieuState.lieux.map((item, i) => (
              <div
                key={i}
                onClick={() => chooseLieuOnClick(item)}
                className="select-none bg-cover text-gray-200 w-48 h-64 rounded-lg bg-gray-800 mx-8 flex justify-center items-center text-white font-bold text-2xl transform  duration-200 ease-in-out hover:-translate-y-2"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="flex flex-col  ">
                  <p> {item.name} </p>
                  <p className="text-lg font-normal ">{item.description}</p>
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
                className="select-none bg-cover text-gray-200 w-48 h-64 rounded-lg bg-gray-800 mx-8 flex justify-center items-center text-white font-bold text-2xl transform  duration-200 ease-in-out hover:-translate-y-2"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="flex flex-col  ">
                  <p> {item.name} </p>
                  <p className="text-lg font-normal ">{item.description}</p>
                </div>
              </div>
            ))
          : ""}
        {/* Display Action data cards */}
        {cardsState.currentCards === "actionState"
          ? actionsState.actions.map((item, i) => (
              <div
                key={i}
                onClick={() => chooseActionOnClick(item)}
                className="select-none  text-gray-200 w-48 h-64 rounded-lg bg-gray-800 mx-8 flex justify-center items-center text-white font-bold text-2xl transform  duration-200 ease-in-out hover:-translate-y-2"
              >
                <div className="flex flex-col  ">
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
