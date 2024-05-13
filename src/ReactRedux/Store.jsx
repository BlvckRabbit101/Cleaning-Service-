import { configureStore } from "@reduxjs/toolkit";
import Global from "./Global";

export default configureStore({
    reducer: {
        myReducer: Global
    }
})