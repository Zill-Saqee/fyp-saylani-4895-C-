import React, { Component } from 'react';
import axios from 'axios';

export default class RemoveItem extends Component {
    
    constructor(props){
        super(props);
        this.state={
            reload:true
        }
    }
    removeFromServer(id){
        axios.get("http://localhost:4000/business/delete/"+id)
        .then(()=>{
            console.log("deleted");
            localStorage.setItem("reloadApp","yes");
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  render() {
      const {img,title,price,_id}=this.props.product; 
    return (
        <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2">
            <img src={img} alt="product" className="img-fluid" style={{width:"5rem",height:"5rem"}}/>
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">product :</span>
            {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
            <span className="d-lg-none">price :</span>
            {price}
        </div> 
        <div className="col-10 mx-auto col-lg-2">
            <div className="cart-icon" >
                <i className="fas fa-trash" onClick={()=>{
                    this.removeFromServer(_id);this.props.getData();
                }}></i>
            </div>
        </div>
    </div>
    )
  }
}
