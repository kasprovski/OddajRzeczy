import React, { Component } from 'react';
import './ContactUs.css';

class ContactUs extends Component {
    render () {
      return (
        <div className="ContactUs">
            <div className="Sweetphoto">
              <div> Copyright 2015 (c) by Anna Dadej</div>
            </div>
            <div className="NextSweet">
              <div className="Cont">Skontaktkuj się z nami</div>
              <div className="Decoration Cont"></div>
              <form>
                <div className="ContForm">
                  <p>Formularz kontaktowy</p>
                <div className="Putsin">
                  <input placeholder="    Imię"></input>
                  <input placeholder="    E-mail"></input>
                </div>
                <div>
                  <input className="Msg" placeholder="    Wiadomość"></input>
                </div>
                  <button>Wyślij</button>
                </div>
              </form>
                <div className="FacebookIcon"></div>
                <div className="InstIcon"></div>
            </div>
        </div>
      );
    }
  }
  
  export default ContactUs;