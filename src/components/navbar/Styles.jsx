import styled from "@emotion/styled";
import colors from "../../utils/colors";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const StyledNavbar = styled.nav`
  background-color: ${colors.PrimaryPurple};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.5rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: ${colors.PrimaryPurple};
  }
`;

export const NavLinkBorder = styled(NavLink)`
  border-left: 1mm groove rgba(127, 17, 224, 0.9);
  border-right: 1mm ridge rgba(127, 17, 224, 0.9);
  height: 33%;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 758px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.button`
  border-radius: 2px;
  background-color: #fff;
  padding: 10px 22px;
  color: ${colors.PrimaryPurple};
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${colors.SecondaryPurple};
    color: #fff;
  }
`;

export const Logo = styled.img`
  height: 75px;
`;
