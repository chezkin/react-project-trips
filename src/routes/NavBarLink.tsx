import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const NavBarLink = ({ to, children }: { to: string; children: ReactNode }) => {
    return (
        <Link className="nav-link" to={to}>
            {children}
        </Link>
    );
}
NavBarLink.defaultProps = {
    color: "white",
    textDecoration: "none"
}
export default NavBarLink;





