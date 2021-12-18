import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import CartWidget from "./CartWidget";
import { useCartContext } from "../context/CartContext";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  const [active, setActive] = useState(0);
  const { itemCount } = useCartContext();
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <LinkContainer to="/">
            <Navbar.Brand href="#" to="/">
              Gastronomia PH Ecommerce
            </Navbar.Brand>
          </LinkContainer>
        </div>
        <ul className="nav navbar-nav">
          <li
            onClick={() => setActive(1)}
            className={active === 1 ? "active" : ""}
          >
            <LinkContainer to="/category/gorras">
              <Nav.Link to="category/gorras">Gorras</Nav.Link>
            </LinkContainer>
          </li>
          <li
            onClick={() => setActive(2)}
            className={active === 2 ? "active" : ""}
          >
            <LinkContainer to="/category/remeras">
              <Nav.Link to="category/remeras">Remeras</Nav.Link>
            </LinkContainer>
          </li>
          <li
            onClick={() => setActive(3)}
            className={active === 3 ? "active" : ""}
          >
            <LinkContainer to="/category/zapas">
              <Nav.Link to="category/zapas">Zapas</Nav.Link>
            </LinkContainer>
          </li>
        </ul>
        {itemCount() > 0 && (
          <ul className="nav navbar-nav navbar-right">
            <li>
              <LinkContainer to="/cart">
                <Nav.Link to="/cart">
                  <CartWidget />
                </Nav.Link>
              </LinkContainer>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
