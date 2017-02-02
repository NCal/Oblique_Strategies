import React, { Component } from 'react';
import $ from 'jQuery';


class About extends Component{
	constructor(props) {
		super(props);
		
	}
	componentDidMount() {
		console.log('hello');
	}
	Hide(){
		$('.about_container').slideUp('slow');
		setTimeout(function(){$('.tab').slideDown('slow');}, 200);
	}
	Show(){
		$('.about_container').slideDown('slow');
		$('.tab').slideUp('slow');
	}
	render() {
		return (<div>
			<div className="tab" onClick={this.Show} style={{color:'#fff'}}>?</div>
			<div className="about_container" onClick={this.Hide}>
			<p>
				<i>Oblique Strategies</i> (subtitled Over One Hundred Worthwhile Dilemmas) 
				is a deck of printed cards in a 
				black container box, created by Brian Eno and Peter Schmidt and first 
				published in 1975. Each card offers a challenging constraint intended 
				to help artists break creative blocks by 
				encouraging lateral thinking.

				Learn more <a href="https://en.wikipedia.org/wiki/Oblique_Strategies" target="_blank">here</a>
			</p>
		</div>
		</div>)
	}
}

export default About;