import React, { Component } from 'react';
import Title from '../Title';
import CartColumn from './cartColumns';
import EmptyCart from './emptyCart';
import {ProductConsumer} from "../../context";
import CartList from './cartList';
import CartTotals from './cartTotals';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
            {value => {
              const {cart} =value;
              if(cart.length>0){
                return(
                    <React.Fragment>
                      <Title name="your" title="cart" />
                      <CartColumn />
                      <CartList value={value}/>
                      <CartTotals value={value} />
                    </React.Fragment>
                )
              }
              else {
                return (
                  <EmptyCart />
                )
              }
            }}
        </ProductConsumer>  
      </section>
    )
  }
}
