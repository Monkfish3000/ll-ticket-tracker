import styled from "@emotion/styled";
import colors from "../../utils/colors";

export const Container = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 100vh;
  height: 100vh;
`;

export const FormContainer = styled.div`
  height: 20%;
  width: 35%;
`;

export const Input = styled.input`
  color: ${colors.PrimaryBlack};
  margin: 10px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  font-size: 16px;

  &:focus {
    outline-color: ${colors.PrimaryPurple};
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px;
  color: #fff;
  background-color: ${colors.PrimaryPurple};
  border: none;
  font-size: 16px;

  border-radius: 2px;
  cursor: pointer;

  &:active {
    opacity: 0.9;
  }
`;
