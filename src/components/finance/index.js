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
    return {
        getPriceData: () => {
            axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=DOGE&tsym=GBP&limit=20&api_key=ff0b2e5779486a013d4efbcf9a351f303f092983d08504dd487ca2443747ff1d')
            .then((res) => {
                
                if(res && res.data && res.data.Data && res.data.Data) { 
                    dispatch(setPrice('doge', res.data.Data.map(point => {
                        return point.close;
                    })));
                } else {
                    // dispatch(setPrice('doge', 0.00));
                }
                
            })
            axios.get('https://min-api.cryptocompare.com/data/histominute?fsym=BTC&tsym=GBP&limit=20&api_key=ff0b2e5779486a013d4efbcf9a351f303f092983d08504dd487ca2443747ff1d')
            .then((res) => {
                if(res && res.data && res.data.Data && res.data.Data) {
                    dispatch(setPrice('doge', res.data.Data.map(point => {
                        return point;
                    })));
                } else {
                    // dispatch(setPrice('bitcoin', 0.00));
                }
                
            })
            // d2766078-03a9-40c7-b348-fefde2096fb5
            
  
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    
    let price = 0;

    if(state.finance && state.finance[ownProps.product] && state.finance[ownProps.product].price) {
        price = state.finance[ownProps.product].price;
    }
    
    return {
        price
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinanceBlock)
