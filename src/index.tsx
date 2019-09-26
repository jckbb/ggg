import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Navigator } from './navigation/index';


interface Props {};

const store = configureStore();

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store} > 
        <Navigator />
      </Provider>
    );
  }
}

export default App;
