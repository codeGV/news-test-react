import { ApiService } from "./api.service";

const baseUrl = "https://newsapi.org/v2/";

// test api key, use own key.
const apikey = "ef8afc36d8fd44c585f4dcc60d7cbb99";

export const getNews = (country: string,text = "") => {
  return ApiService.get(
    baseUrl + `top-headlines?q=${text}&country=${country}&apiKey=${apikey}`
  );
};

