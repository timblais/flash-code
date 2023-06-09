import { CardObject } from "@/types/documentTypes"

export const getUserDecks = async (user: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/decks/byuser/${user}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
    const data = await response.json()
    return data["decks"]
  } catch (error) {
    console.log(error)
  }
}

export const createNewDeck = async (
  user: string,
  deckTitle: string,
  language: string
) => {
  try {
    const response = await fetch("http://localhost:3000/api/decks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        deckTitle: deckTitle,
        language: language,
        user: user,
      }),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getSingleDeck = async (deck: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/decks/viewdeck/${deck}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
    const data = await response.json()
    return data
  } catch (error) {}
}

export const createNewCard = async (
  user: string,
  cardTitle: string,
  deck: string,
  question: string,
  answer: string,
  language: string
) => {
  try {
    const response = await fetch("http://localhost:3000/api/cards", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        user: user,
        cardTitle: cardTitle,
        deckId: deck,
        question: question,
        answer: answer,
        language: language,
      }),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const editCard = async (
  _id: string,
  cardTitle: string,
  question: string,
  answer: string,
  language: string
) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cards/edit`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        _id: _id,
        cardTitle: cardTitle,
        question: question,
        answer: answer,
        language: language,
      }),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const editResetCard = async (
  _id: string,
  cardTitle: string,
  question: string,
  answer: string,
  language: string
) => {
  try {
    const response = await fetch(`http://localhost:3000/api/cards/editreset`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        _id: _id,
        cardTitle: cardTitle,
        question: question,
        answer: answer,
        language: language,
      }),
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getUserDecksWithCardsDue = async (user: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/cards/byuser/${user}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getCardsToStudy = async (deck: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/cards/study/${deck}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateRatedCard = async (card: CardObject) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/cards/edit/updateRated`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          _id: card._id,
          dueDate: card.dueDate,
          repetitionNumber: card.repetitionNumber,
          easinessFactor: card.easinessFactor,
          repetitionInterval: card.repetitionInterval,
          totalViews: card.totalViews,
        }),
      }
    )
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
