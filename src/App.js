import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import AppContainer from './components/AppContainer';
import Error from './components/Error';
import storePersistor from './store';

const {store, persistor} = storePersistor();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
          <Error />
        </PersistGate>
      </Provider>
    );
  }
}
