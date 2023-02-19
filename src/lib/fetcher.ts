import axios from "axios";

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export const fetcherWithConfig = ([url, id]: [url: string, id: string]) =>
  axios.get(`${url}${id}`).then((res) => res.data);
