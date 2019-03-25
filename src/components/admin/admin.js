import React, { Component } from 'react';
import { ButtonContainer } from '../Button';
import {Link} from 'react-router-dom';
import Title from '../Title';

export default class Admin extends Component {
  render() {
    return (
      <div className="admin container pt-1 text-center pb-5">
          <Title name="welcome" title="admin"/>
          <Link to='/admin/add'>
              <ButtonContainer>Add Product</ButtonContainer>
          </Link>
          <Link to='/admin/remove'>
              <ButtonContainer remove>Remove Product</ButtonContainer>          
          </Link>
      </div>
    )
  }
}
