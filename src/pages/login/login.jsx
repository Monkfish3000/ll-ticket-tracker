/* eslint-disable no-unreachable */
import React from "react";
import { Container, Input, Button, FormContainer } from "./Styles";

export default function Login() {
  return (
    <>
      <Container>
        <FormContainer>
          <form>
            <Input type="text" />
            <Input type="password" />
            <Button type="submit">Login</Button>
          </form>
        </FormContainer>
      </Container>
    </>
  );
}
