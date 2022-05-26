import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import {store, persistor} from './store/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Header/>
        <Products/>
      </PersistGate>
    </Provider>
  );
}

export default App;
