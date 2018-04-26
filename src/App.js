import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAHcLnaowrGuEmKV-yQn4Hv6-Bpe_1ouz8",
      authDomain: "manager-53046.firebaseapp.com",
      databaseURL: "https://manager-53046.firebaseio.com",
      projectId: "manager-53046",
      storageBucket: "",
      messagingSenderId: "614185581689"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <RouterComponent/>
      </Provider>
    );
  }
}

export default App;
