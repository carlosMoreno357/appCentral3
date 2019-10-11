import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Main from './components/main';
import PantallaB from './components/pantallaB';
import PantallaC from './components/pantallaC';

//REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './components/reducer';

const store = createStore(reducer);

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Main navigation={this.props.navigation}></Main>
      </Provider>
    );
  }
}

class PantallaBScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <PantallaB navigation={this.props.navigation}></PantallaB>
      </Provider>
    );
  }
}
class PantallaCScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <PantallaC navigation={this.props.navigation}></PantallaC>
      </Provider>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation}) => ({
      title: 'Pantalla 1',
      header: null,
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

