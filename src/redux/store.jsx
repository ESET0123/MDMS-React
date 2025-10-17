    // src/store/store.js
    import { configureStore } from "@reduxjs/toolkit";
    import themeReducer from "./slices/theme/themeSlice";

    export const store = configureStore({
      reducer: {
        theme: themeReducer,
      },
    });