import updateData from "@/helpers/update-data.helper";
import React from "react";
import { Container, Content, Card, JsonText, Title } from "./styles";

const UpdateData: React.FC = () => {
  const firstObject = { name: "Marcos", country: "Brasil", age: 22 };
  const secondObject = { country: "Japão", age: 33 };

  const result = updateData(firstObject, secondObject);

  const renderJSON = (value: object) => JSON.stringify(value, undefined, 2);
  return (
    <Container>
      <Title>Merge Objetos</Title>

      <Content>
        <Card>
          <JsonText>{renderJSON(firstObject)}</JsonText>
        </Card>
        <Card>
          <JsonText>{renderJSON(secondObject)}</JsonText>
        </Card>
      </Content>

      <Card>
        <JsonText>{renderJSON(result)}</JsonText>
      </Card>
    </Container>
  );
};

export default UpdateData;
