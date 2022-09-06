import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "../redux/slice";

const rootReducer = combineReducers({
    auth: authSlice.reducer
});


export default rootReducer;