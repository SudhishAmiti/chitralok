import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSlice";
import searchReducer from "./searchSlice";
const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : movieReducer,
        gpt : gptReducer,
        search  : searchReducer,
    }
})

export default appStore;