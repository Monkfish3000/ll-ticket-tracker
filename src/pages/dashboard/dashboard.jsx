import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../login/Styles";
import { Auth } from "aws-amplify";
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
      <Button onClick={handleLogOut}>Sign Out</Button>
    </>
  );
}
