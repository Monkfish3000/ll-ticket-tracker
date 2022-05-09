import styled from "@emotion/styled";
import colors from "../../utils/colors";

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px;
  color: #fff;
  background-color: ${colors.PrimaryPurple};
  border: none;
  font-size: 16px;
  font-family: "Verdana", sans-serif;
  border-radius: 2px;
  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
`;
