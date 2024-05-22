import { configureStore } from "@reduxjs/toolkit";
import Global from "./Global";
import { RtkSlice } from "./UserRTK";
import { messageRtkSlice } from "./MessageRTK";

export const store =  configureStore({
    reducer: {
        myReducer: Global,
        [ RtkSlice.reducerPath ]: RtkSlice.reducer,
        [ messageRtkSlice.reducerPath ]: messageRtkSlice.reducer
        
    },
    middleware: (getAllMiddleware)=> getAllMiddleware().concat(RtkSlice.middleware,messageRtkSlice.middleware)
})