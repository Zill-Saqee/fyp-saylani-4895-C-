import React, { Component } from 'react';
import RemoveItem from './removeItem';

export default class RemoveList extends Component {
  render() {
    return (
        <div className="container-fluid">
                {
                    cart.map((item)=>{
                        return <RemoveItem key={item.id} item={item} value={value}/>
                    })
                }
        </div>
    )
  }
}
