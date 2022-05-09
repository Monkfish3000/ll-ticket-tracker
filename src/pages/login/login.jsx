import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Input, Button, FormContainer } from "./Styles";
import { Auth } from "aws-amplify";
import * as ROUTES from "../../constants/routes";

// M0nkF1shrules

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await Auth.signIn(username, password);
      console.log(user);
      if (user) {
        navigate(ROUTES.DASHBOARD);
      }
    } catch (error) {
      setUsername("");
      setPassword("");
    }
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
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <Input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Button type="submit">Login</Button>
        </form>
      </FormContainer>
    </Container>
  );
}
