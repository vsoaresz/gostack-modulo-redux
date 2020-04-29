import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Container, Cart } from "./styles";

import { MdShoppingBasket } from "react-icons/md";

import logo from "../../assets/images/logo.svg";

class Header extends Component {
  render() {
    const { cart } = this.props;
    return (
      <Container>
        <Link to="/">
          <img src={logo} alt="Rocketshoes" />
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span>{cart.length} itens</span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Container>
    );
  }
}

export default connect((state) => ({
  cart: state.cart,
}))(Header);
