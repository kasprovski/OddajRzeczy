import React, { Component } from 'react';
import './StartHelping.css';


class StartHelping extends Component {
    render () {
      return (
        <div className="StartHelping">

              <div className ="LeftSide"></div>
              <div className="RightSide">
                  <div className="TopButtons">
                      <div><a href="LogIn/index.html">Zaloguj się</a></div>
                      <div><a href="Registration/index.html">Załóż konto</a></div>
                  </div>
                  <div className="BotButtons">
                    <ul>
                      <li>Start</li>
                      <li>O co chodzi?</li>
                      <li>O nas</li>
                      <li>Fundacja i organizacje</li>
                      <li>Kontakt</li>
                    </ul>
                  </div>
                <div>
                  <div className="BotText">
                    Zacznij pomagać!<br></br>
                    Oddaj niechciane rzeczy w zaufane ręce!
                    <div className="Decoration"></div>
                  </div>
                  <div className="DeepButtons">
                    <div>Oddaj rzeczy</div>
                    <div>Zorganizuj zbiórkę</div>
                  </div>
                </div>
              </div>

        </div>
      );
    }
  }
  
  export default StartHelping;