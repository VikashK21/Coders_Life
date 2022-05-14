import { BUY_CAKE, RETURN_CAKE } from "./cakeTypes"

export const buyCake = () => {
    return {
        type: BUY_CAKE
    }
}

export const returnCake = () => {
    return {
        type: RETURN_CAKE
    }
}