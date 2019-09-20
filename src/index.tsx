import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Main from './scenes/Main';

interface Props {};

const store = configureStore();

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={store} > 
        <Main />
      </Provider>
    );
  }
}

export default App;
