import React, { useState } from "react";
import firstLetterIsUppercase from "@/helpers/firstLetterIsUppercase.helper";
import { Container, Content, Title, Text, FormGroup, Input } from "./styles";

const FirstLetterValidation: React.FC = () => {
  const [value, setValue] = useState("");
  const isUpperCase = String(firstLetterIsUppercase(value));

  return (
    <Container>
      <Title>Valida primeira letra</Title>

      <FormGroup>
        <Input
          type="text"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </FormGroup>

      <Content>
        <Title>Output</Title>
        <Text>{isUpperCase}</Text>
      </Content>
    </Container>
  );
};

export default FirstLetterValidation;
