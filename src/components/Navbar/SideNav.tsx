import { Link } from "react-router-dom";
import iconClose from "../../assets/shared/icon-close.svg";
import mobileMenu from "../../assets/shared/icon-hamburger.svg";
import { useState } from "react";

type Props = {};

const SideNav = (props: Props) => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false);

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      {openMenu ? (
        <div className="mobile-container">
          <div className="mobile-container-img">
            <img src={iconClose} alt="closeIcon" onClick={openMenuHandler} />
          </div>
          <ul className="mobile-nav-list" onClick={openMenuHandler}>
            <Link to="/">
              <li>
                <span>00</span> Home
              </li>
            </Link>
            <Link to="/destination">
              <li>
                <span>01</span> Destination
              </li>
            </Link>
            <Link to="/crew">
              <li>
                <span>02</span> Crew
              </li>
            </Link>
            <Link to="/technology">
              <li>
                <span>03</span> Technology
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        <img src={mobileMenu} alt="closeIcon" onClick={openMenuHandler} />
      )}
    </>
  );
};

export default SideNav;
