import React, { Component } from 'react';
import './App.css';
import Table from './components/table/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';

class App extends Component {

  constructor() {
    super();
    this.state = {
      chainData: []   //state chainData is being populated with API resp
  }
  }
  
  //Using ComponentDidMount React hook lifecycle method to get data from API...
  componentDidMount(intervalValue = '1d') {
    //fetch method returns a promise!!! to fullfill that promise, we will use .then()
    var url = new URL("https://api.nomics.com/v1/currencies/ticker"),
      params = { key: "06032060c502a5d376ad22deb9aec283", ids: "BTC,ETH,ADA,XMR,LTC,EOS,XTZ,ZEC,UBT,ZRX,KNC,USDT", interval: intervalValue, convert: "USD" }
      // Object.keys(params) = [ 'key', 'ids', 'interval', 'convert'].forEach()...
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));//building key value pair, and appends to end of URL (?query params)
      // url.searchParams = [ { key: "06032060c502a5d376ad22deb9aec283" }, { ids: "BTC,ETH,ADA,XMR,LTC,EOS,XTZ,ZEC,UBT,ZRX,KNC,USDT" }, { interval: intervalValue } , { convert: "USD" } ]
    fetch(url)
      .then(res => res.json())
      .then(result => {
        //We get result when promise is fullfilled
        let arrData = this.transformResponse(result, intervalValue);
        this.setState({
          chainData: arrData
        });
        console.log("is data there? ", result);
      },   //this returns result if no error,  else below.
        (error) => {
          //We get error when promise is rejected
          console.log("Houston, we have a problem. ", error);
        }
      )
  }
  transformResponse(dataHere, intervalValue) {
    console.log("what is interval value? :", intervalValue);
    let arrData = [];
    if(dataHere.length > 0) {
      dataHere.forEach(data => {  //dataHere is array of object! we need to get attribute values from object!!!
        let transformedData = {
          Rank: data['rank'],
          Id: data['id'],
          Logo: data['logo_url'],
          PriceDelta: Number(data[intervalValue]['price_change_pct'] * 100).toFixed(2)  + " %",   
          Price: "$ " + Number(data['price']).toFixed(3),
          ATH: "$" + Number(data['high']).toFixed(2),
          TableGraph: "https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/1720.png",
          CircSupply: new Intl.NumberFormat().format(data['circulating_supply']),
          MaxSupply: new Intl.NumberFormat().format(data['max_supply'])
        }

        arrData.push(transformedData);
      })
    }
    return arrData;
  }

  getButtonValue(interval){
    console.log("Interval Value is: ", interval); 
    this.componentDidMount(interval);
  }

  // I am here....

  render() {
    return (
      <div className="App">
        <p className="Table-header">Permissionless Blockchain Adoption Analytics</p>
        {/* <button type="button" class="btn btn-outline-primary">now</button> */}
        <button type="button" className="btn btn-outline-danger" onClick={ ()=> this.getButtonValue('1h')}>1 hr</button>
        <button type="button" className="btn btn-outline-success" onClick={ ()=> this.getButtonValue('1d')}>24 hr</button>
        {/* <button type="button" class="btn btn-outline-secondary">7 day</button> */}
        <button type="button" className="btn btn-outline-primary" onClick={ ()=> this.getButtonValue('30d')}>30 day</button>
        <button type="button" className="btn btn-outline-info" onClick={ ()=> this.getButtonValue('365d')}>1 year</button>
        <button type="button" className="btn btn-outline-dark" onClick={ ()=> this.getButtonValue('ytd')}>YTD</button>
        {/* this Table below is a child component */}
        <Table data={this.state.chainData} />
      </div>
    );
  }
}

export default App;