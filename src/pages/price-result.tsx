import store from "@/store";
import { Container, Content, Text, Title } from "@/styles/pages/priceResults";

const PriceResults: React.FC = () => {
  const state = store.getState();
  const { result } = state.priceTable;
  const vehicleDetail = `${result.Marca} ${result.Modelo} ${result.AnoModelo}`;

  return (
    <Container>
      <Title>Tabela Fipe: Preço {vehicleDetail}</Title>

      <Content>{result.Valor}</Content>

      <Text>Este é o preço de compra do veiculo</Text>
    </Container>
  );
};

export default PriceResults;
