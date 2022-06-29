/* eslint-disable */
import React from "react";
import Head from 'next/head'
import RendezVous from "../components/RendezVous";
import Horaires from "../components/Horaires";
import Link from "next/link";

 function Contact() {
  return (
    <>
          <Head>
        <title>Contact Cabinet Dentiste Tunisie </title>  
        <link rel="canonical" href="https://tunisie-dentiste.tn/contact-dentiste-tunisie" />
      </Head>   
        <section className="breadcrumb-area">
       
       <div className="breadcrumb-content">
         <div className="col-12 px-0">
           <div className="page-title">
           <h1 className="heading-2">Contactez notre cabinet</h1>
           </div>
         </div>
         <ul className="page-list">
           <li>
           <Link href="/">
                <a>Accueil</a>
              </Link>
           </li>
           <li>Contact</li>
         </ul>
       </div>
  
 </section>
 <Horaires />
  <RendezVous />
    
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
          {/* <a href="https://123movies-to.org">a</a>
          <br />
          <a href="https://www.embedgooglemap.net">a</a> */}
        </div>
      </div>
    </>
  );
}

export default Contact;
