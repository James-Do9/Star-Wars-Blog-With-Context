import React from "react";
import { Link } from "react-router-dom";
import "../../styles/card.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export class PlanetCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			planetInfo: null,
			key0: null,
			key1: null,
			key2: null,
			key3: null,
			key4: null,
			key5: null,
			key6: null,
			key7: null,
			key8: null,
			val1: null,
			val2: null,
			val3: null,
			val4: null,
			val5: null,
			val6: null,
			val7: null,
			val8: null
		};
	}
	componentDidMount() {
		fetch("https://www.swapi.tech/api/planets/" + this.props.propUid)
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(jsonifiedResponse =>
				this.setState({
					planetInfo: jsonifiedResponse.result.properties,
					key0: "Name: ",
					key1: "Diameter: ",
					key2: "Rotation Period: ",
					key3: "Orbital Period: ",
					key4: "Gravity: ",
					key5: "Population: ",
					key6: "Climate: ",
					key7: "Terrain: ",
					key8: "Surface Water: ",
					val0: jsonifiedResponse.result.properties.name,
					val1: jsonifiedResponse.result.properties.diameter,
					val2: jsonifiedResponse.result.properties.rotation_period,
					val3: jsonifiedResponse.result.properties.orbital_period,
					val4: jsonifiedResponse.result.properties.gravity,
					val5: jsonifiedResponse.result.properties.population,
					val6: jsonifiedResponse.result.properties.climate,
					val7: jsonifiedResponse.result.properties.terrain,
					val8: jsonifiedResponse.result.properties.surface_water
				})
			)
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}
	render() {
		return (
			<div className="col-3 mx-auto" style={{ margin: "10px", display: "inline-block" }}>
				{this.state.planetInfo ? (
					<div className="card" style={{ margin: "10px" }}>
						<img
							className="card-img-top border-bottom border-danger"
							src="https://i.imgflip.com/45d2y6.jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h5 className="card-title text-center">{this.state.planetInfo.name}</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar
								facilisis justo mollis, auctor consequat urna.
							</p>
							<div className="d-flex justify-content-around">
								<Link
									to={{
										pathname: "/details/" + this.props.propUid,
										state: this.state
									}}
									className="btn btn-primary">
									Learn more!
								</Link>
								<Context.Consumer>
									{({ store, actions }) => (
										<button
											className="btn btn-light"
											type="button"
											onClick={() => actions.addToFavorites(this.props.propUid, this.state)}>
											<i className="fas fa-heart" style={{ color: "red" }} />
										</button>
									)}
								</Context.Consumer>
							</div>
						</div>
					</div>
				) : null}
			</div>
		);
	}
}
PlanetCard.propTypes = {
	propUid: PropTypes.string
};
