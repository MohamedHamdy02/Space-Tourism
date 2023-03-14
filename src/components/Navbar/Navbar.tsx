import logo from "../../assets/shared/logo.png";
import SideNav from "./SideNav";
import { NavLink } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="nav-container">
      <div className="nav-container-image">
        <img src={logo} alt="logo" />
      </div>
      <div className="list-container">
        <ol className="menu-list">
          <NavLink to="/">
            <li>
              <span>00</span>&nbsp;Home
            </li>
          </NavLink>
          <NavLink to="/destination">
            <li>
              <span>01</span>&nbsp;Destination
            </li>
          </NavLink>
          <NavLink to="/crew">
            <li>
              <span>02</span>&nbsp;Crew
            </li>
          </NavLink>
          <NavLink to="/technology">
            <li>
              <span>03</span>&nbsp;Technology
            </li>
          </NavLink>
        </ol>
      </div>
      <div className="mobile-menu">
        <SideNav />
      </div>
    </div>
  );
};

export default Navbar;
