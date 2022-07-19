import React from "react";
import { Container } from "@/styles/pages/exercice";
import Maskfy from "@/components/exercice/maskfy";
import UpdateData from "@/components/exercice/update-data";
import FormartJson from "@/components/exercice/formart-json";
import FirstLetterValidation from "@/components/exercice/first-letter-validation";
import AppHead from "@/components/common/app-head";

const Exercise: React.FC = () => {
  return (
    <>
      <AppHead title="Exercicios" />

      <Container>
        <Maskfy />
        <FirstLetterValidation />
        <UpdateData />
        <FormartJson />
      </Container>
    </>
  );
};

export default Exercise;
