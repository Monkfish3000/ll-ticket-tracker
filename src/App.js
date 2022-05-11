/* eslint-disable no-unreachable */
import Login from "./pages/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Dashboard from "./pages/dashboard/dashboard";
import { Authenticator } from "@aws-amplify/ui-react";

export default function App() {
  // TODO protect dashboard route
  const PrivateRoute = ({ children, ...rest }) => {};

  return (
    <>
      <Authenticator>
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
