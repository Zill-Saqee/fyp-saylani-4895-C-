import productAction from "../actions/productAction";

const initialState = {
    products: [],
    error: null,
    isLoading: false,

}

const productReducer = (state = initialState, action) => {

    switch (action.type) {

        case productAction.SET_PRODUCTS_LOADING:
            return Object.assign({}, state, { isLoading: true, error: null })

        case productAction.FETCH_PRODUCTS:
            return Object.assign(
                {},
                state,
                { products: action.payload.products },
                { isLoading: false }
            )

        case productAction.INSERT_PRODUCT:
            return Object.assign(
                {},
                state,
                { product: [...state.products, action.payload.products] }
            )

        case productAction.DELETE_DATA_BY_ID:
            let newList = state.data.filter(d => {
                return d._id !== action.payload._id
            })

            return Object.assign({}, state, { products: newList })

        default:
            return state;
    }
}

export default productReducer;