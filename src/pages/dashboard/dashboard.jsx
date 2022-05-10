import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "../login/Styles";
import { Auth } from "aws-amplify";
import Navbar from "../../components/navbar/Navbar";
import * as ROUTES from "../../constants/routes";

export default function Dashboard() {
  const navigate = useNavigate();
  const username = "monkfish";

  const handleLogOut = async () => {
    try {
      await Auth.signOut();
      navigate(ROUTES.LOGIN);
    } catch (error) {
      console.log(error);
    }
  };

  const handleResendCode = async () => {
    try {
      await Auth.resendSignUp(username);
      console.log("Code sent");
    } catch (error) {
      console.log(error);
    }
  };
  const handleConfirm = async () => {};

  return (
    <>
      <Navbar />
      <Button onClick={handleLogOut}>Sign Out</Button>
      <Button onClick={handleResendCode}>Resend Confirmation Code</Button>
      <Button onClick={handleConfirm}>Confirm User</Button>
    </>
  );
}
