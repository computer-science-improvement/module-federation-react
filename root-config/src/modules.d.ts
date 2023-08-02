///<reference types="react" />

type Card = Partial<{ name: string; id: string }>

type InitialState = {
  cards: Card[];
  addCard: (card: Card) => void;
  updateCard: (id: string, card: Card) => void;

  removeCard: (id: string) => void;
  insertCard: (order: number, card: Card) => void;
};


declare module "state/CardsProvider" {
  const CardsProvider: React.ComponentType;

  export default CardsProvider;
}

declare module "state/cardsContext" {
  const useCardsContext: () => InitialState;

  export default useCardsContext;
}

declare module "card/Card" {
  const CardsProvider: React.ComponentType & {
    Details: React.ComponentType<{details: string}>;
    Image: React.ComponentType;
    Title: React.ComponentType<{title: string}>;
  };

  export default CardsProvider;
}