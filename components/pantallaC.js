import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class pantallaC extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
                <Text> {this.props.navigation.state.params.texto} </Text>
            </View>
        )
    }
}
