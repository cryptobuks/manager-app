import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
      <Provider store={createStore(reducers)}>
        <LoginForm/>
      </Provider>
    );
  }
}

export default App;
