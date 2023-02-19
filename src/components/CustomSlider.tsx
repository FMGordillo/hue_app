import styled from "@emotion/styled";

const Container = styled.label`
  display: flex;
  gap: 4px;
  justify-items: center;

  & > span {
    align-self: center;
  }
`;

export default function CustomSlider({ field, form, ...props }) {
  return (
    <Container>
      <span>{props.label}</span>
      <input type="range" {...field} {...props} />
      <span>Current value: {field.value}</span>
    </Container>
  );
}
