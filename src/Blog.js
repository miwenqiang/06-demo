import React, { PropTypes } from 'react';

import marked from 'marked';
import hljs from 'highlight.js';

import { getMd } from './utils/helpers.js';



class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      text:'',
      wait:true
    }
  }
  componentDidMount(){
    getMd(this.props.params.title)
      .then( (rec) => {
        this.setState({
          text:rec.getMd,
          wait:false
        })
      })
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    })
    let content= this.state.wait ? '请稍等片刻' : marked(this.state.text)
    return(
      <div>
        <div className="post-content" dangerouslySetInnerHTML={{__html:content}}/>
      </div>
    )
  }
}

export default Blog;
