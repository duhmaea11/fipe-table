import { httpClient } from "@/config/axios";
import { BrandInterface } from "@/interfaces/brand.interface";
import { ModelResultInterface } from "@/interfaces/model.interface";
import {
  PriceTableInterface,
  PriceTableResultInterface,
} from "@/interfaces/price-table.interface";
import { YearInterface } from "@/interfaces/year.interface";

export class FipeService {
  getBrands() {
    return httpClient.get<BrandInterface[]>("carros/marcas");
  }
  getModels(code: string) {
    return httpClient.get<ModelResultInterface>(
      `carros/marcas/${code}/modelos`
    );
  }
  getYears(brand: string, model: string) {
    return httpClient.get<YearInterface[]>(
      `carros/marcas/${brand}/modelos/${model}/anos`
    );
  }
  getValue(params: PriceTableInterface) {
    const { brand, model, year } = params;

    return httpClient.get<PriceTableResultInterface>(
      `carros/marcas/${brand}/modelos/${model}/anos/${year}`
    );
  }
}
