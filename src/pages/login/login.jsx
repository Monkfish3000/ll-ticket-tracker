import React, { useEffect } from "react";
import { Container, Input, Button, FormContainer } from "./Styles";
import { Auth } from "aws-amplify";

export default function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.title = "Mf";
  }, []);

  return (
    <Container>
      <FormContainer>
        <form onSubmit={handleLogin}>
          <Input
            type="text"
            onChange={({ target }) => console.log(target.value)}
          />
          <Input
            type="password"
            onChange={({ target }) => console.log(target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </FormContainer>
    </Container>
  );
}
