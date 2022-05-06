/* eslint-disable no-unreachable */
import Login from "./pages/login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import Dashboard from "./pages/dashboard/dashboard";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}
