/* eslint-disable */
import React from "react";
import Head from 'next/head'
import Link from "next/link";

import DevisForm from "../components/DevisForm";
 
function Devis() {
  return (
    <div>
            <Head>
        <title>Dentiste Tunisie Tarif | Devis en ligne dentiste</title>
         </Head>  
      <section className="breadcrumb-area">
        <div className="breadcrumb-content">
          <div className="col-12 px-0">
            <div className="page-title">
              <h1 className="heading-2">Dentiste tunisie Tarif</h1>
            </div>
          </div>
          <ul className="page-list">
            <li>
            <Link href="/">
                <a>Accueil</a>
              </Link>
            </li>
            <li>Devis</li>
          </ul>
        </div>
      </section>

      <DevisForm />
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=36%C2%B046'06.4%22N%2010%C2%B013'28.4%22E&t=k&z=18&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          {/* <a href="https://123movies-to.org"></a>
          <br />
          <a href="https://www.embedgooglemap.net"></a> */}
        </div>
      </div>
    </div>
  );
}

export default Devis;
