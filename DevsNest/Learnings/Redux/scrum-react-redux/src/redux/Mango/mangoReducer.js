import { BUY_MANGO, SELL_MANGO } from "./mangoType"

const MangoState = {
    numOfMangoes: 30
}

const mangoReducer = (state = MangoState, action) => {
    switch (action.type) {
        case(BUY_MANGO): return ({
            numOfMangoes: state.numOfMangoes + 1
        })
        case(SELL_MANGO): return ({
            numOfMangoes: state.numOfMangoes - 1
        })
        default: return state
    }
    
}

export default mangoReducer;