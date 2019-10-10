import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class pantallaB extends Component {
    constructor(props){
        super(props);
        console.log(this.props.navigation.state.params.fecha);
    }

    render() {
        return (
            <View>
                <Text>Fecha ISO: {this.props.navigation.state.params.fecha.toISOString().substring(0,10)}</Text>
                <Text>Fecha Local: {this.props.navigation.state.params.fecha.toLocaleString()}</Text>
            </View>
        )
    }
}
