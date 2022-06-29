/* eslint-disable */
import React, { useState, useEffect } from "react";
import Logo from "../public/img/logo asma2.png";
import Image from "next/image";

import { BsTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
// import { NavLink, useLocation } from "react-router-dom";

import { Button, Offcanvas } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  //  const location = useLocation();
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // useEffect(() => {
  //   setShow(false); 
  // }, [location.pathname]);

  const Active = (route) => {
    return router.pathname == `${route}` ? "active" : "";
  };
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="logo-area mt-1">
            {/* <Link href="/">
            <a> */}
            <Image
                src="/img/logo asma2.png"
                className="logo_dentiste"
                alt="dentiste tunisie logo"
                layout='fill'
                
              />
            {/* </a>
            </Link> */}
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="responsive-nav">
            <ul className="navbar-nav">
              <li>
                <Link href="/">
                  <a className="nav-link">Accueil</a>
                </Link>
              </li>

              <li>
                <Link className="nav-link" href="/cabinet-dentiste-tunisie">
                  <a className="nav-link">Cabinet</a>
                </Link>
              </li>

              <li>
                <Link href="/traitement-dentaire-tunisie">
                  <a className="nav-link">Traitements</a>
                </Link>
              </li>
              <li>
                <Link href="/avant-apres-dentiste">
                  <a className="nav-link">Avant et Après</a>
                </Link>
              </li>

              <li>
                <Link href="/actualite-dentiste-tunisie">
                  <a className="nav-link">Actualités</a>
                </Link>
              </li>
              <li>
                <Link href="/question-dentiste-tunisie">
                  <a className="nav-link">FAQ</a>
                </Link>
              </li>
              <li>
                <Link href="/contact-dentiste-tunisie">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <header className="header">
        <div className="contanct-header">
          <div className="header-navbar">
            <div className="tel">
              <BsTelephoneFill />
              54 339 924 - 71 432 393
            </div>
            <div className="mail">
              <GrMail />
              docteurtop@gmail.com
            </div>
            <div className="adresse">
              <FaMapMarkerAlt />
              23 Bis rue Habib Thameur Megrine Riadh 2034
            </div>
          </div>
        </div>

        <div className="header-navbar">
          <div className="logo-area mt-1">
            {/* <Link href="/">
            <a> */}
            <Image
                src="/img/logo asma2.png"
                className="logo_dentiste"
                alt="dentiste tunisie logo"
                layout='fill'
              />
            {/* </a>
            </Link> */}
          </div>
          <nav className="navbar navbar-area navbar-expand-lg">
            <div className="container nav-container">
              <button className="menu-btn" type="button" onClick={handleShow}>
                <span className="cross-menu">
                  <span className="bar1"></span>
                  <span className="bar2"></span>
                  <span className="bar3"></span>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="fortis_main_menu">
                <ul className="navbar-nav">
                  <li>
                    <Link href="/">
                      <a className={Active("/")}>Accueil</a>
                    </Link>
                  </li>

                  <li>
                    <Link className="nav-link" href="/cabinet-dentiste-tunisie">
                      <a className={Active("/cabinet-dentiste-tunisie")}>
                        Cabinet
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="nav-link"
                      href="/traitement-dentaire-tunisie"
                    >
                      <a className={Active("/traitement-dentaire-tunisie")}>
                        Traitements
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" href="/avant-apres-dentiste">
                      <a className={Active("/avant-apres-dentiste")}>
                        {" "}
                        Avant et Après
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="nav-link"
                      href="/actualite-dentiste-tunisie"
                    >
                      <a className={Active("/actualite-dentiste-tunisie")}>
                        Actualités
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-link"
                      href="/question-dentiste-tunisie"
                    >
                      <a className={Active("/question-dentiste-tunisie")}>
                        FAQ
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-dentiste-tunisie">
                      <a
                        className={
                          Active("/contact-dentiste-tunisie") + " pr-0"
                        }
                      >
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
