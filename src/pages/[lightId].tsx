import useSWR from "swr";
import { useRouter } from "next/router";
import { URLS } from "../lib/constants";
import { fetcherWithConfig } from "../lib/fetcher";
import Link from "next/link";

export default function LightPage() {
  const { query } = useRouter();
  const { data, isLoading } = useSWR(
    query?.lightId ? [URLS.GET_LIGHTS, query.lightId] : null,
    fetcherWithConfig
  );

  return (
    <div>
      <Link href="/">
        <span>Volver</span>
      </Link>
      {!isLoading && data && (
        <>
          <h1>Holi, ID {data.id}</h1>
          <p>On: {data.state.on ? "Yes" : "No"}</p>
          <p>Brightness: {data.state.bri}</p>
          <p>Hue: {data.state.hue}</p>
          <p>Saturation: {data.state.sat}</p>
        </>
      )}
    </div>
  );
}
