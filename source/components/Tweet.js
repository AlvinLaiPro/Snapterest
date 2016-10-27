import React, {Component} from 'react'

export default class extends Component {
	static propTypes = {
		tweet: function(properties, propertyName, componentName){
			var tweet = properties[propertyName];

			if(!tweet){
				return new Error('Tweet must be set')
			}

			if(!tweet.media){
				return new Error('Tweet must have an image')
			}
		},
		onImageClick: React.PropTypes.func
	}

	handleImageClick(){
		var tweet = this.props.tweet;
		var onImageClick = this.props.onImageClick;

		if(onImageClick){
			onImageClick(tweet);
		}
	}

	render(){
		var tweet = this.state.tweet;
		var tweetMediaUrl = tweet.media[0].url;

		return (
			<div className={style.tweet}>
				<img src={tweetMediaUrl} onClick={this.handleImageClick} className={style.img} />
			</div>
		)
	}
}