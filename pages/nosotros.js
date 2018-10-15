import React, {Component} from 'react';

import Header from '../components/header';
import AboutUs from '../components/about-us';

class Nosotros extends Component{
  render() {
    return (
      <div>
        
        <Header active="Nosotros" />
        <AboutUs />

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

export default Nosotros;