import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { REMOVE } from "../redux/actions/action";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const NavBarComp = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState(null);
  const getData = useSelector((state) => state.cartReducer.carts);
  const dispatch = useDispatch();

  // Fonction pour calculer le total du panier
  const calculateTotal = () => {
    let total = 0;
    getData.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  // Supprime un élément du panier
  const remove = (id) => {
    dispatch(REMOVE(id));
  };

  const handleLoginButtonClick = () => {
    setAlertContent(<LoginForm />);
    setShowAlert(true);
  };

  const handleRegisterButtonClick = () => {
    setAlertContent(<RegisterForm />);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertContent(null);
  };

  // Contenu du popover pour le panier
  const popover = (
    <Popover id="popover-basic">
      <table>
        <thead>
          <tr>
            <th className="me-5 text-center">Image</th>
            <th className="me-5 text-center">Item</th>
          </tr>
        </thead>
        <tbody>
          {getData.map((item, index) => {
            return (
              <tr key={index} className="ms-2">
                <td>
                  <img
                    src={item.image}
                    style={{
                      width: "5rem",
                      height: "5rem",
                      margin: "15px 15px",
                    }}
                    alt=""
                  />
                </td>
                <td>
                  <div className="text-center mt-3 me-3">
                    <p className="text-center mb-0 fw-bolder">
                      {item.category}
                    </p>
                    <p className="mb-0">Price:{item.price} Dhs </p>
                    <p className="mb-0">
                      Rating: {item.rating.rate}&#x2605;
                    </p>
                    <p className="mb-0">
                      {item.title.substring(0, 45)}
                    </p>
                    <p className="mt-1" onClick={() => remove(item.id)}>
                      <i
                        className="fa fa-trash fs-4 delete-icon"
                        aria-hidden="true"
                      ></i>
                    </p>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="text-end me-3 mt-3">Total: {calculateTotal()} Dhs</div>
    </Popover>
  );

  return (
    <div className="bg-warning">
      <Navbar variant="light" className="shadow-sm py-4 ">
        <Container>
          <Link style={{ textDecoration: "none" }} to="/">
            <Navbar.Brand className="fw-bold fs-2">MaBoutique</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link className="nav-link nav-link-ltr">
              <Link style={{ textDecoration: "none" }} to="/">
                Produits
              </Link>
            </Nav.Link>
            <Nav.Link className="nav-link nav-link-ltr">
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contactez-nous
              </Link>
            </Nav.Link>
          </Nav>
          <div className="buttons">
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popover}
            >
              <Button variant="outline-dark" className="me-2">
                Panier{" "}
                <i className="fa fa-shopping-cart me-2"></i>
                {getData.length} 
              </Button>
            </OverlayTrigger>
            <Button
              variant="outline-dark"
              className="me-2"
              onClick={handleLoginButtonClick}
            >
              <i className="fa fa-user-plus me-2"></i>Se connecter
            </Button>
            <Button
              variant="outline-dark"
              className="me-2"
              onClick={handleRegisterButtonClick}
            >
              <i className="fa fa-sign-in me-2"></i>S'inscrire
            </Button>
            {showAlert && (
              <div
                className="modal"
                style={{
                  display: "block",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <div
                  className="modal-dialog"
                  style={{
                    margin: "auto",
                    maxWidth: "50%",
                    maxHeight: "70%",
                    overflowY: "auto",
                  }}
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="close"
                        style={{ position: "absolute", right: 5, margin: 10,border:"none",background:"white"}}
                        aria-label="Close"
                        onClick={handleCloseAlert}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">{alertContent}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComp;
