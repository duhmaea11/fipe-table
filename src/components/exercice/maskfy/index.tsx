import maskfy from "@/helpers/maskfy.helper";
import React, { useState } from "react";
import { Container, Content, Title, Text, FormGroup, Input } from "./styles";

const Maskfy: React.FC = () => {
  const [value, setValue] = useState("");

  const maskedValue = maskfy(value);

  return (
    <Container>
      <Title>Máscara</Title>

      <FormGroup>
        <Input
          type="number"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </FormGroup>

      <Content>
        <Title>Output</Title>
        <Text>{maskedValue}</Text>
      </Content>
    </Container>
  );
};

export default Maskfy;
