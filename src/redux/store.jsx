import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';

import themeSlice from "./slices/theme/themeSlice";
import languageSlice from "./slices/language/languageSlice";

const rootReducer = combineReducers({
    theme: themeSlice,
    language: languageSlice,
});

const persistConfig = {
    key: 'root', 
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
       getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: [ PERSIST ],
          },
      })
});

export const persistedStore = persistStore(store);
