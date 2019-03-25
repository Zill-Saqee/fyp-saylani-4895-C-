
class productAction {
    static  SET_PRODUCTS_LOADING="SET_PRODUCTS_LOADING";
    static  SET_PRODUCTS_PAYLOAD="SET_PRODUCTS_PAYLOAD";
    static  FETCH_PRODUCTS="FETCH_PRODUCTS";
    static  INSERT_PRODUCT="INSERT_PRODUCT";
    static DELETE_DATA_BY_ID="DELETE_DATA_BY_ID";

    static setLoading = (data) => {
        return {
            type: this.SET_PRODUCTS_LOADING,
            payload: 1
        }
    }
    
    static setError = error => {
        return {
            type: this.SET_PRODUCTS_PAYLOAD,
            payload: { error }
        }
    }
    static unsetError = (data) => {
        return {
            type: this.SET_PRODUCTS_PAYLOAD,
            payload: { error: null }
        }
    }
    
    //**  FETCH ALL DATA  **//
    static fetchData = products => {
        return {
            type: this.FETCH_PRODUCTS,
            payload: {products} 
        }
    }

    //**  SAVE DATA  **//
    static insertProduct = product => {
        return {
            type: this.INSERT_PRODUCT,
            payload: { product }
        }
    }
    //** DELETE DATA **/
    static deleteDataById = _id => {
        return {
            type: this.DELETE_DATA_BY_ID,
            payload: { _id }
        }
    }
}

export default productAction;



































//**  FETCH BY ID DATA  **//
// fetchDataById = data => {
//     return {
//         type: 'FETCH_DATA_BY_ID',
//         payload: { data }
//     }
// }




//** DELETE ALL DATA **/
// export const deleteAllProducts = () => {
//     return {
//         type: 'DELETE_ALL_PRODUCTS',
//         payload: {}
//     }
// }

//**  UPDATE DATA **//
// export const updateData = (_id, updates) => {
//     return {
//         type: 'UPDATE_DATA',
//         payload: { _id, updates }
//     }
// }

