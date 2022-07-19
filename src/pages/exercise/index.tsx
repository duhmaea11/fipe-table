import React from "react";
import { Container, Link } from "@/styles/pages/exercice";
import Maskfy from "@/components/exercice/maskfy";
import UpdateData from "@/components/exercice/update-data";
import FormartJson from "@/components/exercice/formart-json";
import FirstLetterValidation from "@/components/exercice/first-letter-validation";
import AppHead from "@/components/common/app-head";
import { useRouter } from "next/router";

const Exercise: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <AppHead title="Exercicios" />

      <Container>
        <Link onClick={() => router.push("/")}>Voltar para home</Link>
        <Maskfy />
        <FirstLetterValidation />
        <UpdateData />
        <FormartJson />
      </Container>
    </>
  );
};

export default Exercise;
