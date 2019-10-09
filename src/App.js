import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import './StartHelping/StartHelping.css';
import StartHelping from './StartHelping/StartHelping';
import WhatWeDid from './WhatWeDid/WhatWeDid';
import Steps from './Steps/Steps';
import AboutUs from './AboutUs/AboutUs';
import WhoWeHelp from './WhoWeHelp/WhoWeHelp';
import ContactUs from './ContactUs/ContactUs';
import Registration from './Registration/Registration';

class App extends Component {

  render() {
    return (
      // <Layout>
      //     <Switch>
      //       <Route path="/checkout" component={Checkout} />
      //       <Route path="/orders" component={Orders} />
      //       <Route path="/" exact component={BurgerBuilder} />
      //     </Switch>
      //   </Layout>

      <div className="App">
       <StartHelping></StartHelping>
       <WhatWeDid></WhatWeDid>
       <Steps></Steps>
       <AboutUs></AboutUs>
       <WhoWeHelp></WhoWeHelp>
       <ContactUs></ContactUs>
       <Registration></Registration>
      </div>

      
    );
  }
}

export default App;
