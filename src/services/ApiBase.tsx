import axios from "axios";
import { POKE_API } from "../constants/pokemon";
import { IApiConfig } from "../types/types";

export async function doRequest(options: string) {
  const config: IApiConfig = {
    baseURL: `${POKE_API}/${options}`,
    headers: { "Content-Type": "application/json" },
    responseType: "json",
  };

  return axios
    .request(config)
    .then((response: { data: unknown }) => (response ? response.data : null));
}
