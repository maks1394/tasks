import {legacy_createStore} from "redux";
import {themeReducer} from "./themeReducer";


export const themeStore = legacy_createStore(themeReducer)