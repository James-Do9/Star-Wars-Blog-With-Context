import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { Context } from "../store/appContext";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
export const TopNavbar = () => {
	return (
		<Navbar className="navbar backgroundImg bg-light mb-3 fixed-top">
			<Navbar.Brand href="#home">
				<Nav.Link href="/">
					<div className="centerImg">
						<img
							src="https://lh3.googleusercontent.com/proxy/T9M7Zx_l2j0T6fOHwv21gDd7RUYMYpNrBadVV-OZy4gUwusjfaGejezHjFIAB22DX9gub8__kcU66azdrsJd5fUoy2-nmNdjCPvxf8UMSiqT8rMEG3R7PAQ-0RwdAlTVbuv04MlI"
							alt="star-wars-font"
							border="0"
							style={{
								height: "70px",
								width: "300px"
							}}
						/>
					</div>
				</Nav.Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto" />
				<Form inline>
					<div className="favoritesBg">
						<Context.Consumer>
							{({ store, actions }) => (
								<NavDropdown
									title={
										<span className="colorText ">
											Favorites{" "}
											<span className="badge badge-light">{store.favorites.length}</span>
										</span>
									}
									id="basic-nav-dropdown">
									{store.favorites.map((item, index) => {
										return (
											<NavDropdown.Item key={index} href="">
												<li className="dropDownColor">
													<Link
														to={{ pathname: "/details/" + item.uid, state: item.details }}>
														{item.details.val0}{" "}
													</Link>
													<span className="float-right">
														<i
															className="fas fa-times"
															onClick={() => actions.deleteFromFavorites(item)}
														/>
													</span>
												</li>
											</NavDropdown.Item>
										);
									})}
								</NavDropdown>
							)}
						</Context.Consumer>
					</div>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-danger">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
};
