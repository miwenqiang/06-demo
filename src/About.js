import React, { PropTypes } from 'react';

import{ searchGit } from './utils/helpers.js';
class About extends React.Component {
  constructor(){
    super();
    this.state={
      data:{},
      wait:true,
      inputValue:'user name'
    }
  }
 // componentDidMount(){
 //   searchGit()
 //     .then((data) => {
 //       this.setState({
 //         data:data.data,
 //         wait:false
 //
 //       })
 //     })
 // }
 handleInput(e){
   let value=e.target.value;
   this.setState({
     inputValue:value
   })
 }
 handleClick(){
   let name=this.state.inputValue;
   searchGit(name )
       .then((data) => {
         this.setState({
           data:data.data,
           wait:false
         })
         console.log(this.state.data)
       })
       .catch(function (error) {
         alert(error);
       });

 }
  render () {
    let gitInfo =(
      <div className="row">
        <img className="col-xs-3 col-xs-offset-4" src={this.state.data.avatar_url} />
        <p className="col-xs-3 col-xs-offset-5">{this.state.data.name}</p>
        <div className="col-xs-6 col-xs-offset-3 row">
          <div className="col-xs-6">
            <p>followers</p>
            <span>{this.state.data.followers}</span>
          </div>
          <div className="col-xs-6">
            <p>following</p>
            <span>{this.state.data.following}</span>
          </div>
        </div>
      </div>
  )
    return(
      <div>
        <h2></h2>
        <div className="row">
          <input className="col-xs-4 col-xs-offset-3" type="text" value={this.state.inputValue} onChange={this.handleInput.bind(this)} />
          <button onClick={this.handleClick.bind(this)} >搜索</button>
        </div>
        {this.state.wait ? '正在获取数据' : gitInfo }
      </div>
    )
  }
}

export default About;
