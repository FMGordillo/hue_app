import useSWR from "swr";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { URLS } from "../lib/constants";
import { fetcherWithConfig } from "../lib/fetcher";
import Link from "next/link";
import CustomSlider from "../components/CustomSlider";
import axios from "axios";
import invariant from "tiny-invariant";

export default function LightPage() {
  const { query } = useRouter();
  const { lightId } = query;
  const { data, isLoading } = useSWR(
    lightId ? [URLS.GET_LIGHTS, query.lightId] : null,
    fetcherWithConfig
  );

  const handleSubmit = async (formData: any) => {
    try {
      invariant(typeof lightId === "string", "LightID must be a string");
      await axios.put(URLS.GET_LIGHT(lightId), {
        id: data.id,
        on: data.state.on,
        ...formData,
      });
    } catch (error) {
      console.log("Error sending light data", error);
    }
  };

  return (
    <div>
      <Link href="/">
        <span>Volver</span>
      </Link>
      {!isLoading && data && (
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            sat: data.state.sat,
            bri: data.state.bri,
            hue: data.state.hue,
          }}
        >
          {() => (
            <Form>
              <h1>Holi, ID {data.id}</h1>
              <p>On: {data.state.on ? "Yes" : "No"}</p>
              <Field
                name="bri"
                component={CustomSlider}
                min={1}
                max={100}
                label="Brightness"
              />
              <Field
                name="sat"
                component={CustomSlider}
                min={0}
                max={100}
                label="Saturation"
              />
              <Field
                name="hue"
                component={CustomSlider}
                min={0}
                max={65535}
                label="Hue"
              />
              <input type="submit" value="Update light" />
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
}
