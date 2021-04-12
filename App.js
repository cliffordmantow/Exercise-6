import React, {Component} from 'react';
import {View} from 'react-native';
import RegisterScreen from './src/components/pages/Register';
import UserListScreen from './src/components/pages/UserList';

export default class App extends Component {
  render() {
    return (
      <View>
        {/* <RegisterScreen /> */}
        <UserListScreen />
      </View>
    );
  }
}
