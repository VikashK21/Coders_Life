import { BUY_MANGO, RETURN_MANGO } from "./mangoType"

export const buyMango = () => {
    return {
        type: BUY_MANGO
    }
}

export const returnMango = () => {
    return {
        type: RETURN_MANGO
    }
}