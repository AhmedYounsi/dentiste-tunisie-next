/* eslint-disable */
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

function Doctor(props) {
  return (
    <section className="our-doctor paddind-section">
      <div className="container">
        <div className="row">
          {props.title && (
            <div className="col-lg-12">
              <div className="common-title padding-bottom-40">
                <h2 className="heading">Présentation</h2>
              </div>
            </div>
          )}
          <div className="col-lg-12 doctor-slider">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-5 col-lg-6 dentiste-img">
                      <div className="doctor-slider-img">
                        <Image
                          src={
                            props.title
                              ? "/img/cabinet-dentiste-tunisie-asma-cherif.webp"
                              : "/img/dentiste-tunisie-asma-cherif.jpg"
                          }
                          alt="dentiste tunisie asma cherif"
                          as="true"
                          priority
                          layout="responsive"
                          width={450}
                          height={450}
                        />
                      </div>
                    </div>
                    <div className="col-md-7 col-lg-6">
                      <div className="doctor-slider-content">
                        <h2 className="heading-4 m-0">
                          Cabinet dentiste <b>Asma Cherif</b>
                        </h2>
                        <h3 className="heading-6">
                          Médecin dentiste principal
                        </h3>
                        <div className="padding-top-20 padding-bottom-0">
                          <div className="presentation-div">
                            <p>
                              Chirurgien dentiste , avec plus de 20 ans
                              d’expérience professionnelle, Asma cherif offre
                              ses services au sein de son propre Cabinet
                              dentaire spécialisé en : <br />
                              <b>Implants dentaires</b>,
                              <b> Blanchiment dentaire</b>,
                              <b>Bridge Ceramique - Zircone</b>...
                              
                              <br />
                              <br />
                            </p>
                            <p>
                              {" "}
                              Bienvenue chez notre cabinet dentiste tunisie{" "}
                            </p>
                            <br />
                            <p>
                              <BsArrowRight />
                              Implantologie orale
                            </p>
                            <p>
                              {" "}
                              <BsArrowRight />
                              Chirurgie bucco-dentaire
                            </p>
                            <p>
                              {" "}
                              <BsArrowRight />
                              Dentiste esthétique
                            </p>
                          </div>
                          <br />
                          <p>
                            Ex. Attaché des cliniques en Allemagne <br />
                            Ex. Attachée au service Chirurgie Maxilo-Faciale et
                            Esthétique de l’Hôpital Charles Nicole Tunis
                          </p>
                        </div>
                        {props.title && (
                          <div className="d-flex mt-4">
                            <div className="main-btn-wrap">
                              <Link href="/cabinet-dentiste-tunisie">
                                <a className="nav-link primary-button">
                                  Découvrire notre cabinet
                                </a>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctor;
