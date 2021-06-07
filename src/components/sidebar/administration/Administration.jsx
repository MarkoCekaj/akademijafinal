import React from "react";
import {t} from "react-switch-lang";
import {NavLink} from "react-router-dom";
import {useShowToRoles} from "../../../utils/showToRole";

const Administration = () => {
	const navigation = [
		useShowToRoles("hr", "oadmin")
			? {
					name: t("pageTitle.employees"),
					link: "/employees",
					tooltip: t("pageTitle.employees"),
			  }
			: null,
		useShowToRoles("hr", "oadmin")
			? {
					name: t("pageTitle.employeeDays"),
					link: "/employee-days",
					tooltip: t("pageTitle.employeeDays"),
			  }
			: null,
		useShowToRoles("admin")
			? {
					name: t("pageTitle.roles"),
					link: "/roles",
					tooltip: t("pageTitle.roles"),
			  }
			: null,
		useShowToRoles("hr", "oadmin")
			? {
					name: t("pageTitle.nonWorkingDays"),
					link: "/non-working-days",
					tooltip: t("pageTitle.nonWorkingDays"),
			  }
			: null,
		useShowToRoles("hr", "oadmin")
			? {
					name: t("pageTitle.clientRoles"),
					link: "/client-roles",
					tooltip: t("pageTitle.clientRoles"),
			  }
			: null,
		useShowToRoles("hr", "admin", "oadmin")
			? {
					name: t("pageTitle.documents-templates"),
					link: "/documents-templates",
					tooltip: t("pageTitle.documents-templates"),
			  }
			: null,
		useShowToRoles("admin", "oadmin")
			? {
					name: t("pageTitle.request-types"),
					link: "/request-types",
					tooltip: t("pageTitle.request-types"),
			  }
			: null,
		useShowToRoles("admin", "oadmin")
			? {
					name: t("pageTitle.departments"),
					link: "/departments",
					tooltip: t("pageTitle.departments"),
			  }
			: null,
		useShowToRoles("admin")
			? {
					name: t("pageTitle.role-permissions"),
					link: "/role-permissions",
					tooltip: t("pageTitle.rolePermissions"),
			  }
			: null,
		useShowToRoles("admin")
			? {
					name: t("pageTitle.companies"),
					link: "/companies",
					tooltip: t("pageTitle.companies"),
			  }
			: null,
	].filter((x) => x !== null);

	return (
		<div className="administration">
			{navigation.map((item, idx) => (
				<NavLink
					activeClassName="active"
					className="administration-links links"
					to={item.link}
					key={idx}>
					{item.name}
				</NavLink>
			))}
		</div>
	);
};

export default Administration;
