import { createStore } from "redux";
import reducers from "./reducers/notes-reducers";

const store = createStore(reducers);

export default store;
