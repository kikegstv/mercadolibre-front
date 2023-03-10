import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import logo from "./../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const { search, setSearch, getProducts } = useContext(ProductContext);

  const handleSubmit = (e) => {
    getProducts([]);
    e.preventDefault();
    setSearch(search);
  };

  return (
    <header className="navbar">
      <nav className="navbar__container">
        <ul className="navbar__container__list">
          <NavLink to={`/`}>
            <img
              src={logo}
              alt="Descripción de la imagen"
              title="Título de la imagen"
            />
          </NavLink>
        </ul>

        <form onSubmit={handleSubmit} className="navbar__container__search">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Nunca dejes de buscar..."
            value={search}
            autoFocus
          />

          <button type="submit">
            <NavLink to={`/items?q=${search}`}>
              <div className="search icon"></div>
            </NavLink>
          </button>
        </form>
      </nav>
    </header>
  );
}

export default NavBar;

/* <li>Home</li>
        <li>About</li> */
