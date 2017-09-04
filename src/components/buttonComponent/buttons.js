import React, { Component } from 'react';


class PrimaryButton extends Component{
  render(){
    return(
      <button>{this.props.name}</button>
    )
  }
}

class SecondaryButton extends Component{
  render(){
    console.log("sec", this.props)
    return(
      <button style={{backgroundColor:this.props.color}}>Hello</button>
    )
  }
}

export default PrimaryButton;
export {PrimaryButton, SecondaryButton};
