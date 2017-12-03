import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CurrencyItem from './currency-item';


export default class CurrencyList extends React.PureComponent{
  constructor(props){
    super(props)
  }

  render(){
    return (
      this.props.currencies.map( (item,i) => {
        return <CurrencyItem key={i} {...item}/>
      })
    )
  }
}