import { createStore } from "redux";
import mangoReducer from "./Mango/mangoReducer";

const store = createStore(mangoReducer)

export default store;