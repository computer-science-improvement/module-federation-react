import React, { FC } from 'react';
import useCardsContext from "state/cardsContext"
import Card from "card/Card";
type MainProps = {};

const Main:FC<MainProps> = () => {
  const cardsContextInstance = useCardsContext();
  console.log(cardsContextInstance.cards);
  return <>
    <button onClick={() => cardsContextInstance.addCard({id: new Date().toString(), name: 'sdf'})}>click</button>

    {cardsContextInstance.cards.map((card) => {
      return <Card key={card.id}>
        <Card.Title title={card?.name || ""}/>
        <Card.Details details={card?.name || ""}/>
      </Card>
    })}

  </>
}

export default Main;
