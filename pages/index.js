import React, {Component} from 'react';

import Header from '../components/header';
import ErrorContent from '../components/error-content';

class Home extends Component{
  render() {
    return (
      <div>
        <Header active="Inicio" />
        <ErrorContent msg="En Construcción"/>
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