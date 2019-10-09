import React, { Component } from 'react';
import './Steps.css';

class Steps extends Component {
    render () {
      return (
        <div className="Steps">
            <p>wystarczą 4 proste kroki</p>
            <div className="Decoration"></div>
            <div className="Middle"> 
              <div>
                <div className="Idea"></div>
                <p className="OrderDescription">Wybierz rzeczy</p>
                ubrania, zabawki, sprzęt i inne
              </div>
              <div>
                <div className="Arrow"></div>
                <p className="OrderDescription">Spakuj je</p>
                skorzystaj z worków na śmieci
              </div>
              <div>
                <div className="Googles"></div>
                <p className="OrderDescription">Zdecyduj komu chcesz pomóc</p>
                wybierz zaufane miejsce
              </div>
              <div>
                <div className="SwitchArrow"></div>
                <p className="OrderDescription">Zamów kuriera</p>
                kurier przyjdzie w dogodnym terminie
              </div>
            </div>
            <div className= "DeepButtons">
              <div>załóż konto</div>
            </div>
        </div>
      );
    }
  }
  
  export default Steps;