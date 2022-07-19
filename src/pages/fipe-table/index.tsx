import store from "@/store";
import { useRouter } from "next/router";
import AppHead from "@/components/common/app-head";
import { FipeService } from "@/services/fipe.service";
import PriceTableForm from "@/components/fipe-table-form";
import { Container, Link } from "@/styles/pages/fipe-table";
import { priceTableActions } from "@/store/reducers/price-table.reducer";
import { PriceTableInterface } from "@/interfaces/price-table.interface";

const FipeTable: React.FC = () => {
  const router = useRouter();
  const state = store.getState();
  const { form } = state.priceTable;

  const fipeService = new FipeService();

  const onSubmit = async (form: PriceTableInterface) => {
    try {
      const { data } = await fipeService.getValue(form);
      priceTableActions.setForm(form);
      priceTableActions.setResult(data);
      router.push("/fipe-table/result");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <AppHead title="Consulta" />

      <Container>
        <PriceTableForm onSubmit={onSubmit} initialState={form} />
        <Link onClick={() => router.push("/")}>Voltar para Home</Link>
      </Container>
    </>
  );
};

export default FipeTable;
