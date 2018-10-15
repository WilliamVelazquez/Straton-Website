import React, {Component} from 'react';

import Header from '../components/header';
import ContactForm from '../components/contact-form';
import API from '../utils/api';

class Contacto extends Component{
  state={
    name:'',
    email:'',
    phone:'',
    comments:'',
    askForCall:false,
    validName:true,
    validEmail:true
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value,
      validName: true
    });
  }

  changeEmail = (event) => {
    this.setState({
      email: event.target.value,
      validEmail: true
    });
  }

  changePhone = (event) => {
    this.setState({
      phone: event.target.value
    });
  }

  changeComments = (event) => {
    this.setState({
      comments: event.target.value
    });
  }

  changeAskForCall = () => {
    //event
    // console.log("askForCall-->",event.target.value);
    this.setState({
      askForCall:!this.state.askForCall
    });
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateForm = () => {
    //let valid = false;
    let validName = this.state.name.length>1;
    let validEmail = this.validateEmail(this.state.email);
    this.setState({
      validName: validName,
      validEmail: validEmail
    });
    return (validName && validEmail);
  }

  handleSubmit = async () => {
    console.log(this.state);
    let validForm=this.validateForm();
    if (validForm){
      const { name, email, phone, comments, askForCall } = this.state;
      let data={
        companyName:name,
        email,
        phoneNumber:phone,
        commentary:comments || "Sin observaciones",
        callBack: askForCall
      };
      console.log("Contact Data-->",data);
      const saveContact = await API.saveContactInfo(data);

      if(saveContact){
        this.setState({
          name:'',
          email:'',
          phone:'',
          comments:'',
          askForCall:false,
          validName:true,
          validEmail:true
        }, () => alert("Información enviada!"));
      }
      console.log("Información enviada!");
    }
    else{
      console.log("Información no válida!");
      alert("Información no válida!");
    }
  }

  render() {
    return (
      <div>
        <Header active="Contacto" />
        <ContactForm 
          {...this.state}
          changeName={this.changeName}
          changeEmail={this.changeEmail}
          changePhone={this.changePhone}
          changeComments={this.changeComments}
          changeAskForCall={this.changeAskForCall}
          handleSubmit={this.handleSubmit}
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

export default Contacto;