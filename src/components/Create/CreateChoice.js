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

  // State of current "SaveScene" button
  const [currentSaveSceneState, setCurrentSaveScene] = useState({
    currentSaveScene: false,
  })

  // State of current "Lieu" module
  const [currentLieuState, setCurrentLieu] = useState({
    currentLieu: "LIEU",
    currentLieuId: 0,
    bgImage: "",
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
  // Current Module State to display
  const [cardsState, setCards] = useState({
    currentCards: "lieuState",
    bgImage: "",
  })

  // Scenes Module State to Save
  const [scenesState, setScenes] = useState({
    scenes: [],
  })

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
  // Set "Action" current State to the clicked module
  const chooseActionOnClick = (props) => {
    setCurrentAction({
      currentAction: props.name,
      array: [
        ...currentActionState.array,
        { actionName: props.name, actionID: props.id },
      ],
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
    if (
      currentLieuState.currentLieu != "LIEU" &&
      currentEventState.currentEvent != "EVENEMENT" &&
      currentActionState.currentAction != "ACTION"
    ) {
      setScenes({
        scenes: [
          ...scenesState.scenes,
          {
            id: 1,
            previousID: null,
            lieu: {
              lieuID: currentLieuState.currentLieuId,
              lieuName: currentLieuState.currentLieu,
            },
            evenement: {
              evenementID: currentEventState.currentEventId,
              evenementName: currentEventState.currentEvent,
            },
            actions: [...currentActionState.array],
          },
        ],
      })
    } else {
      return
    }
  }

  // Execute when scenesState change (when the author save the current scene)
  useEffect(() => {
    // Reset modules state
    setCurrentLieu({ currentLieu: "LIEU", currentLieuId: 0, bgImage: "" })
    setCurrentEvent({ currentEvent: "EVENEMENT", currentEventId: 0, bgImage: "" })
    setCurrentAction({ currentAction: "ACTION", array: [], bgImage: "" })
  }, [scenesState])

  return (
    <div className="Nav bg-gray-900 h-full w-screen ">
      <div className="flex w-screen">
        {/* Saved Scenes */}
        <div className="flex flex-col w-1/4 justify-center items-center">
          {scenesState.scenes.length > 0
            ? scenesState.scenes.map((item, index) => (
                <div className="flex my-4 w-48 flex-col bg-white p-8 rounded-lg">
                  <div className="">Lieu : {item.lieu.lieuName}</div>
                  <div className="">Evenement : {item.evenement.evenementName}</div>
                  <div className="">
                    Actions :
                    {item.actions.map((action) => (
                      <p>{action.actionName}</p>
                    ))}
                  </div>
                </div>
              ))
            : ""}
        </div>
        {/* /Saved Scenes */}
        {/* Modules */}
        <div className="flex flex-col w-3/4 justify-center items-center">
          {/* Lieu module */}
          <div className="flex">
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
          </div>
          {/* /Evenement module */}
          {/* Action module */}
          <div className="flex">
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
          </div>
          {/* /Action module */}
        </div>
        {/* /Modules */}
      </div>
      {/* Save Current Scene Button */}
      {currentLieuState.currentLieu != "LIEU" &&
      currentEventState.currentEvent != "EVENEMENT" &&
      currentActionState.currentAction != "ACTION" ? (
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
