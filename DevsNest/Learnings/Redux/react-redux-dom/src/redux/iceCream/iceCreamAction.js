import { BUY_ICECREAM, RETURN_ICECREAM } from "./iceCreamTypes"


export const buyIceCream = number => {
    return {
        type: BUY_ICECREAM,
        disc: "This is the cool one.",
        payload: number
    }
}

export const returnIceCream = number => {
    return {
        type: RETURN_ICECREAM,
        disc: "There is some reason to...",
        payload: number
    }
}

