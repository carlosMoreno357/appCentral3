import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Main extends Component {
  constructor(props){
    super(props);

    this.state={
      mensaje: '',
      contador: 0
    };

  }

  incrementarContador = () => {
    this.setState({
      mensaje:'Contador incrementado',
      contador: this.state.contador+1
    }, () => {console.log(this.state.contador);} );
  }

  decrementarContador = () => {
    this.setState({
      mensaje:'Contador decrementado',
      contador: this.state.contador-1
    }, () => {console.log(this.state.contador);} );
  }

  navegarPantallaB = () =>{
    this.props.navigation.navigate('PantallaB',{fecha: new Date()});
  }

  navegarPantallaC = () =>{
    console.log(this.props.navigation);
    this.props.navigation.navigate('PantallaC',{texto: 'Hola desde Pantalla C'});
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Bienvenido a React Native</Text>
        { this.state.contador <= 0 ?
          <Text style={{color: '#A00000'}}>{this.state.mensaje}:{this.state.contador}</Text>
          : <Text style={{color: 'green'}}>{this.state.mensaje}:{this.state.contador}</Text>
        }
        <View style={styles.footer}>
          <Button title='Decrementar' onPress={this.decrementarContador}></Button>
          <Button title='Incrementar' onPress={this.incrementarContador}></Button>
        </View>
        <Button title='Pantalla B =>' onPress={this.navegarPantallaB}></Button>
        <Button title='Pantalla C =>' onPress={this.navegarPantallaC}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footer:{
    width: '100%',
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: 200,
  }
});
