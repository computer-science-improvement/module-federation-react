import React, { useContext } from "react";

export type Card = Partial<{ name: string; id: string }>
export type Noop = () => void;
export const noop = () => null;


const cards: Card[] = [];

export type InitialState = {
  cards: Card[];
  addCard: (card: Card) => void;
  updateCard: (id: string, card: Card) => void;

  removeCard: (id: string) => void;
  insertCard: (order: number, card: Card) => void;
}

export const initialState: InitialState = {
  cards,
  addCard: noop,
  insertCard: noop,
  removeCard: noop,
  updateCard: noop
}

const cardsContext = React.createContext(initialState);
cardsContext.displayName = 'CardsState';

const useCardsContext = () => {
  return useContext(cardsContext);
}

export const { Provider: CardsContextProvider } = cardsContext;

export default useCardsContext;