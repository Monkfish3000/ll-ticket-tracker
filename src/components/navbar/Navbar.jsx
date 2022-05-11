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
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router";
import * as ROUTES from "../../constants/routes";

export default function Navbar() {
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      await Auth.signOut();
      navigate(ROUTES.LOGIN);
    } catch (error) {
      console.log(error);
    }
  };

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
