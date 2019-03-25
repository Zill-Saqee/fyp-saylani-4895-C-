import React, { Component } from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.png";
import { ButtonContainer } from './Button';

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper>
          <nav className="navbar navbar-dark px-sm-5">
            {
                // https://www.iconfinder.com/icons/111054/bag_shopping_icon;
            }
            <img src={logo} alt="logo" className="navbar-brand"/>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-1"> 
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </li>
            </ul>
            <Link to="/cart">
                <ButtonContainer className="ml-auto">
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
        </nav>
      </NavWrapper>
    )
  }
}

const NavWrapper=styled.nav`
background:var(--mainBlue);
.nav-Link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform:capitalize;

}
`

 