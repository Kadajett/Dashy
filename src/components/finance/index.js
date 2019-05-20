import { connect } from 'react-redux';
import FinanceBlock from "./finance.component";
import axios from "axios";
import { setPrice } from "../../actions"

const mapDispatchToProps = (dispatch, ownProps) => {
    const config = {
        headers: {
            'X-CMC_PRO_API_KEY': 'ff0b2e5779486a013d4efbcf9a351f303f092983d08504dd487ca2443747ff1d'
        }
      }

    if(ownProps.product) {
        if(ownProps.product === "doge") {
            return {
                getPriceData: () => {
                    axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=DOGE&tsym=USD&limit=100&api_key=ff0b2e5779486a013d4efbcf9a351f303f092983d08504dd487ca2443747ff1d')
                    .then((res) => {
                        
                        if(res && res.data && res.data.Data && res.data.Data) { 
                            let prices = res.data.Data.map(point => {
                                
                                return {price: point.close, time: point.time};
                            });
                            dispatch(setPrice('doge', prices));
                        } else {
                            // dispatch(setPrice('doge', 0.00));
                        }
                        
                    })
                }
            }
        }
        else if(ownProps.product === "bitcoin") {
            return {
                getPriceData: () => {
                    axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=USD&limit=100&api_key=ff0b2e5779486a013d4efbcf9a351f303f092983d08504dd487ca2443747ff1d')
                    .then((res) => {
                        if(res && res.data && res.data.Data && res.data.Data) {
                            let prices = res.data.Data.map(point => {
                                
                                return {price: point.close, time: point.time};
                            });
                            dispatch(setPrice('bitcoin', prices));
                        } else {
                            // dispatch(setPrice('bitcoin', 0.00));
                        }
                        
                    })
                }
            }
        }
        else if(ownProps.product === "ethereum") {
            return {
                getPriceData: () => {
                    axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=ETH&tsym=USD&limit=100&api_key=ff0b2e5779486a013d4efbcf9a351f303f092983d08504dd487ca2443747ff1d')
                    .then((res) => {
                        if(res && res.data && res.data.Data && res.data.Data) {
                            let prices = res.data.Data.map(point => {
                                
                                return {price: point.close, time: point.time};
                            });
                            dispatch(setPrice('ethereum', prices));
                        } else {
                            // dispatch(setPrice('bitcoin', 0.00));
                        }
                        
                    })
                }
            }
        }
    }
    
}

const mapStateToProps = (state, ownProps) => {
    
    let price;

    if(state.finance && state.finance[ownProps.product] && state.finance[ownProps.product].price) {
        price = state.finance[ownProps.product].price;
    }
    
    return {
        price
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinanceBlock)
