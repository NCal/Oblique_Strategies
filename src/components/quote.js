import React, { Component } from 'react';
import { Row, Column } from 'react-foundation';
import Foundation from 'react-foundation';
import $ from 'jQuery';
class Quote extends Component {
	constructor(props) {
		super(props);
			this.click_handler = this.click_handler.bind(this);
			this.state ={
				new_quote: 'Click'
			};
	}
	componentDidMount() {
		// console.log(this.props.name+' mounted');
	}
	click_handler(e){
		let self = this;
		let rand = Math.floor(Math.random()* this.props.Quotes.length);
		let new_quote = this.props.Quotes[rand];
		// console.log(rand);
		// this.animate_quote(new_quote, self);
		self.setState({new_quote: new_quote});
	}
	render() {
		return (<div>
					<div className="container">
					  <div className="quote-row">
					    <Column className="large-centered right" large={4} medium={4} small={4} centerOnSmall centerOnMedium centerOnLarge>
					      <div className="pin-solid icon" title="Add Strategy to Clipboard"></div>
					      <div className="quote_container">
					      	<p onClick={this.click_handler} className="quote animated infinite pulse">{this.state.new_quote}</p>
					      </div>
					    </Column>
					  </div>
					</div>
				</div>
		)
	}
}

Quote.defaultProps = {
	name: 'Quote'
};


export default Quote;