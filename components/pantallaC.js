import React, { Component } from 'react';
import { View, AsyncStorage, ScrollView, ActivityIndicator, Text } from 'react-native';
import {ListItem, Input,Button} from 'react-native-elements';

// REDUX
import { connect } from 'react-redux';

class pantallaC extends Component {
    constructor(props){
        super(props);
        this.state={
            usuarios: [],
            nombre: '',
            subiendo: false
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


    insertBDD = () =>{
        if(this.state.usuarios.length>0){
            this.setState({subiendo: true});
            
            this.state.usuarios.map((usuario) => {
                //Revisar inserciones en:
                // https://webhooks.mongodb-stitch.com/api/client/v2.0/app/rest-porxi/service/api/incoming_webhook/getData
                fetch('https://webhooks.mongodb-stitch.com/api/client/v2.0/app/rest-porxi/service/api/incoming_webhook/storeData', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario),
                }).then((response)=> response.json())
                    .then((responseJSON)=>{
                        console.log(responseJSON);
                    });
                    

            });
            
            this.limpiarUsuarios();
            this.setState({subiendo: false});
            
        }else{
            alert('No hay datos para subir');
        }
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
                        this.state.subiendo === false
                            ?this.state.usuarios.length > 0
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
                                : <Text style={{marginTop: 200, alignSelf: 'center', color: '#555'}} >Lista Vacía</Text>
                            : <ActivityIndicator style={{marginTop: 200}}></ActivityIndicator>
                    }
                </ScrollView>
                <Button raised type='clear' containerStyle={{width: '50%', margin: 10, alignSelf:'center'}} title='Limpiar Lista' onPress={this.limpiarUsuarios}></Button>
                <Button 
                    raised
                    icon={{name: 'upload', type: 'font-awesome', size:18, color:'#FFF'}}
                    containerStyle={{ margin: 20, alignSelf:'flex-end'}}
                    color='#6BF0FF'
                    onPress={this.insertBDD}>
                </Button>
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
