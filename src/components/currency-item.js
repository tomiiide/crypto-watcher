import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class CurrencyItem extends React.PureComponent{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.item}>
        <Text> {this.props.name} </Text>
        <Text> {this.props.description} </Text>
        <Text> {this.props.price} </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : 'row',
    shadowColor : '#000',
    shadowOpacity : .4,
    shadowOffset : {
      x : '1px',
      y : '2px'
    }
  },
});