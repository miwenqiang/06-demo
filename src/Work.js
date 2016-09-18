import React, { PropTypes } from 'react';
import Card from './components/Card';

import { getJson } from './utils/helpers.js';

class Work extends React.Component {
  constructor(){
    super();
    this.state={
      cardData:[],
      wait:true
    }
  }
  componentDidMount(){
    getJson()
      .then( (rec) => {
        this.setState({
          cardData:rec.getJson,
          wait:false
        })
      })
  }
  render () {
    let cards = this.state.cardData.map( (item,i) => <Card {...item} key={i} />)
    return(
      <div className="container-fluid">
        <div className="row" style={{marginTop:'20px'}}>
          { this.state.wait ? '请耐心等待片刻' : cards}
        </div>
      </div>
    )
  }
}

export default Work;
