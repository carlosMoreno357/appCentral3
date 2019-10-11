import React, { Component } from 'react';
import { Text, View } from 'react-native';

// REDUX
import { connect } from 'react-redux';

class pantallaB extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <Text
                    style={{color: 'darkslategray', alignSelf: 'center', fontSize: 50, fontWeight: 'bold'}}
                >
                    {this.props.numero}
                </Text>
            </View>
        )
    }
}

    const mapStateToProps = state => ({
        ...state,
    });
  
  const mapDispatchToProps = {
    
  };
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(pantallaB);
  
