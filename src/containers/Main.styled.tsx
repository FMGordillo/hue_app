import styled from "@emotion/styled";

export const LightsContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Light = styled.div``;

export const LightContainer = styled.li`
  position: relative;
  display: flex;
  width: 80px;
  height: 80px;
  padding: 8px;
  background-color: #00000011;
  list-style: none;

  & > a > div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  & > label {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &:hover {
    background-color: #00000044;
  }
`;
