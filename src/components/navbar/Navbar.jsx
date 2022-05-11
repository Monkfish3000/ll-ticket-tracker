import { StyledNavbar, Logo } from "./Styles";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <StyledNavbar>
      <Logo src={logo} alt="" />
    </StyledNavbar>
  );
}
