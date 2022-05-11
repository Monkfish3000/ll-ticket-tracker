/* eslint-disable no-unreachable */
import Login from "./pages/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Dashboard from "./pages/dashboard/dashboard";
import {
  Authenticator,
  AmplifyProvider,
  Theme,
  useTheme,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./styles.css";
import { FaFileExport } from "react-icons/fa";

export default function App() {
  const formFields = {
    signIn: {
      username: {
        labelHidden: true,
        placeholder: "",
        isRequired: true,
        label: "Email:",
      },
      password: {
        placeholder: "",
      },
    },
  };

  return (
    <>
      <Authenticator
        hideSignUp={true}
        hideSignIn={true}
        formFields={formFields}
      >
        <Router>
          <Routes>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
          </Routes>
        </Router>
      </Authenticator>
    </>
  );
}
