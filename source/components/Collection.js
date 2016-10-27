import React, {Component} from 'react'
// import CollectionControls from './CollectionControls'
import Header from './Header'
import TweetList from './TweetList'

const ReactDOMServer = require('react-dom/server');

export default class extends Component {
	createHtmlMarkupStringOfTweetList(){
		var htmlString = ReactDOMServer.renderToStaticMarkup(
			<TweetList tweets={this.props.tweets} />
		);

		var htmlMarkup = {
			html: htmlString
		};

		return JSON.stringify(htmlMarkup);
	}

	getListOfTweetIds(){
		return Object.keys(this.props.tweets);
	}

	getNumberOfTweetsInCollection(){
		return this.getListOfTweetIds().length;
	}

	render(){
		var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection;

		if(numberOfTweetsInCollection > 0){
			var tweets = this.props.tweets;
			var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
			var removeAllTweetsFromCollection = this.props.onRemoveAllTweetFromCollection;
			var hanldeRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

			return(
				<div>
					/*<CollectionControls numberOfTweetsInCollection={numberOfTweetsInCollection}
						htmlMarkup={htmlMarkup}
						onRemoveTweestFromCollection={removeAllTweetsFromCollection} />*/

					<TweetList tweets={tweets} onRemoveTweetFromCollection={hanldeRemoveTweetFromCollection} />
				</div>

			)
		}

		return <Header text="your collection is empty" />;
	}
}