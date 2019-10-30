import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as Font from 'expo-font'
import ReduxThunk from 'redux-thunk';
import Reducers from './src/2.reducers'
import firebase from 'firebase'
import TodoListScreen from './src/components/TodoListScreen';
import TodoStack from './src/navigators/TodoStack';


export default function App() {
  const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk))
  const [load, setLoad] = useState(false)

  useEffect( () => {
    Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    })
    .then(() => setLoad(true))
    
  })

  // Replace config ini dengan config kalian sendiri ya gengs
  var firebaseConfig = {
        apiKey: "AIzaSyDpqGpZv4XGgpfGLnPo8cnD5QM_arBhov8",
        authDomain: "todo-ujianmobile.firebaseapp.com",
        databaseURL: "https://todo-ujianmobile.firebaseio.com",
        projectId: "todo-ujianmobile",
        storageBucket: "todo-ujianmobile.appspot.com",
        messagingSenderId: "416472500362",
        appId: "1:416472500362:web:c63382c3f3f2189c144573"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  console.disableYellowBox = true
  if(load){
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <TodoStack />
        </View>
      </Provider>
    );
  }else{
    return (
      <View></View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
