import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Hero } from "./Styles";
import { Auth } from "aws-amplify";
import Navbar from "../../components/navbar/Navbar";
import * as ROUTES from "../../constants/routes";

export default function Dashboard() {
  const navigate = useNavigate();
  

  const handleLogOut = async () => {
    try {
      await Auth.signOut();
      navigate(ROUTES.LOGIN);
    } catch (error) {
      console.log(error);
    }
  };


 

  return (
    <>
      <Navbar />
      <Hero>
        <h1>I Love You Jade!</h1>
      </Hero>
      <Button onClick={handleLogOut}>Sign Out</Button>
      <Button onClick={() => {}}>Resend Confirmation Code</Button>
      <Button onClick={() => {}}>Confirm User</Button>
    </>
  );
}
