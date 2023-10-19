import React from "react";
import {
  RightContentImage,
  RightContentParagraph,
  TypeContainer,
  TypeGroup,
  BaseStatContainer,
  RightContentTitle,
} from "../Style/Style";

const Pokeinfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <RightContentTitle>{data.name}</RightContentTitle>
          <RightContentImage
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <TypeContainer>
            {data.types.map((type) => {
              return (
                <TypeGroup key={type.slot}>
                  <h2>{type.type.name}</h2>
                </TypeGroup>
              );
            })}
          </TypeContainer>
          <BaseStatContainer>
            {data.stats.map((poke) => {
              return (
                <RightContentParagraph key={poke.stat.name}>
                  {poke.stat.name}:{poke.base_stat}
                </RightContentParagraph>
              );
            })}
          </BaseStatContainer>
        </>
      )}
    </>
  );
};

export default Pokeinfo;
