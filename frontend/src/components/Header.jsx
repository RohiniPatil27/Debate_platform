import { Link, NavLink, useLocation } from "react-router";
import { useSelector } from "react-redux";

import { Logo } from "../static/images";
import LogoutBtn from "./LogoutBtn";

const navLinks = [
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Our Activities",
    to: "/activities",
  },
  {
    label: "Get Involved",
    to: "/get-involved",
  },
];

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header
      className={
        isHome
          ? "bg-transparent py-4 rounded-b-3xl absolute top-0 left-0 w-full z-50"
          : "bg-black py-4 rounded-b-3xl"
      }
    >
      <div className="container">
        <div className="flex items-center justify-between gap-5">
          <Link to="/">
            <img src={Logo} alt="Debate" />
          </Link>

          <ul className="flex justify-end items-center gap-10">
            {navLinks.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className="font-semibold text-white">
                  {item.label}
                </NavLink>
              </li>
            ))}
            {isAuthenticated ? (
              <li className="flex items-end gap-3">
                <NavLink
                  to="/profile"
                  className="font-semibold border border-solid border-white text-white bg-black rounded-lg rounded-br-none px-4 py-2 transition duration-500 hover:bg-white hover:text-black"
                >
                  Profile
                </NavLink>

                <LogoutBtn />
              </li>
            ) : (
              <li>
                <NavLink
                  to="/get-started"
                  className="font-semibold border border-solid border-white bg-white rounded-lg rounded-br-none px-4 py-2 transition duration-500 hover:bg-black hover:text-white"
                >
                  Get Started
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
