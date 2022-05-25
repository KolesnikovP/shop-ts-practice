import { createStore } from 'redux'
import rootReducer from './rootReducer';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(rootReducer)

export default store