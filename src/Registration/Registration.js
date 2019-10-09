import React, { Component } from 'react';
import './Registration.css'

class Registration extends Component {
    render () {
      return (
        <div className="Registration">
            <div>
                <div className="Close">
                    <div className="Cross1"></div>
                    <div className="Cross2"></div>
                </div>
                <div className="LogReg">
                    <div className="Login">
                    <div>
                        Masz już konto? Zaloguj się!
                    </div >
                        <div className="Decoration"></div>
                        <input placeholder="    Login"></input>
                        <input type="password" placeholder="    Hasło"></input>
                        <div><button>Zaloguj</button></div>
                        <div>Zapomniałeś hasła? <a href="Pasword_reset.html">kliknij tu</a></div>
                    </div>
                    <div className="Reg">
                    <div>
                        Chcesz mieć konto? Zarejestruj się!
                    </div>
                        <div className="Decoration"></div>
                        <input placeholder="    Login"></input>
                        <input type="email" placeholder="    Email"></input>
                        <input type="password" placeholder="    Hasło"></input>
                        <input type="password" placeholder="    Powtórz hasło"></input>
                        <div><button>Zarejestruj</button></div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  
export default Registration;