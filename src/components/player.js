import React, { Component } from 'react';
import $ from 'jQuery';
class Player extends Component {
	constructor(props) {
		super(props);
		this.play_audio = this.play_audio.bind(this);
		this.next_audio = this.next_audio.bind(this);

		this.state = {
			current_stream_num: 0,
			button_title: 'Pause',
			stream: 'http://www.freesound.org/data/previews/327/327038_5650790-lq.mp3',
			audio_name: 'Crickets'
		};
	}

	componentDidMount() {
		var width = $(window).width(); 
		// console.log(width);
		if (width <600){
			var sound = document.querySelector('.audio_feed');
			sound.pause();
			this.setState({button_title: 'Play'});
		}
	}

	play_audio(){
		if (this.state.button_title === 'Play'){
			// console.log('play_audio');
			this.setState({button_title: 'Pause'});
			var sound = document.querySelector('.audio_feed');
			sound.play();
		} else {
			var sound = document.querySelector('.audio_feed');
			sound.pause();
			this.setState({button_title: 'Play'});
		}	
	}

	next_audio(){
		// console.log('next audio');
		var sound = document.querySelector('.audio_feed');
		let next_stream = (this.state.current_stream_num +=1);
		// console.log('next_stream', next_stream);
		if (next_stream === 4){
			next_stream = 0;
		}
		sound.pause();

		this.setState({	
			current_stream_num: next_stream,
			stream: this.props.audio[next_stream].src,
			audio_name:  this.props.audio[next_stream].name
		});

		setTimeout(function(){
			// console.log(this.state);
			sound.play();
		},100);
		
	}
	render() {
			return (<div>
				<div>
					<svg onClick={this.play_audio} className="ear_svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						 width="40px" height="40px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve">
						<path fill="#222222" d="M17,20c-0.29,0-0.561-0.061-0.76-0.15c-0.711-0.369-1.211-0.879-1.711-2.379c-0.51-1.561-1.469-2.291-2.389-3
						c-0.79-0.611-1.61-1.24-2.32-2.531C9.29,10.98,9,9.93,9,9c0-2.8,2.2-5,5-5s5,2.2,5,5h2c0-3.93-3.07-7-7-7c-3.93,0-7,3.07-7,7
						c0,1.26,0.38,2.65,1.07,3.9c0.91,1.649,1.98,2.479,2.85,3.149c0.81,0.62,1.39,1.07,1.71,2.05c0.601,1.82,1.37,2.84,2.729,3.551
						C15.87,21.88,16.43,22,17,22c2.21,0,4-1.79,4-4h-2C19,19.1,18.1,20,17,20z M7.64,2.64L6.22,1.22C4.23,3.21,3,5.96,3,9
						s1.23,5.79,3.22,7.779l1.41-1.409C6.01,13.74,5,11.49,5,9S6.01,4.26,7.64,2.64z M11.5,9c0,1.38,1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5
						S15.38,6.5,14,6.5S11.5,7.62,11.5,9z"/>
					</svg>
				</div>
						<div className="player_container">
							<span className="audio_name">{this.state.audio_name}</span>
							<audio className="audio_feed" src={this.state.stream}  name={this.state.audio_name} autoPlay loop></audio>
							<div className="play_button button" onClick={this.play_audio}>{this.state.button_title}</div>
							<div className="next_button button" onClick={this.next_audio} style={{position: 'relative', marginLeft: 0}}> Next</div>
						</div> 
				</div>)
			}  
			
}

Player.defaultProps = {
	name: 'Player'
};


export default Player;