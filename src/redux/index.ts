import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./slices/common";
import themeReducer from "./slices/theme";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);
const persistedUserDataReducer = persistReducer(persistConfig, commonReducer);

export const store = configureStore({
  reducer: {
    common: persistedUserDataReducer,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistorTheme = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
