import React, { PropsWithChildren, FC } from "react";

type CardProps = PropsWithChildren<FC> & {
  Details: FC<{ details: string }>;
  Title: FC<{ title: string }>
  Image: FC<{ src: string; alt?: string }>
}

const Details: CardProps['Details'] = ({ details = "" }) => {
  return <p>{details}</p>
}

const Title: CardProps['Title'] = ({ title = "" }) => {
  return <h3>{title}</h3>
}

const Image: CardProps['Image'] = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
}


const Card:CardProps = ({children}) => {
  return <article className="flex flex-col gap-2">
    {children}
  </article>;
}

Card.Image = Image;
Card.Details = Details;
Card.Title = Title;

export default Card;