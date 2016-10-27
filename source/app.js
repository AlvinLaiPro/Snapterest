import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// import bootstrap from 'bootstrap';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
// var bootstrap = require('bootstrap');
console.log(bootstrap)
// import style from './style.scss';
import Application from './components/Application';
/*class BtnElement extends Component {
	render(){
		return (
			<button className={[bootstrap.btn, bootstrap['btn-default']].join(' ')} onClick={this.props.toggleEvent}>
			toggle list
			</button>
		)
	}
}

class List extends Component {
	constructor(props, context){
		super(props, context);

		this.state = {
			isHidden: false
		}
	}
	_handleClick = (e) => {
		this.setState({
			isHidden: !this.state.isHidden
		})
	}
	render(){
		if(this.state.isHidden){
			return null
		}
		return (
			<div>
			<ul className={bootstrap['list-group']}>
				<li className={bootstrap['list-group-item']}>1</li>
				<li className={bootstrap['list-group-item']}>2</li>
				<li className={bootstrap['list-group-item']}>3</li>
			</ul>
			<BtnElement toggleEvent={this._handleClick}/>
			</div>
		)
	}
}*/

ReactDOM.render(<Application />,document.getElementById('main'));