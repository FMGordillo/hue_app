import styled from "@emotion/styled";

const Container = styled.label`
  display: flex;
  gap: 4px;
  justify-items: center;

  & > span {
    align-self: center;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Input = styled.input`
  width: 200px;
  cursor: ew-resize;
`;

export default function CustomSlider({ field, form, ...props }) {
  const percentage = ((Number(field.value) / props.max) * 100).toFixed(0);
  return (
    <Container>
      <Label>
        <span>{props.label}</span>
        <Input type="range" {...field} {...props} />
      </Label>
      <span>
        Current value: {percentage}% ({field.value})
      </span>
    </Container>
  );
}
