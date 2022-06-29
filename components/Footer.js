/* eslint-disable */
import React from "react";
import Link from "next/link";
import Image from "next/image";


function Footer() {
  return (
    <footer className="footer-area rel">
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer-widget widget logo-widget">
              <div className="logo-area mb-3">
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

                <ul>
                  <li>
                    <span className="icon">
                      <b>Email : </b>
                    </span>
                    docteurtop@gmail.com
                  </li>
                  <li>
                    <span className="icon">
                      <b>Téléphone : </b>
                    </span>
                    54 339 924 - 71 432 393
                  </li>
                  <li>
                    <span className="icon">
                      <b>Adresse : </b>
                    </span>
                    23 Bis rue Habib Thameur Megrine Riadh 2034 <br /> – prés de
                    la mosquée
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="footer-widget widget widget_nav_menu">
                <p className="widget-title">Liens internes</p>
                <ul>
                  <li>
                    <Link href="/cabinet-dentiste-tunisie">Le Cabinet</Link>
                  </li>
                  <li>
                    <Link href="/traitement-dentaire-tunisie">
                      Traitements
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-dentiste-tunisie">Contact</Link>
                  </li>

                  <li>
                    <Link href="/actualite-dentiste-tunisie">
                      Actualités
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="footer-widget widget widget_nav_menu">
                <p className="widget-title">Liens utiles</p>
                <ul>
                  <li>
                    <a href="https://www.ordre-chirurgiens-dentistes.fr/">
                      Ordre des Chirurgiens Dentistes{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://vymaps.com/TN/Conseil-national-de-l-Ordre-des-m-decins-dentistes-de-Tunisie-684154/">
                      Conseil National
                    </a>
                  </li>
                  <li>
                    <Link href="/">Plan du site</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-area-inner">
                &copy; Copyright 2022 Tunisie Dentiste
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
