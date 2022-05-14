import { createStore } from "redux";
import { manogReducer } from "./mango/mangoReducer";


const store = createStore(manogReducer);

export default store