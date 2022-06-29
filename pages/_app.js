import React, { useEffect } from "react";
import Image from "next/image";

import "../styles/globals.css";
import "../styles/Contact.scss";
import "../styles/Cabine.scss";
import "../styles/RDV.scss";
import "../styles/FAQ.scss";
import "../styles/Header.scss";
import "../styles/Stories.scss";
import "../styles/Actualites.scss";
import "../styles/DetailsCabinet.scss";
import "../styles/AvantApres.scss";
import "../styles/ServiceCarousel.scss";
import "../styles/Slider.scss";
import "../styles/index.scss";
import "../styles/style.css";
import "../styles/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onscroll = function (e) {
      const element = document.querySelector(".header");
      const route = document.querySelector(".header");
      if (window.scrollY > 110) {
        element.classList.add("scrolled-header");
      } else {
        element.classList.remove("scrolled-header");
      }
    };
  }, []);
  return (
    <Layout>
      <div
        className="background"
        style={{
          backgroundImage: "url('/img/background-dentiste-tunisie.jpg')"
        }}
      ></div>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
