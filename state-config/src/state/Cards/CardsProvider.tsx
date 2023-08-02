import React, { PropsWithChildren, FC } from 'react';
import { useCardsValues } from "./cardsContext.util";
import { CardsContextProvider } from "./cardsContext";

const CardsProvider: PropsWithChildren<FC> = ({ children }) => {
  const value = useCardsValues();

  return (<CardsContextProvider value={value}>
    {children}
  </CardsContextProvider>)
}
export default CardsProvider