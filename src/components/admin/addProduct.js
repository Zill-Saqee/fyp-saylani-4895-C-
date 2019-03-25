import React, { Component } from 'react';
import { ButtonContainer } from '../Button';
import { storage } from '../firebase';
import { ProductConsumer } from '../../context';
import axios from "axios";

export default class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state={
          image:null,
          url:'',
          progress:null,
          status:false
        }
      }
      handleChange=(e)=>{
          if(e.target.files[0]){
            const image=e.target.files[0];
            const uploadTask=storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',(snapshot)=>{
              //progress
              const progress=Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*85);
              this.setState({progress:progress,status:true});
            },(error)=>{
              //error
              console.log(error); 
            },()=>{
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                  this.setState({url:url,progress:100});
                })
            }
          )

      }}
    check=(e)=>{
        console.log(e.target.files[0]);
        
    }
      
      default=()=>{
        this.setState(()=>{
            return ({
              image:null,
              url:'',
              progress:null,
              status:false
            });
        });
        document.getElementById("name").value="";
        document.getElementById("price").value="";
        document.getElementById("manufacturer").value="";
        document.getElementById("info").value="";
        document.getElementById("img").value="";
      }
    
      addProduct=(e) => {
        e.preventDefault();
        let name=document.getElementById("name").value;
        let price=document.getElementById("price").value;
        let manufacturer=document.getElementById("manufacturer").value;
        let info=document.getElementById("info").value;
        let img=this.state.url;
        if(name !== '' && price !==''&& price>0 && manufacturer !=='' && info!=='' && img !==''){
          const product={
            product_name:name,
            product_price:price,
            manufacturer:manufacturer,
            product_info:info,
            product_image:img
          }
          axios.post('http://localhost:4000/business/add',{data:product})
            .then(res => {
              console.log(res);
              this.default();
              alert("product added successfully");
              localStorage.setItem("reloadApp","yes");
            });
        }
        else {
          alert("no product added");
        }
      }
    
  render() {
    return (
        <ProductConsumer>
            {
                value=>{
                return (<div className='container mt-5 col-lg-8'>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-4 col-lg-6 ">
                      <label htmlFor="name">Name:-</label>
                      <input type="text" className="form-control" id="name" maxLength={10} />
                    </div>
                    <div className="form-group col-md-4 col-lg-6">
                      <label htmlFor="price">Price</label>
                      <input type="number" className="form-control"  id="price" min="1" max="9999999"
                          onInput={(e)=> {
                            if (e.target.value.length > 7) {
                                e.target.value = e.target.value.slice(0,7); 
                            }
                        }}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4 col-lg-6">
                      <label htmlFor="madeBy">Made By</label>
                      <input type="text" maxLength={14} className="form-control"  id="manufacturer" />                
                    </div>
                    
                    <div className="form-group col-md-4 col-lg-6">
                        <label htmlFor="img">Image(200x200)</label>
                        <input type="file" className="form-control" accept="image/*" id="img" onChange={this.handleChange} />  
                        { this.state.status && <progress value={this.state.progress} max='100' /> }            
                    </div>
                  </div>
                  <div className='form-row'>
                    <div className="form-group col-md-8 col-lg-12">
                        <label htmlFor="info">Info</label>
                        <input type="text" className="form-control"  id="info" />
                      </div>
                  </div>
                  {/* <button onClick={(e)=>{ var res=this.addProduct(e);if(res==true){value.update()}}}>Add Product</button> */}
                  <ButtonContainer onClick={(e)=>{ this.addProduct(e)}}>Add Product</ButtonContainer>
              </form>
                </div>)}
            }
        </ProductConsumer>
    )
  }
}
