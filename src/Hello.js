import React from "react";
class Hello extends React.Component {
  render(){
    return <div>Hello {this.props.toWhat}</div>
  }
}
export default Hello;
