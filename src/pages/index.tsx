import { useRouter } from "next/router";
import AppHead from "@/components/common/app-head";
import {
  Container,
  Content,
  Title,
  Text,
  Card,
} from "@/styles/pages/home.page";
import { APP_MODULES_ITEMS } from "@/constants/modules.contant";
import { useEffect } from "react";
import { priceTableActions } from "@/store/reducers/price-table.reducer";
import {
  PriceTableInterface,
  PriceTableResultInterface,
} from "@/interfaces/price-table.interface";

const Home: React.FC = () => {
  const router = useRouter();
  const modules = APP_MODULES_ITEMS.map((item, index) => {
    const isPair = index % 2 == 0;
    const direction = isPair ? "Left" : "Right";

    return {
      ...item,
      className: `animate__animated animate__fadeIn${direction}`,
    };
  });

  const goToModule = (route: string) => router.push(route);

  useEffect(() => {
    priceTableActions.setForm({} as PriceTableInterface);
    priceTableActions.setResult({} as PriceTableResultInterface);
  }, []);
  return (
    <>
      <AppHead title="Bem vindo" />

      <Container>
        <Title>Bem vindo</Title>
        <Text>Selecione o modulo para uso</Text>

        <Content>
          {modules.map((item, index) => (
            <Card
              key={index}
              className={item.className}
              onClick={() => goToModule(item.homeURL)}
            >
              {item.label}
            </Card>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default Home;
