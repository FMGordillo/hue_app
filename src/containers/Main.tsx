import Link from "next/link";
import Toggle from "../components/Toggle";
import { Light, LightContainer, LightsContainer } from "./Main.styled";

export default function MainContainer({ data, isLoading, handleLightClick }) {
  return (
    <div>
      <section>
        <h1>Current lights</h1>
        <LightsContainer>
          {!isLoading &&
            data?.map((light) => (
              <LightContainer key={light.id}>
                <Link href={`/${light.id}`}>
                  <Light>
                    {light.id} ({light.state.on ? "On" : "Off"})
                  </Light>
                </Link>
                <Toggle
                  inputProps={{
                    name: light.id,
                    checked: light.state.on,
                    onChange: () =>
                      handleLightClick({ id: light.id, on: !light.state.on }),
                  }}
                />
              </LightContainer>
            ))}
        </LightsContainer>
      </section>
    </div>
  );
}
