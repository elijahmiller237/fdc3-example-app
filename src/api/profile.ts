import axios from "axios";
import { ProfileData } from "../types";
import { exampleProfileData } from "../example-data";

const url = "https://twelve-data1.p.rapidapi.com";
const PROFILE_PATH = "/profile";

export const fetchProfileData = async (
  ticker: string
): Promise<ProfileData> => {
  /* const response = await axios<ProfileData>({
    method: "get",
    url: PROFILE_PATH,
    baseURL: url,
    params: { symbol: ticker },
    headers: {
      "X-Rapidapi-Host": "twelve-data1.p.rapidapi.com",
      "X-Rapidapi-Key": import.meta.env.VITE_RAPID_API_KEY ?? "",
    },
  });

  return response.data; */
  return exampleProfileData;
};
