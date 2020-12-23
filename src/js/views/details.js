import React from "react";
import PropTypes from "prop-types";

export class Details extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		let {
			key0,
			key1,
			key2,
			key3,
			key4,
			key5,
			key6,
			key7,
			key8,
			val0,
			val1,
			val2,
			val3,
			val4,
			val5,
			val6,
			val7,
			val8
		} = this.props.location.state;
		var charInfo = this.props.location.state.character;
		return (
			<div>
				<div className="card mb-3" style={({ width: "100%" }, { height: "100%" })}>
					<div className="row g-0">
						<div className="col-md-4">
							<img src="https://i.imgflip.com/45d2y6.jpg" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body" style={{ fontSize: "25px" }}>
								<h1 className="card-title">
									{key0} {val0}
								</h1>
								<ul style={{ listStyleType: "none" }}>
									<li>
										{key1} {val1}
									</li>
									<li>
										{key2} {val2}
									</li>
									<li>
										{key3} {val3}
									</li>
									<li>
										{key4} {val4}
									</li>
									<li>
										{key5} {val5}
									</li>
									<li>
										{key6} {val6}
									</li>
									<li>
										{key7} {val7}
									</li>
									<li>
										{key8} {val8}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
Details.propTypes = {
	location: PropTypes.object,
	key0: PropTypes.string,
	key1: PropTypes.string,
	key2: PropTypes.string,
	key3: PropTypes.string,
	key4: PropTypes.string,
	key5: PropTypes.string,
	key6: PropTypes.string,
	key7: PropTypes.string,
	key8: PropTypes.string,
	val0: PropTypes.string,
	val1: PropTypes.string,
	val2: PropTypes.string,
	val3: PropTypes.string,
	val4: PropTypes.string,
	val5: PropTypes.string,
	val6: PropTypes.string,
	val7: PropTypes.string,
	val8: PropTypes.string
};
