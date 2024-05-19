import { configureStore } from "@reduxjs/toolkit";
import Global from "./Global";
import { RtkSlice } from "./UserRTK";

export const store =  configureStore({
    reducer: {
        myReducer: Global,
        [RtkSlice.reducerPath]: RtkSlice.reducer
    },
    middleware: (getAllMiddleware)=> getAllMiddleware().concat(RtkSlice.middleware)
})