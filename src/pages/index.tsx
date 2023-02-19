import axios from "axios";
import useSWR from "swr";
import MainContainer from "../containers/Main";
import { URLS } from "../lib/constants";
import { fetcher } from "../lib/fetcher";

export default function AppPage() {
  const { data, isLoading, mutate } = useSWR(URLS.GET_LIGHTS, fetcher);

  const handleLightClick = async ({ id, on }) => {
    try {
      await axios.put(URLS.GET_LIGHT(id), {
        id,
        on,
      });
      mutate();
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <MainContainer
      data={data}
      isLoading={isLoading}
      handleLightClick={handleLightClick}
    />
  );
}
