import React, {Component} from 'react';

class IfOffline extends Component{
  state = {
    onLine: true
  }

  componentDidMount() {
    if(!window) return

    window.navigator?this.setState({onLine:window.navigator.onLine}):null;
    window.addEventListener('online', this.goOnline);
    window.addEventListener('offline', this.goOffline);
  }

  compnentWillUnmount(){
    window.removeEventListener('online', this.goOnline);
    window.removeEventListener('offline', this.goOffline);
  }

  goOnline = () => this.setState({ onLine:true })
  goOffline = () => this.setState({ onLine:false })  

  render(){
    //console.log("nav-->",navigator);
    const { children } = this.props;
    const { onLine } = this.state;

    if( onLine ){
      return null
    }
    
    return <div>{ children }</div>
  }
}

export default IfOffline;