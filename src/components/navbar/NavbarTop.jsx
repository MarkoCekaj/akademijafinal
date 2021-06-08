import React, { useEffect, useState } from "react";
import { NavLink, useHistory, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { t } from "react-switch-lang";
import "./Navbar.scss";
import LogoutIcon from "./img/log-out.svg";
import AmplLogo from './img/amplitudo.svg'
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
			<Navbar.Brand ><Link to="/home"><img src={AmplLogo} alt="" /></Link></Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<NavDropdown title={t('navbar.add')} id="basic-nav-dropdown">
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
					<LanguageOptions />
					<NavDropdown.Item onClick={logout} >
						<span className="profile-link-text" id="logout-link-text" >
							{t('navbar.logout')}<img src={LogoutIcon} alt="" />
						</span>
					</NavDropdown.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavbarTop;