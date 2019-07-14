/* eslint-disable no-unused-vars */
import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  return (
    <div>
      {robots.map((description, i) => {
        return (
          <Card
            key={i}
            description={robots[i].description}
            image={robots[i].image}
            price={robots[i].price}
            city={robots[i].city}
            bairro={robots[i].bairro}
            link={robots[i].link}
            details={robots[i].details}
          />
        );
      })}
    </div>
  );
};

export default CardList;
