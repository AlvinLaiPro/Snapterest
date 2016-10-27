import React, {Component} from 'react'
import style from '../style.scss'

export default class extends Component {
	static defaultProps = {
		text: 'Default header'
	}

	render(){
		return (
			<h2 className={style.header}>{this.props.text}</h2>
		)
	}
}
