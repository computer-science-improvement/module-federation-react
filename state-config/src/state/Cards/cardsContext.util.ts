import { InitialState as ICards, initialState, Card } from "./cardsContext";
import { useState } from "react";

const findPosition = (cards: Card[], id: string) => {
  const foundCardIndex = cards.findIndex((card) => card.id === id);
  if(foundCardIndex < 0) return null;

  return foundCardIndex;
}

export const useCardsValues = (): ICards => {
  const [cards, setCards] = useState(initialState.cards);

  const addCard: ICards['addCard'] = (card) => {
    setCards((old) => [...old, card]);
  }

  const updateCard: ICards['updateCard'] = (id, card) => {
    const position = findPosition(cards, id);
    if(position) {
     setCards((old) => {
       const tempArr = [...old];
       tempArr[position] = card;
       return tempArr
     })
    }
  }

  const removeCard: ICards['removeCard'] = (id) => {}
  const insertCard: ICards['insertCard'] = (id) => {}

  return  {
    cards,
    addCard,
    updateCard,
    removeCard,
    insertCard
  }
}