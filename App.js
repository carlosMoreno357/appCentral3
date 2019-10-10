import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './components/main';
import PantallaB from './components/pantallaB';

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Main navigation={this.props.navigation}></Main>
    );
  }
}

class PantallaBScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <PantallaB navigation={this.props.navigation}></PantallaB>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation}) => ({
      title: 'Pantalla 1',
    }),
  },
  PantallaB:{
    screen: PantallaBScreen,
    navigationOptions: ({ navigation}) => ({
      title: 'Pantalla B',
    }),
  }
});

export default createAppContainer(AppNavigator);

