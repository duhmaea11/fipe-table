import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FipeService } from "@/services/fipe.service";
import { YearInterface } from "@/interfaces/year.interface";
import { ModelInterface } from "@/interfaces/model.interface";
import { BrandInterface } from "@/interfaces/brand.interface";
import { PriceTableInterface } from "@/interfaces/price-table.interface";
import Autocomplete, {
  AutocompleteHandle,
} from "@/components/common/forms/autocomplete";
import {
  Container,
  Title,
  Text,
  Form,
  FormGroup,
  Button,
  Label,
} from "./styles";

interface PriceTableFormProps {
  initialState?: PriceTableInterface;
  onSubmit: (data: PriceTableInterface) => void;
}

const PriceTableForm: React.FC<PriceTableFormProps> = (props) => {
  const { onSubmit, initialState } = props;
  // #region Services
  const fipeService = new FipeService();
  // #endregion Services

  // #region useState
  const [years, setYears] = useState([]);
  const [brands, setBrands] = useState([]);
  const [models, setModels] = useState([]);
  const [formIsValid, setFormIsValid] = useState(false);
  const [form, setForm] = useState({} as PriceTableInterface);
  // #endregion useState

  // #region useRef
  const autoCompleteYear = useRef<AutocompleteHandle>(null);
  const autoCompleteBrand = useRef<AutocompleteHandle>(null);
  const autoCompleteModel = useRef<AutocompleteHandle>(null);
  // #endregion useRef

  // #region hook-form
  const priceTableForm = yup.object().shape({
    year: yup.string().required("Selecione o ano"),
    brand: yup.string().required("Selecione a marca"),
    model: yup.string().required("Selecione o modelo"),
  });

  const { watch, setValue, getValues, handleSubmit } =
    useForm<PriceTableInterface>({ resolver: yupResolver(priceTableForm) });
  // #endregion hook-form

  // #region useEffect
  useEffect(() => {
    onInit();
  }, []);

  useEffect(() => {
    const subscription = watch((data) => setForm(data as PriceTableInterface));
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    checkFormValidation();
  }, [form]);
  // #endregion useEffect

  //#region requests
  const getBrands = async () => {
    try {
      const { data } = await fipeService.getBrands();
      setBrands(data);
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
  //#endregion requests

  //#region methods
  const onInit = async () => {
    await getBrands();
    initForm();
  };

  const initForm = async () => {
    const hasInitialState = initialState && !!Object.keys(initialState).length;
    if (!hasInitialState) return;

    setValue("brand", initialState.brand);
    autoCompleteBrand.current?.setInitialState(initialState.brand);

    await getModels();
    setValue("model", initialState.model);
    autoCompleteModel.current?.setInitialState(initialState.model);

    await getYears();
    setValue("year", initialState.year);
    autoCompleteYear.current?.setInitialState(initialState.year);
  };
  const checkFormValidation = async () => {
    try {
      await priceTableForm.validate(form);
      setFormIsValid(true);
    } catch (error) {
      setFormIsValid(false);
    }
  };

  const onSelectBrand = (data: BrandInterface) => {
    setValue("year", "");
    setValue("model", "");
    setValue("brand", String(data.codigo));

    autoCompleteYear.current?.setCustomValue("");
    autoCompleteModel.current?.setCustomValue("");

    getModels();
  };

  const onSelectModel = (data: ModelInterface) => {
    setValue("year", "");
    setValue("model", String(data.codigo));
    autoCompleteYear.current?.setCustomValue("");

    getYears();
  };

  const onSelectYear = (data: YearInterface) => {
    setValue("year", String(data.codigo));
  };
  //#endregion methods

  return (
    <Container>
      <Title>Tabela Fipe</Title>
      <Text>Consulte o Valor de um veiculo de forma gratuita</Text>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Marca</Label>

          <Autocomplete
            items={brands}
            labelKey="nome"
            valueKey="codigo"
            ref={autoCompleteBrand}
            onSelect={onSelectBrand}
          />
        </FormGroup>

        <FormGroup>
          <Label>Modelo</Label>

          <Autocomplete
            items={models}
            labelKey="nome"
            valueKey="codigo"
            ref={autoCompleteModel}
            onSelect={onSelectModel}
          />
        </FormGroup>

        <FormGroup>
          <Label>Ano</Label>
          <Autocomplete
            items={years}
            labelKey="nome"
            valueKey="codigo"
            ref={autoCompleteYear}
            onSelect={onSelectYear}
          />
        </FormGroup>

        <Button type="submit" disabled={!formIsValid}>
          Consultar preço
        </Button>
      </Form>
    </Container>
  );
};

export default PriceTableForm;
