import { BUY_ICECREAM, RETURN_ICECREAM } from "./iceCreamTypes"

const iceCreamStock = {
    numOfIceCream: 30
}

export const iceCreamReducer = (state = iceCreamStock, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            console.log(action.disc);
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - action.payload
            }
        case RETURN_ICECREAM:
            console.log(action.disc);
            return {
                ...state,
                numOfIceCream: state.numOfIceCream + Number(action.payload)
            }
        default: return state
    }
}