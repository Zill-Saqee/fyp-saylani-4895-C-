import React,{Component} from 'react';
import Title from '../Title';
import RemoveColumn from './removeColumn';
import RemoveItem from './removeItem';
import axios from 'axios';

class Remove extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
            RemoveItem:false,
            getData:true
         }
    }
    componentDidMount(){    
   
    if(this.state.getData===true){
            this.getData();
            this.setState({
                getData:false
            })
        }
    }
    getData=()=>{
        axios.get('http://localhost:4000/business/')
        .then(json => {
            this.setState({
                RemoveItem:true,
                data:json.data
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() { 
        if(!this.state.RemoveItem){
            return <h5 className="text-center">Loading</h5>
        }
        else {
            return ( 
                <React.Fragment>
                    <Title name="store" title="products" />
                    <RemoveColumn />
                    {
                     this.state.RemoveItem &&  this.state.data.map((product)=>{
                            return(
                                <RemoveItem key={product.id} product={product} getData={()=>this.getData()}/>
                            )
                        }) 
                    }
                </React.Fragment>
             );
        } 
    }
}
 
export default Remove;