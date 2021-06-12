import "./Navigation.css";
import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation() {
	return (
		<nav>
			<Link className="nav-item" to="/">
				Home
			</Link>
			<Link className="nav-item" to="/about">
				About
			</Link>
			<Link className="nav-item" to="/contact">
				Contact
			</Link>
		</nav>
	);
}

export default withRouter(Navigation);
