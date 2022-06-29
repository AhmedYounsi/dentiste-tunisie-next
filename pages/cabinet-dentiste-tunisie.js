/* eslint-disable */
import React from "react";
import Image from "next/image";
import Doctor from "../components/Doctor";
import { BsCheck2Square } from "react-icons/bs";
import { FaRegDotCircle } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";

function Cabine() {
  return (
    <>
      <Head>
        <title>Cabinet dentiste tunisie | Cabinet Chirurgien Dentiste</title>
        <link rel="canonical" href="https://tunisie-dentiste.tn/cabinet-dentiste-tunisie" />
      </Head>
      <section className="breadcrumb-area">
        <div className="breadcrumb-content">
          <div className="col-12 px-0">
            <div className="page-title">
              <h1 className="heading-2">Cabinet dentiste tunisie</h1>
            </div>
          </div>
          <ul className="page-list">
            <li>
            <Link href="/">
                <a>Accueil</a>
              </Link>
            </li>
            <li>Cabinet</li>
          </ul>
        </div>
      </section>

      <Doctor title={false} />
      <div className="relative">
        <div className="container paddind-section pr-5">
          <div className="col-lg-12">
            <div className="common-title padding-bottom-40">
              <h2 className="heading">Expérience professionnelle</h2>
            </div>
          </div>
          <div className="valeur-area m-auto">
            <div className="exp-single">
              <div className="line"></div>
              <FaRegDotCircle />
              <div className="exp-title">
                <div className="year">
                  <p>Université Palacky république tchéque</p>
                  <b>1988</b>
                </div>
                <span>Docteur en médcine dentaire</span>
              </div>
            </div>
            <div className="exp-single">
              <div className="line"></div>
              <FaRegDotCircle />
              <div className="exp-title">
                <div className="year">
                  <p>Hôpital Charles Nicolle</p>
                  <b>
                    1989 <span>-</span> 1890
                  </b>
                </div>
                <span>
                  1ans d’équivalence à l'hôpital Charles Nicolle service
                  maxillo- facial
                </span>
              </div>
            </div>
            <div className="exp-single">
              <FaRegDotCircle />
              <div className="exp-title">
                <div className="line"></div>
                <div className="year">
                  <p>Hôpital Charles Nicolle</p>
                  <b>
                    1993 <span>-</span> 2005
                  </b>
                </div>
                <span>
                  Mémoire de fin equivalence sur fentes labio-palatines
                </span>
              </div>
            </div>
            <div className="exp-single">
              <FaRegDotCircle />
              <div className="exp-title">
                <div className="line"></div>
                <div className="year">
                  <p>Cabinet privée au Bardo</p>
                  <b>
                    1990 <span>-</span> 1993
                  </b>
                </div>
              </div>
            </div>
            <div className="exp-single">
              <FaRegDotCircle />
              <div className="exp-title">
                <div className="line"></div>
                <div className="year">
                  <p>L’hôpital régional Ben Arous</p>
                  <b>
                    2005 <span>-</span> 2010
                  </b>
                </div>
              </div>
            </div>
            <div className="exp-single">
              <FaRegDotCircle />
              <div className="exp-title">
                <div className="year">
                  <p>Cabinet privée au Megrine</p>
                  <b>
                    2010 <span>-</span> présent
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="why-choose-section padding-50 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-content">
                <div className="common-title padding-bottom-40">
                  <h2 className="heading"> Pourquoi choisir notre cabinet ?</h2>
                </div>

                <div className="valeur-area">
                  <p>
                    <BsCheck2Square />
                    La satisfaction des patients
                  </p>
                  <p>
                    <BsCheck2Square />A la fine pointe de technologie
                  </p>
                  <p>
                    <BsCheck2Square />
                    Le cadre au travail
                  </p>
                  <p>
                    <BsCheck2Square />
                    Douceurs des traitements
                  </p>
                  <p>
                    <BsCheck2Square />
                    Le plan de carrière
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 offset-lg-1">
              <div className="why-choose-img img-trans">
                <Image
                  src="/img/detartrage-tunisie.png"
                  alt="detartrage dentiste-tunisie"
                  className="logo_dentiste"
                  layout="responsive"
                  width={350}
                  height={750}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cabine;
