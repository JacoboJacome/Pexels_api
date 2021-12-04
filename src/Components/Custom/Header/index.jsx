import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//Actions
import { handleLogoutAction } from "../../../redux/actions/login.action";

//Styles
import "./Header.styles.css";

const Header = () => {
  //Redux
  const dispatch = useDispatch();

  return (
    <header
      className={`h-16 bg-teal-600 flex justify-beetwen mx-auto items-center mi-clase`}
    >
      <h2 className="ml-4 text-xl tablet:text-3xl	text-white hover:text-gray-200">
        <Link to="/">Pexels API</Link>
      </h2>

      <ul className="w-3/4 flex justify-evenly items-center px-5 text-white  font-semibold">
        <li>
          <Link to="/images" className="hover:text-gray-200 mx-1">Imágenes</Link>
        </li>
        <li>
          <Link to="/videos" className="hover:text-gray-200 mx-1">Videos</Link>
        </li>
        <li>
          <Link to="/profile" className="hover:text-gray-200 mx-1">Perfil</Link>
        </li>
        <li>
          <button onClick={() => dispatch(handleLogoutAction())}><Link to="/login">Logout</Link></button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
