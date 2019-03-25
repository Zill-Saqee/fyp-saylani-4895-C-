import axios from "axios";
import productAction from "./productAction";

class productMiddleware{
    static  fetchInitialData(data) {
        return (dispatch) => {

            
        axios.get('http://localhost:4000/business/')
        // .then(response=> response.json())
        .then(json => {
            console.log(json);
            dispatch(productAction.fetchData(json));
        })
        .catch((err)=>{
            console.log(err);
        })
        }
        
    }
}


export default productMiddleware;