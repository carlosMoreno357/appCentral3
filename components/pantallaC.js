import React, { Component } from 'react';
import { View, AsyncStorage, ScrollView, ActivityIndicator } from 'react-native';
import {ListItem, Input,Button} from 'react-native-elements';

// REDUX
import { connect } from 'react-redux';

class pantallaC extends Component {
    constructor(props){
        super(props);
        this.state={
            usuarios: [],
            nombre: ''
        };
    }

    async componentDidMount(){
        await AsyncStorage.getAllKeys().then((response)=>{
            console.log(response);
        });
        await AsyncStorage.getItem("@central:usuarios").then((respuesta)=>{
            if(respuesta !== null){
                this.setState({usuarios: JSON.parse(respuesta)});
            }
        });
    }

    borrarUsuario = (key) =>{
        //ESTO ES EQUIVALENTE A LA DECLARACIÓN DE ABAJO
        /*let usuariosTemp = this.state.usuarios;
        usuariosTemp = usuariosTemp.filter((usuario) => usuario.key !== key);*/

        let usuariosTemp = this.state.usuarios.filter((usuario) => usuario.key !== key);
        
        this.setState({usuarios: [...usuariosTemp]}, () => {
            AsyncStorage.setItem("@central:usuarios",JSON.stringify(this.state.usuarios));
        });
        
    }

    limpiarUsuarios = () =>{
        this.setState({usuarios: []}, () => {
            AsyncStorage.setItem("@central:usuarios",JSON.stringify(this.state.usuarios));
        });
    }

    agregarNombre = (nombre) =>{ 
        this.setState({
            usuarios: [...this.state.usuarios, {key: new Date().getTime(), nombreUsuario: nombre}],
            nombre: ''
        }, () =>{
            AsyncStorage.setItem("@central:usuarios",JSON.stringify(this.state.usuarios));
        });
    }

    render() {
        return (
            <View style={{flex:1, justifyContent:'space-evenly', alignContent:'center'}}>
                <View style={{justifyContent: 'space-evenly', flexDirection:'row', marginVertical:25}}>
                    <Input containerStyle={{width: '70%'}} placeholder="Ingresa un nombre" value={this.state.nombre} onChangeText={(text)=>{this.setState({nombre: text});}}></Input>
                    <Button containerStyle={{width: '20%'}} raised type='outline' title='Agregar' onPress={() => {this.agregarNombre(this.state.nombre)}}></Button>
                </View>
               
                <ScrollView>
                    {
                        this.state.usuarios.length > 0
                        ? this.state.usuarios.map((usuario) => {
                           return (
                               <ListItem 
                                key={usuario.key}
                                title={usuario.nombreUsuario}
                                subtitle={"No. Usuario:"+usuario.key}
                                bottomDivider
                                rightElement={<Button 
                                    raised type='outline'
                                    title='x'
                                    containerStyle={{width: 44}}
                                    onPress={() => {this.borrarUsuario(usuario.key)}}
                                    >
                                    </Button>}
                                >
                                </ListItem>)
                        })
                        : <ActivityIndicator style={{marginTop: 200}}></ActivityIndicator>
                    }
                </ScrollView>
                <Button raised type='clear' containerStyle={{width: '50%', margin: 20, alignSelf:'center'}} title='Limpiar Lista' onPress={this.limpiarUsuarios}></Button>
            </View>
        )
    }
}


const mapStateToProps = state => ({
    ...state,
  });
  
  const mapDispatchToProps = {
    
  };
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(pantallaC);
