import React from 'react';
import {View } from 'react-native';
import {Provider} from 'react-redux';

import Store from './src/store';
import {Header, CryptoContainer} from './src/components'

export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header/>
          <CryptoContainer/>
        </View>
      </Provider>
    );
  }
}

