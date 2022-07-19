import store from "@/store";
import Link from "next/link";
import AppHead from "@/components/common/app-head";
import {
  Container,
  Content,
  Text,
  Title,
} from "@/styles/pages/fipe-table/result";

const FipeTableResult: React.FC = () => {
  const state = store.getState();
  const { result } = state.priceTable;
  const vehicleDetail = `${result.Marca} ${result.Modelo} ${result.AnoModelo}`;

  return (
    <>
      <AppHead title="Resultado" />

      <Container>
        <Title>Tabela Fipe: Preço {vehicleDetail}</Title>
        <Content>{result.Valor}</Content>
        <Text>Este é o preço de compra do veiculo</Text>

        <Link href="/fipe-table">Voltar</Link>
      </Container>
    </>
  );
};

export default FipeTableResult;
