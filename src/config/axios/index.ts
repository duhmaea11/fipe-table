import { API_MODULES_TYPES } from "./@constants/modules-types.constant";
import { rickAndMortyApi } from "./modules/rickMortyApi";
import { fipeApi } from "./modules/fipeApi";

export function HttpClient(moduleId = API_MODULES_TYPES.fipeApi) {
  const modules = {
    [API_MODULES_TYPES.fipeApi]: fipeApi,
    [API_MODULES_TYPES.rickAndMortyApi]: rickAndMortyApi,
  };

  return modules[moduleId];
}
