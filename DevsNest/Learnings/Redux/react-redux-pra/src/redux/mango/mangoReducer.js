import { BUY_MANGO, RETURN_MANGO } from "./mangoType"

const initialState = {
    numOfMangoes: 50
}

export const manogReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_MANGO: return {
            ...state,
            numOfMangoes: state.numOfMangoes - 1
        }
        case RETURN_MANGO: return {
            ...state,
            numOfMangoes: state.numOfMangoes + 1
        }
        default: return state
    }

}

