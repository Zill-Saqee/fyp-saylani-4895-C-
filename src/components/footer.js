import React,{Component} from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const style={
            textAlign:'center'
        }
        return ( 
            <div className="footer pt-2" style={style}>
                    <Link to="/admin"><span style={{color:'#232528'}}>admin</span></Link> || copyrights &copy; 2019 .All rights reserved.
            </div>
         );
    }
}
 
export default Footer;