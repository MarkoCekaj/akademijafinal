import React from "react";
import { t } from "react-switch-lang";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import Logo from "./img/logo.svg";
import AmplLogo from './img/amplitudo.svg'
import ClientsImg from "./img/groups_black_24dp.svg";
import ReservationImg from './img/bookmark_add_black_24dp.svg'
import VehicleImg from './img/directions_car_black_24dp.svg'
const Sidebar = ({ toggleSidebarExtra }) => {
	const navigation = [
		{
			name: "clients",
			img: ClientsImg,
			link: "/clients",
			tooltip: t("sidebar.clients"),
			alt: "clients",
		},
		{
			name: "reservations",
			img: ReservationImg,
			link: "/requests",
			tooltip: t("sidebar.reservations"),
			alt: "reservations",
		},
		{
			name: "vehicles",
			img: VehicleImg,
			link: "/vehicles",
			tooltip: t("sidebar.vehicles"),
			alt: "vehicles",
		},
	];

	return (
		<div className="sidebar">
			<div className="logo">
				<Link to="/dashboard">
					<img src={AmplLogo} alt="logo" />
				</Link>
			</div>
			{navigation.map((item, idx) => (
				<NavLink
					to={item.link}
					className="nav-tooltip-container links"
					activeClassName="active"
					key={idx}>
					<img src={item.img} alt={item.alt} />
					<div className="tooltip-text">
						<span>{item.tooltip}</span>
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default Sidebar;
