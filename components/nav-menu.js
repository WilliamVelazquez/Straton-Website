import React, {Component} from 'react';
import Link from 'next/link';

class NavMenu extends Component{
  state={
    menuOpened: false
  }

  toggleMenu = () => {
    this.setState({menuOpened:!this.state.menuOpened});
  }

  render() {
    return(
      <nav>
        <div className="navWide">
          <Link prefetch href="/">
            <a className={`${this.props.active=="Inicio"?"active":""}`}>Inicio</a>
          </Link>
          <Link prefetch href="/nosotros">
            <a className={`${this.props.active=="Nosotros"?"active":""}`}>Nosotros</a>
          </Link>
          <Link prefetch href="/servicios">
            <a className={`${this.props.active=="Servicios"?"active":""}`}>Servicios</a>
          </Link>
          <Link prefetch href="/contacto">
            <a className={`${this.props.active=="Contacto"?"active":""}`}>Contacto</a>
          </Link>
        </div>

        <div className="navNarrow">
          <span onClick={this.toggleMenu}>{this.state.menuOpened?"x":"Menú"}</span>
          <div className={`slider${this.state.menuOpened?"":" closed"}`}>
            <Link prefetch href="/">
              <a className={`${this.props.active=="Inicio"?"active":""}`}>Inicio</a>
            </Link>
            <Link prefetch href="/nosotros">
              <a className={`${this.props.active=="Nosotros"?"active":""}`}>Nosotros</a>
            </Link>
            <Link prefetch href="/servicios">
              <a className={`${this.props.active=="Servicios"?"active":""}`}>Servicios</a>
            </Link>
            <Link prefetch href="/contacto">
              <a className={`${this.props.active=="Contacto"?"active":""}`}>Contacto</a>
            </Link>
          </div>
        </div>
        
        <style jsx>{`
          nav a{
            text-decoration: none;
            color: #fff;
            font-size: 18px;
            margin-right: 20px;
            justify-self: right;
          }
          nav .navWide a:hover{
            border-bottom: 2px solid #fff;
          }
          nav .navNarrow a:hover{
            font-weight: bold;
          }
          nav .active{
            font-weight: bold;
            border-bottom: 2px solid #fff;
          }
          span{
            text-decoration: none;
            color: #fff;
            font-size: 18px;
            margin-right: 20px;
            justify-self: right;
            cursor:pointer;
            font-weight: bold;
          }
          span:hover{
            border-bottom: 1px solid #fff;
          }
          .navWide{
            display:grid;
            grid-template-columns: repeat(4,1fr);
            align-items:center;
          }
          .navNarrow{
            display: none;
            grid-template-columns: 1fr;
            background: #112a4f;
            top: 0;
            right: 0;
            padding: 10px;
            padding-bottom: 5px;
            padding-left: 25px;
            position: absolute;
            border-radius: 0px 0px 10px 10px;
          }
          .slider{
            display: grid;
            grid-gap: 15px;

            margin-top: 15px;
            margin-bottom: 10px;

            overflow-y: hidden;
            max-height: 200px; /* approximate max height */

            transition-property: all;
            transition-duration: .6s;
            transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
          }
          .slider.closed {
            max-height: 0;
            margin-top: 0px;
            margin-bottom: 0px;
          }
          @media only screen and (max-width : 768px) {
            .left .Offline{
              font-size:20px;
            }
            img{
              width: 100px;
            }
            .left{
              grid-template-columns: 105px 1fr;
            }
            .navWide{
              display:none;
            }
            .navNarrow{
              display:grid;
            }
          }
          @media only screen and (max-width : 667px) {
            .left .Offline{
              font-size:18px;
            }
            img{
              width: 80px;
            }
            .left{
              grid-template-columns: 85px 1fr;
            }
          }
        `}</style>
      </nav>
    );
  }
}

export default NavMenu;