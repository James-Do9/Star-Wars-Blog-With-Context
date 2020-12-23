import React from "react";
import "../../styles/home.scss";
import { CharacterCard } from "../component/CharacterCard";
import { PlanetCard } from "../component/PlanetCard";
//import PropTypes from "prop-types";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [],
			planet: []
		};
	}
	componentDidMount() {
		fetch("https://www.swapi.tech/api/people/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(jsonifiedResponse => this.setState({ people: jsonifiedResponse.results }))
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
		fetch("https://www.swapi.tech/api/planets/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(jsonifiedResponse => this.setState({ planet: jsonifiedResponse.results }))
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}
	render() {
		return (
			<div>
				<div className="container">
					<h1 className="text-center">Characters</h1>
					<div className="row">
						{this.state.people.map((character, index) => {
							return <CharacterCard key={character.uid} propUid={character.uid} />;
						})}
					</div>
				</div>
				<div className="container">
					<h1 className="text-center">Planets</h1>
					<div className="row">
						{this.state.planet.map((planet, index) => {
							return <PlanetCard key={planet.uid} propUid={planet.uid} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}
