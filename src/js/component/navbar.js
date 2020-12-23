import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
export const Navbar = () => {
	return (
		<div>
			<nav className="navbar backgroundImg bg-light mb-3 fixed-top">
				<Link to="/">
					<div>
						<img
							src="https://fontmeme.com/permalink/201222/befd2ab7c18a525fbe96763c8b0f383e.png"
							alt="star-wars-font"
							border="0"
						/>
					</div>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};
