import React, { useEffect, useState } from "react";
import { NavLink, useHistory, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { t } from "react-switch-lang";
import "./Navbar.scss";
import LogoutIcon from "./img/log-out.svg";

import LanguageOptions from './LanguageOptions'


import styled from "styled-components";
import { Nav } from "react-bootstrap";

// const {user} = useUserContext();

const NavbarTop = (props) => {
	const history = useHistory()
	const logout = () => {
		localStorage.removeItem('jwt-token');
		// setAuthTokens('');
		history.push('/');
	}
	const lang = localStorage.getItem('lang');

	function handleSetLanguage(key) {
		localStorage.setItem('lang', key);
		window.location.reload();
	}

	return (
		<Navbar bg="light" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">

				<div className="d-flex justify-content-end flex-wrap w-100 dd-navbar-container">
					<div className="d-flex dd-navbar-items">
						<LanguageOptions />
						<div
							className="dropdown-menu-right basic-nav-dropdown2 dropdownNav mx-0 ml-lg-3 dropdown nav-item">
							<NavDropdown title={`${t('navbar.add')}`}>
								<NavDropdown.Item>
									<Nav.Link as={Link} to="/addNewUser" >{t('navbar.addNewUser')} </Nav.Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Nav.Link as={Link} to="/addNewVehicle" >{t('navbar.addNewVehicle')} </Nav.Link>
								</NavDropdown.Item>
								<NavDropdown.Item>
									<Nav.Link as={Link} to="/addNewReservation" >{t('navbar.addNewReservation')} </Nav.Link>
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title='hi user'>
								<NavDropdown.Item onClick={logout}>
									<span className="profile-link-text" id="logout-link-text">
										{t('navbar.logout')}<img src={LogoutIcon} alt="" />
									</span>
								</NavDropdown.Item>
							</NavDropdown>
						</div>

					</div>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarTop;
