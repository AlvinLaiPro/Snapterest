import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Tweet from './Tweet'

export default class extends Component {
	constructor(){
		console.log('getinitialstate');
		super();
		this.state = {
			numberOfCharactersIsIncreasing: null,
			headerText: null
		}
	}

	componentWillMount(){
		console.log('componentWillMount');
		this.setState({
			numberOfCharactersIsIncreasing: true,
			headerText: 'Latest public photo from Twitter'
		});
	}

	componentDidMount(){
		console.log('componentDidMount');
		let componentDOMRepresentation = ReactDOM.findDOMNode(this);
		console.log(componentDOMRepresentation.children[0].outerHTML);
		console.log(componentDOMRepresentation.children[1]);
	}

	render(){
		console.log('[Snapterest] StreamTweet: running render()');

		return (
			<section>
				<Header text={this.state.headerText} />
				<Tweet tweet={this.props.tweet} onImageClick={this.props.onAddTweetToCollection} />
			</section>
		)
	}
}