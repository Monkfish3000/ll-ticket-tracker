import {
  StyledNavbar,
  NavLink,
  NavLinkBorder,
  Bars,
  NavMenu,
  NavBtnLink,
  Logo,
} from "./Styles";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const handleSignout = () => {};

  return (
    <StyledNavbar>
      <NavLink to="/">
        <Logo src={logo} alt="" />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/" activeStyle>
          About
        </NavLink>
        <NavLinkBorder to="/" activeStyle>
          Calendar
        </NavLinkBorder>
        <NavLink to="/" activeStyle>
          Contact
        </NavLink>
        <NavBtnLink onClick={handleSignout}>Sign Out</NavBtnLink>
      </NavMenu>
    </StyledNavbar>
  );
}
