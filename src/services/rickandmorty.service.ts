import { HttpClient } from "@/config/axios";
import { API_MODULES_TYPES } from "@/config/axios/@constants/modules-types.constant";

export class RickAndMortyService {
  private httpClient = HttpClient(API_MODULES_TYPES.rickAndMortyApi);

  getAllCharacters() {
    return this.httpClient.get("/character");
  }
}
