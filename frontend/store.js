import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
} from 'redux-persist'


import blockchain from 'slices/blockchainSlice';
import { blockchainApi } from "slices/blockchainAPI";


const reducers = combineReducers({
  // [authApi.reducerPath]: authApi.reducer,
  [blockchain.reducerPath]: blockchain.reducer,
  blockchain
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  // whitelist: ['auth']
  blacklist: [
    // blockchainApi.reducerPath,
    // blockchain
  ],
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        // .concat(authApi.middleware)
        // .concat(blockchainApi.middleware)
    
  })
  
export const store = makeStore()

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)

