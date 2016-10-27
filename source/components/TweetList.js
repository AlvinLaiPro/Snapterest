import React, {Component} from 'react'
import Tweet from './Tweet'
import style from '../style.scss'

export default class extends Component {
	getListOfTweetIds(){
		return Object.keys(this.props.tweets);
	}

	getTweetElement = (tweetId) => {
		var tweet = this.props.tweets[tweetId];
		var hanldeRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;
		var tweetElement;

		if(hanldeRemoveTweetFromCollection){
			tweetElement = (
				<Tweet tweet={tweet}
					onImageClick={hanldeRemoveTweetFromCollection} />
			)
		}
		else{
			tweetElement = <Tweet tweet={tweet} />;
		}

		return <li className={style.item} key={tweet.id}>{tweetElement}</li>;
	}

	render(){
		var tweetElements = this.getListOfTweetIds().map(this.getTweetElement);

		return(
			<ul className={style.list}>
				{tweetElements}
			</ul>
		)
	}
}