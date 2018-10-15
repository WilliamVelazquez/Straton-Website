import React, {Component} from 'react';

import Header from '../components/header';
import Services from '../components/services';

class Home extends Component{
  render() {
    return (
      <div>
        <Header active="Servicios" />
        
        <Services 
          setRefA={this.setServiceARef}
          setRefB={this.setServiceBRef}
          setRefC={this.setServiceCRef}
          setRefD={this.setServiceDRef}
          scrollToA={this.scrollToA}
          scrollToB={this.scrollToB}
          scrollToC={this.scrollToC}
          scrollToD={this.scrollToD}
        />

        <style jsx global>{`
          body{
            margin: 0;
            margin-top: 100px;
            font-family: system-ui;
            background: #fff;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;