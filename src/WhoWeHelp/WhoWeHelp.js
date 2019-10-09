import React, { Component } from 'react';
import './WhoWeHelp.css';

class WhoWeHelp extends Component {
    render () {
      return (
        <div className="WhoWeHelp">
        <div className="FirstPlan">
            <p>Komu pomagamy</p>
                <div className="Decoration"></div>
                <div className="WeHelp">
                    <ul>
                      <li>Fundacjom</li>
                      <li>Organizacjom pozarządowym</li>
                      <li>Lokalnym zbiórką</li>
                    </ul>
                  </div>
            <div className="InBase">
                w naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
            </div>
        </div>
        <div className="TopBot">
            <div className="LeftBot">
                <div>
                    <div>Fundacja "Dbam o Zdrowie"
                    <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </div>
                </div>
                <div>
                    <div>Fundacja "Dla dzieci"
                    <p>Cel i misja: Pomoc dzieciom z ubogich rodzin</p>
                    </div>
                </div>
                <div>
                    <div>
                    Fundacja "Bez domu"
                    <p>Cel i misja: Pomoc dla osób nieposiadającyh miejsca zamieszkania</p>
                    </div>
                </div>
            </div>
            
            <div className="RightBot">
                <div>
                    <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                </div>
                <div>
                    <p>ubrania, meble, zabawki</p>
                </div>
                <div>
                    <p>ubrania, jedzenie, ciepłe koce</p>
                </div>
            </div>
        </div>
        <div className="Pages">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
        </div>
      );
    }
  }
  
  export default WhoWeHelp;