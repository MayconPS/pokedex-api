import React from "react";
import Card from "./componetes/Cards.jsx";
import Pokeinfo from "./componetes/Pokeinfo.jsx";
import Welcome from "./componetes/Welcome.jsx";
import {
  StyledButton,
  RightContent,
  LeftContent,
  ButtonGroup,
  Container,
  ContainerInput,
  StyledInput,
} from "./Style/Style.jsx";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [searchedPokemon, setSearchedPokemon] = useState([]);

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };
  const [showWelcome, setShowWelcome] = useState(true);

  const hideWelcome = () => {
    setShowWelcome(false);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchPokemon = async () => {
    if (searchTerm.trim() === "") {
      return;
    }
    setLoading(true);
    const searchUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`;
    try {
      const response = await axios.get(searchUrl);
      setSearchedPokemon([response.data]);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao pesquisar o Pokémon:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    pokeFun();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return (
    <>
      {showWelcome ? (
        <Welcome onStartClick={hideWelcome} />
      ) : (
        <>
          <ContainerInput>
            <StyledInput
              type="text"
              placeholder="Pesquisar por nome"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <StyledButton onClick={searchPokemon}>Pesquisar</StyledButton>
          </ContainerInput>
          <Container>
            <LeftContent>
              <Card
                pokemon={
                  searchedPokemon.length > 0 ? searchedPokemon : pokeData
                }
                loading={loading}
                infoPokemon={(poke) => setPokeDex(poke)}
              />

              <ButtonGroup>
                {prevUrl && (
                  <StyledButton
                    onClick={() => {
                      setPokeData([]);
                      setUrl(prevUrl);
                    }}
                  >
                    Voltar
                  </StyledButton>
                )}

                {nextUrl && (
                  <StyledButton
                    onClick={() => {
                      setPokeData([]);
                      setUrl(nextUrl);
                    }}
                  >
                    Mais
                  </StyledButton>
                )}
              </ButtonGroup>
            </LeftContent>
            <RightContent>
              <Pokeinfo data={pokeDex} />
            </RightContent>
          </Container>
        </>
      )}
    </>
  );
}

export default App;
