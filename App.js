import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './components/main';
import PantallaB from './components/pantallaB';
import PantallaC from './components/pantallaC';

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
class PantallaCScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <PantallaC navigation={this.props.navigation}></PantallaC>
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
  },
  PantallaC:{
    screen: PantallaCScreen,
    navigationOptions: ({ navigation}) => ({
      title: 'Pantalla C',
    }),
  }
});

export default createAppContainer(AppNavigator);

