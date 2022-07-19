import React, { useEffect, useState } from "react";
import { RickAndMortyService } from "@/services/rickandmorty.service";
import { Container, Title, Content, Card, Image, Text, Button } from "./styles";

const FormartJson: React.FC = () => {
  const rickAndMortyService = new RickAndMortyService();
  const [characters, setCharacters] = useState([]);

  const viewOnly = [
    "Rick Sanchez",
    "Morty Smith",
    "Summer Smith",
    "Beth Smith",
    "Jerry Smith",
  ];

  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = async () => {
    try {
      const { data } = await rickAndMortyService.getAllCharacters();
      setCharacters(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredCharacters = characters
    .filter(({ name }) => viewOnly.some((item) => item === name))
    .map((characters) => ({
      nome: characters.name,
      avatar: characters.image,
      genero: characters.gender,
      especie: characters.species,
    }));

  const printFormart = () => console.table(filteredCharacters);

  return (
    <Container>
      <Title>Formatar JSON</Title>

      <Content>
        {filteredCharacters.map((item, index) => (
          <Card key={index}>
            <Image src={item.avatar} />

            <Text>{item.nome}</Text>
            <Text>{item.genero}</Text>
            <Text>{item.especie}</Text>
          </Card>
        ))}
      </Content>

      <Button onClick={printFormart}>Exibir no console</Button>
    </Container>
  );
};

export default FormartJson;
