/* eslint-disable */
import React, { useState } from "react";
 

import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";
import Link from 'next/link'

function Slider() {
  const [Slide, setSlide] = useState(0);
 
  return (
    <div className="home-slider home-slider-one">
      <IoIosArrowDroprightCircle onClick={() => setSlide(1)} />
      <IoIosArrowDropleftCircle onClick={() => setSlide(0)} />
      <div className="container-fluid">
        <div className="row">
          <div className="scroll-down-area">
            <div className="slider-bottom-area">
              <div className="scroll-down"></div>
            </div>
          </div>

          <div className="home-slider-wrapper">
            <div className="slider-items">
              <div className="slider-content-area">
                <div className="slider-content">
                  <h1 className="slider-heading">Cabinet Dentiste Tunisie</h1>
                  <h2 className="m-0">
                    {" "}
                    Le meilleur cabinet dentaire en tunisie
                  </h2>
                  <p className="slide-p"> Pour tous !</p>
                  <div className="padding-10 header-text">
                    <p>
                      Prenez un rendez-vous avec l’un des spécialisés dans la
                      chirurgie dentaire
                      <br />
                      <b> Dr Asma cherif</b>
                    </p>
                  </div>
                  <div className="main-btn-wrap mt-2">
                    <Link
                    
                      href="/dentiste-tunisie-tarif"
                    >
                    <a   className="nav-link primary-button text-center">

                      Demander un Devis en ligne
                    </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="all-images">
                <div
                  onClick={() => setSlide(1)}
                  className={
                    "slider-images " + (Slide == 0 ? "slider-show" : "to_left")
                  }
                  style={{backgroundImage: `url('img/densite-tunisie-cabinet.webp')`}}
                ></div>
                <div
                  onClick={() => setSlide(0)}
                  className={
                    "slider-images " + (Slide == 1 ? "slider-show" : "to_rigth")
                  }
                  style={{ backgroundImage: `url('img/dentiste-tunisie-traitement.webp')` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
