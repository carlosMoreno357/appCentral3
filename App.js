import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Constants, ScreenOrientation } from 'expo';
import Navegador from './components/navegador';

export default class App extends Component {
  constructor(props){
    super(props);

  }

  async componentWillMount(){
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
  }


  render(){
    return (
      <View style={styles.container}>
        <Main></Main>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

