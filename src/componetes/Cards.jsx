import React from "react";
import { CardContainer } from "../Style/Style";
const Card = ({ pokemon, loading, infoPokemon }) => {
  // console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <CardContainer
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <h3>{item.name}</h3>
              </CardContainer>
            </>
          );
        })
      )}
    </>
  );
};
export default Card;
