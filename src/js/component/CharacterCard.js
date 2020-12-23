import React from "react";
import { Link } from "react-router-dom";
import "../../styles/card.scss";
import PropTypes from "prop-types";

export class CharacterCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			characterInfo: null,
			key0: null,
			key1: null,
			key2: null,
			key3: null,
			key4: null,
			key5: null,
			key6: null,
			key7: null,
			val1: null,
			val2: null,
			val3: null,
			val4: null,
			val5: null,
			val6: null,
			val7: null
		};
	}
	componentDidMount() {
		fetch("https://www.swapi.tech/api/people/" + this.props.propUid)
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(jsonifiedResponse => {
				this.setState({
					characterInfo: jsonifiedResponse.result.properties,
					key0: "Name: ",
					key1: "Mass: ",
					key2: "Hair Color: ",
					key3: "Skin Color: ",
					key4: "Eye Color: ",
					key5: "Birth Year: ",
					key6: "Gender: ",
					val0: jsonifiedResponse.result.properties.name,
					val1: jsonifiedResponse.result.properties.mass,
					val2: jsonifiedResponse.result.properties.hair_color,
					val3: jsonifiedResponse.result.properties.skin_color,
					val4: jsonifiedResponse.result.properties.eye_color,
					val5: jsonifiedResponse.result.properties.birth_year,
					val6: jsonifiedResponse.result.properties.gender
				});
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}
	render() {
		return (
			<div className="col-3 mx-auto" style={{ margin: "10px" }}>
				{this.state.characterInfo ? (
					<div className="card" style={({ width: "18rem" }, { margin: "10px" })}>
						<img
							className="card-img-top border-bottom border-danger"
							src="https://i.imgflip.com/45d2y6.jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title text-center">{this.state.val0}</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar
								facilisis justo mollis, auctor consequat urna.{" "}
							</p>
							<Link
								to={{
									pathname: "/details/" + this.props.propUid,
									state: this.state
								}}
								className="btn btn-primary">
								Learn more!
							</Link>
						</div>
					</div>
				) : null}
			</div>
		);
	}
}
CharacterCard.propTypes = {
	propUid: PropTypes.string
};
