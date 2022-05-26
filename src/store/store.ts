import { createStore } from 'redux'
import rootReducer from './rootReducer';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'cart',
  ]
}

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
// const store = createStore(persistedReducer)
// export default store

  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  export { store, persistor }
