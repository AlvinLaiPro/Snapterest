import React, {Component} from 'react'
import Stream from './Stream'
import Collection from './Collection'
import bootstrap from 'bootstrap'

export default class Application extends Component {
	constructor(){
		super()
		this.state = {
			collectionTweets: {}
		}
	}

	addTweetToCollection = (tweet) => {
		let collectionTweets = this.state.collectionTweets;

		collectionTweets[tweet.id] = tweet;

		this.setState({
			collectionTweets: collectionTweets
		})
	}

	removeTweetFromCollection = (tweet) => {
		let collectionTweets = this.state.collectionTweets;

		delete collectionTweets[tweet.id];

		this.setState({
			collectionTweets: collectionTweets
		});
	}

	removeAllTweetsFromCollection = ()=> {
		this.setState({
			collectionTweets: {}
		});
	}

	render() {
		return (
			<div className={bootstrap['container-fluid']}>
				<div className={bootstrap['row']}>
					<div className={[bootstrap['col-md-4'],bootstrap['text-center']].join(' ')}>
						<Stream onAddTweetToCollection={this.addTweetToCollection} />
					</div>
					<div className={bootstrap['col-md-8']}>
						<Collection tweets={this.state.collectionTweets}
							onRemoveTweetFromCollection={this.removeTweetFromCollection}
							onRemoveAllTweetFromCollection={this.removeAllTweetsFromCollection} />
					</div>
				</div>
			</div>
		)
	}
}