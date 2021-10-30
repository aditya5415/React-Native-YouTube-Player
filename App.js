// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import { reducer } from './src/reducers/reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux'

const store = createStore(reducer)

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}
        >
          <Stack.Screen name="search" component={Search} />
          <Stack.Screen name="videoplayer" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


