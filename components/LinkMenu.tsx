import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  box-shadow: 0px 5px 10px 0px #aaa;
  width: 100%;
  background: #fff;
  color: #000;
  opacity: 0.85;
  z-index: 12;
  font-size: 62.5%;
  h1 {
    margin: 0;
  }
  @media (max-width: 768px) {
    opacity: 0.95;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  max-width: 1200px;
  width: 90%;
  margin: auto;
  @media (max-width: 768px) {
    display: block;
    position: relative;
    height: 64px;
  }
`;

const HamburgerLines = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 23px;
    width: 35px;
    position: absolute;
    top: 5px;
    left: 20px;
    z-index: 2;
  }
`;

const Line = styled.span`
  @media (max-width: 768px) {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: #333;
  }
`;

const MenuItems = styled.ul`
  order: 2;
  display: flex;
  @media (max-width: 768px) {
    padding-top: 100px;
    background: #fff;
    height: 100vh;
    max-width: 300px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 50px;
    transition: transform 0.5s ease-in-out;
    box-shadow: 5px 0px 10px 0px #aaa;
  }
`;

const MenuItem = styled.li`
  list-style: none;
  margin-left: 1.5rem;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    font-weight: 500;
  }
  @media (max-width: 500px) {
    margin-bottom: 2.5rem;
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

const MenuItemLink = styled.a`
  text-decoration: none;
  color: #444;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #117964;
    transition: color 0.3s ease-in-out;
  }
`;

const Logo = styled.h1`
  order: 1;
  font-size: 2.3rem;
  margin-left: 3rem;
  /* margin-bottom: 0.5rem; */
  @media (max-width: 768px) {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2rem;
    /* margin-bottom: 0.5rem; */
  }
  @media (max-width: 500px) {
    position: absolute;
    /* margin-bottom: 0.5rem; */
    top: 6px;
    right: 15px;
    font-size: 3rem;
  }
`;

const LinkMenu: React.FC = () => {
  return (
    <Navbar className="navbar">
      <NavbarContainer className="navbar-container container">
        <HamburgerLines className="hamburger-lines">
          <Line className="line line1"></Line>
          <Line className="line line2"></Line>
          <Line className="line line3"></Line>
        </HamburgerLines>
        <MenuItems>
          <MenuItem>
            <MenuItemLink href="#home">Home</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="#about">About</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="#food">Category</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="#food-menu">Menu</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="#testimonials">Testimonial</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="#contact">Contact</MenuItemLink>
          </MenuItem>
        </MenuItems>
        <Logo className="logo">RS</Logo>
      </NavbarContainer>
    </Navbar>
  );
};

export default LinkMenu;
