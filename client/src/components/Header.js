import React, {Component} from 'react';
import { connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Header extends Component{
	renderContent(){
		switch(this.props.auth){
			case null:
				return 'loading';
			case false:
				return <li><a href="/auth/google">Login with Google</a></li>;

			case true:
				return <li><a href="/api/logout">logout</a></li>;
					
			default:
				return <li><a href="/api/logout">logout</a></li>;
		}
	}
	render(){
		console.log(this.props);
		return(
			<nav>
				<div className="nav-wrapper">
				      <Link to={this.props.auth? '/surveys' : '/'} className="left brand-logo">KEMAILY</Link>
				      <ul className="right hide-on-med-and-down">
				        {this.renderContent()}
				      </ul>	
				</div>			
			</nav>

		);
	}
}

function mapStateToProps({auth}){
	return {auth};
}

export default connect(mapStateToProps)(Header);