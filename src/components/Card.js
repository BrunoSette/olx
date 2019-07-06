import React from "react";

const Card = ({ description, price, bairro, image, city, link, details }) => {
  return (
    <div className="tc grow br3 pa3 ma2 dib bw2 shadow-3 dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5">
      <a href={link} target="_blank">
        <img
          src={image}
          height="200px"
          width="200"
          class="db w-100 br2 br--top"
          alt={description}
        />
      </a>
      <div>
        <p class="f6 lh-copy measure mt2 mid-gray">{description}</p>
        <p class="f2 mv0">R$ {(1000 * price).toLocaleString("pt-br")}</p>
        <p>
          {bairro}, {city}
        </p>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Card;

//
