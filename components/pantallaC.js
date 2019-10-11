import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';

// REDUX
import { connect } from 'react-redux';

class pantallaC extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
                <Text>  </Text>
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
