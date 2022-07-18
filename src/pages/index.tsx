import { useRouter } from "next/router";
import AppHead from "@/components/common/app-head";
import { Container } from "@/styles/pages/home.page";
import PriceTableForm from "@/components/price-table/price-table-form";
import { PriceTableInterface } from "@/interfaces/price-table.interface";
import { FipeService } from "@/services/fipe.service";
import { priceTableActions } from "@/store/reducers/price-table.reducer";

const Home: React.FC = () => {
  const router = useRouter();
  const fipeService = new FipeService();

  const onSubmit = async (value: PriceTableInterface) => {
    try {
      const { data } = await fipeService.getValue(value);
      priceTableActions.setResult(data);
      router.push("/price-result");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <AppHead title="Consulta" />

      <Container>
        <PriceTableForm onSubmit={onSubmit} />
      </Container>
    </>
  );
};

export default Home;
