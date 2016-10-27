import React, {Component} from 'react'
import StreamTweet from './StreamTweet'
import Header from './Header'
const SnapkiteStreamClient = require('snapkite-stream-client');

export default class extends Component {
	constructor(){
		super();

		this.state = {
			tweet: null
		}
	}

	componentDidMount = () => {
		console.log('SnapkiteStreamClient')
		SnapkiteStreamClient.initializeStream(this.handleNewTweet);
	}

	componentWillUnmount(){
		SnapkiteStreamClient.destroyStream();
	}

	handleNewTweet = (tweet) => {
		console.log('handleNewTweet')
		this.setState({
			tweet: tweet
		});
	}

	render(){
		let tweet = this.state.tweet;

		if(tweet){
			return (
				<StreamTweet tweet={tweet} onAddTweetToCollection={this.props.onAddTweetToCollection} />
			)
		}

		return (
			<Header text="Waiting for public photos from Twitter..." />
		)
	}
}
