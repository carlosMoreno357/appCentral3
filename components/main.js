import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//REDUX
import { connect } from 'react-redux';
import { sumar, restar } from './reducer';


class Main extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
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
    });
  }

  navegarPantallaB = () =>{
    this.props.navigation.navigate('PantallaB');
  }

  navegarPantallaC = () =>{
    this.props.navigation.navigate('PantallaC');
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Bienvenido a React Native</Text>
        { this.props.numero <= 0 ?
          <Text style={{color: '#A00000'}}>{this.props.mensaje}:{this.props.numero}</Text>
          : <Text style={{color: 'green'}}>{this.props.mensaje}:{this.props.numero}</Text>
        }
        <View style={styles.footer}>
          <Button title='Decrementar' onPress={this.props.restar}></Button>
          <Button title='Incrementar' onPress={this.props.sumar}></Button>
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


const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = {
  sumar,
  restar,
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);
