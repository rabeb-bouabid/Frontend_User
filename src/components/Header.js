import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage?.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : null;
    user && setUserName(user?.user?.username ?? null);
  }, []);
  const Logout = () => {
    localStorage.removeItem("userData");
    navigate("/Login");
  };

  return (
    <div>
      <header className="shadow-md">
        <div className="hed-top text-white bg-dark d-sm-block border-bottom">
          <div className="container-xl">
            <div className="row p-1">
              <div className="col-lg-8 d-none d-lg-block">
                <ul className="text-white leftlist ld fs-8">
                  <li className="float-start p-2 px-3">
                    <i className="bi bi-envelope" /> Domestique_Expert@gmail.com
                  </li>
                  <li className="float-start p-2 px-3">
                    <i className="bi bi-telephone" /> +21658855597info
                  </li>
                  <li className="float-start p-2 px-3">
                    <i className="bi bi-geo-alt" /> yasser arafet,Sousse,
                    Sahloul
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="text-white float-end">
                  <li className="float-start fs-8 p-3 py-2">
                    <i className="bi bi-facebook" />
                  </li>
                  <li className="float-start fs-8 p-3 py-2">
                    <i className="bi bi-twitter" />
                  </li>
                  <li className="float-start fs-8 p-3 py-2">
                    <i className="bi bi-instagram" />
                  </li>
                  <li className="float-start fs-8 p-3 py-2">
                    <i className="bi bi-linkedin" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="menu-jk" className="nav-part">
          <div className="container-xl">
            <div
              className="row shadow-md navcol navbar-container"
              style={{
                backgroundColor: "rgb(144 205 223 / 0%)",
                height: "75px",
              }}
            >
              <div className="col-lg-3 ps-3">
                <img
                  className="max-230 py-3"
                  src="assets/images/logo.jpg"
                  alt
                  style={{ marginTop: "3px" }}
                />
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#menu"
                  className="float-end d-lg-none pt-3 ps-3"
                >
                  <i className="bi  fs-1 cp bi-list" />
                </a>
              </div>
              <div id="menu" className="col-lg-9 d-none d-lg-block">
                <ul className="fw-bold float-end nacul fs-7">
                  <li className="float-start active p-3 px-4">
                    <Link to="/">
                      <a style={{ color: "rgb(11 110 169)", fontSize: "17px" }}>
                        <b>Accueil</b>
                      </a>
                    </Link>
                  </li>
                  <li className="float-start p-3 px-4">
                    <Link to="/services">
                      <a
                        style={{
                          color: "rgb(11 110 169)",
                          fontSize: "17px",
                          fontFamily: "inherit",
                        }}
                      >
                        <b>Services</b>
                      </a>
                    </Link>
                  </li>
                  <li className="float-start p-3 px-4">
                    <Link to="/prestataires">
                      <a
                        style={{
                          color: "rgb(11 110 169)",
                          fontSize: "17px",
                          fontFamily: "inherit",
                        }}
                      >
                        <b>Prestataires</b>
                      </a>
                    </Link>
                  </li>
                  <li className="float-start p-3 px-4">
                    <Link to="/contact">
                      <a
                        style={{
                          color: "rgb(11 110 169)",
                          fontSize: "17px",
                          fontFamily: "inherit",
                        }}
                      >
                        <b>Contact</b>
                      </a>
                    </Link>
                  </li>
                  <li
                    className="float-start p-3 px-4"
                    style={{ marginTop: "-7px" }}
                  >
                    {userName ? (
                      <>
                        <div className="nav-item dropdown">
                          <a
                            href="/profil"
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <i
                              className="fa fa-user text-yellow"
                              style={{ color: "#156fa7", fontSize: "20px" }}
                            ></i>{" "}
                            <b
                              style={{
                                color: "rgb(11 110 169)",
                                fontSize: "17px",
                                fontFamily: "inherit",
                              }}
                            >
                              {" "}
                              {userName}
                            </b>
                          </a>
                          <div className="dropdown-menu rounded-0 m-0">
                           <a className="dropdown-item" href="/profil">
                  <i className="fas fa-user fa-sm fa-fw mr-2 text-400" style={{color:"#156fa7"}}/>
                  <b style={{ color: "#156fa7", fontSize: "15px",fontFamily: "inherit",marginLeft:"8px" }}>Profil </b>
                  </a> 
                            <a className="dropdown-item" onClick={Logout}>
                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-400"  style={{color:"#156fa7"}}></i>
                              <b style={{color:"#156fa7"}}>Deconnexion</b>
                            </a>
                           
                              
                          </div>
                        </div>
                      </>
                    ) : (
                      <li
                        className="float-start p-3 px-4"
                        style={{ marginTop: "-41px" }}
                      >
                        <Link to="/Login" className="nav-link">
                          <button
                            style={{
                              background:
                                "linear-gradient(to right, #e66465, #30a0e2)",
                              width: "131px",
                              height: "43px",
                              borderRadius: "22px",
                              fontSize: "17px",
                              fontFamily: "inherit",
                              border: "none",
                              cursor: "pointer",
                              padding: "0",
                              color: "white",
                            }}
                          >
                            <i
                              style={{ color: "white" }}
                              className="fa fa-user "
                            ></i>{" "}
                            <b>Connexion</b>
                          </button>
                        </Link>
                      </li>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
