// MODULES
import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import Foundation from 'react-foundation';
// COMPONENTS
import Quote from './quote';
import About from './about.js';
import Player from './player.js';
// DATA
import Audio from '../data/audio_array.js';
import Quote_array from '../data/quote_array.js';


class App extends Component {
   constructor(props, context) {
         super(props, context);
         // STATE
         this.state = {
            name: 'App',
         };
   }

   render(){
      return (
         <div>
            <div className="application">
               <Row className="display">
                  <Column   large={8}>
                        <Quote Quotes={Quote_array} onClick={this.outer_click_handler}/>
                        <Player audio={Audio}/>
                        <About/>
                  </Column>
               </Row>
            </div>
         </div>
      )
   }
}

// PROPS 
App.defaultProps = {
   name:'APP',
   kind: 'Parent'
};

App.propTypes = {
   name: React.PropTypes.string.isRequired,
   kind: React.PropTypes.string
}

export default App;