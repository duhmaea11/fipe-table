import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FipeService } from "@/services/fipe.service";
import { BrandInterface } from "@/interfaces/brand.interface";
import Autocomplete from "@/components/common/forms/autocomplete";
import { PriceTableInterface } from "@/interfaces/price-table.interface";
import {
  Container,
  Title,
  Text,
  Form,
  FormGroup,
  Button,
  Select,
  Option,
  Label,
} from "./styles";
import { ModelInterface } from "@/interfaces/model.interface";

interface PriceTableFormProps {
  onSubmit: (data: PriceTableInterface) => void;
}

const PriceTableForm: React.FC<PriceTableFormProps> = ({ onSubmit }) => {
  const fipeService = new FipeService();

  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);

  const priceTableForm = yup.object().shape({
    brand: yup.string().required("Selecione a marca"),
    model: yup.string().required("Selecione o modelo"),
    year: yup.string().required("Selecione o ano"),
  });

  const { setValue, register, getValues, handleSubmit } =
    useForm<PriceTableInterface>({
      resolver: yupResolver(priceTableForm),
    });

  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = async () => {
    try {
      const { data } = await fipeService.getBrands();
      setBrands(data);
      setValue("brand", "");
    } catch (err) {
      console.error(err);
    }
  };

  const getModels = async () => {
    try {
      const brand = getValues("brand");
      const { data } = await fipeService.getModels(brand);

      setModels(data.modelos);
    } catch (err) {
      console.error(err);
    }
  };

  const getYears = async () => {
    try {
      const brand = getValues("brand");
      const model = getValues("model");
      const { data } = await fipeService.getYears(brand, model);

      setYears(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmitForm = (data: PriceTableInterface) => onSubmit(data);

  const onSelectBrand = (data: BrandInterface) => {
    setValue("brand", String(data.codigo));
    setValue("model", "");
    setValue("year", "");

    getModels();
  };

  const onSelectModel = (data: ModelInterface) => {
    setValue("model", String(data.codigo));
    getYears();
  };

  return (
    <Container>
      <Title>Tabela Fipe</Title>
      <Text>Consulte o Valor de um veiculo de forma gratuita</Text>

      <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <FormGroup>
          <Label>Marca</Label>

          <Autocomplete
            items={brands}
            labelKey="nome"
            onSelect={onSelectBrand}
          />
        </FormGroup>

        <FormGroup>
          <Label>Modelo</Label>

          <Autocomplete
            items={models}
            labelKey="nome"
            onSelect={onSelectModel}
          />

          {/* <Select {...register("model", { onChange: getYears })}>
            <Option value={""} disabled></Option>

            {models.map((item, index) => (
              <Option key={index} value={item.codigo}>
                {item.nome}
              </Option>
            ))}
          </Select> */}
        </FormGroup>

        <FormGroup>
          <Label>Ano</Label>
          <Select {...register("year")}>
            <Option value={""}></Option>

            {years.map((item, index) => (
              <Option key={index} value={item.codigo}>
                {item.nome}
              </Option>
            ))}
          </Select>
        </FormGroup>

        <Button type="submit">Consultar preço</Button>
      </Form>
    </Container>
  );
};

export default PriceTableForm;
