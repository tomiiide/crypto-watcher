import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView } from 'react-native';
import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './../components/CoinCard';
import Spinner from 'react-native-loading-spinner-overlay'
 
class CryptoContainer extends Component{

  componentDidMount(){
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const {crypto} = this.props;
    

    return crypto.data.map((coin,index) => {
      return <CoinCard
        key={index}
        coin_name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
      />
    });
  }

  render(){
    
    const {crypto} = this.props
    const {contentContainer} = styles;

    if(crypto.isFetching){
      return(
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContext={"Loading..."}
            textStyle={{color : '#253145'}}
            animation="fade"
          />
        </View>
      )
    }
    return(
      <ScrollView contentContainerStyle={contentContainer}>
        {this.renderCoinCards()}
      </ScrollView>
    )
  }
}



function mapStateToProps(state){
  return {
    crypto : state.crypto
  }
}

const styles = {
  contentContainer : {
    paddingBottom : 100,
    paddingTop : 55
  }
}

export default connect(mapStateToProps, {FetchCoinData})(CryptoContainer)