import { BUY_MANGO, SELL_MANGO } from "./mangoType"

export const buyMango = () => {
    return {
        type: BUY_MANGO,
        info: "This mango is really tasty!!" 
    }
}

export const sellMango = () => {
    return {
        type: SELL_MANGO,
        info: "This is really big and with a tasty flavour!!"
    }
}