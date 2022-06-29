import React from "react";
import Carousel from "react-elastic-carousel";
import Image from "next/image";

import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";
function Stories() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1400, itemsToShow: 3 },
  ];
  return (
    <div className="__Stories paddind-section">
      <div className="container">
        <div className="col-lg-12">
          <div className="common-title padding-bottom-40">
            <h2 className="heading">Nos Derniers Articles</h2>
          </div>
        </div>
        <Carousel
          itemPadding={[0, 10]}
          breakPoints={breakPoints}
          itemsToShow={2}
          pagination={false}
        >
          <div className="article">
            <AiOutlinePlusCircle />
            <Image
              src={"/img/blog/sourire-eclatant.jpg"}
              alt="sourire eclatant dentaire tunisie"
              layout='fill'
            />
            <div className="date-article">
              <h3>Un sourire éclatant et des dents blanches</h3>
              <p className=""> 10 mai 2022</p>
            </div>
          </div>
          <div className="article">
            <AiOutlinePlusCircle />
            <Image
              src="/img/blog/dents-taches-cafe-tasse.jpg"
              alt="dents taches cafe"
              layout='fill'
            />
            <div className="date-article">
              <h3>Comment protéger nos dents des taches de café ?</h3>
              <p className=""> 18 février 2022</p>
            </div>
          </div>
          <div className="article">
            <AiOutlinePlusCircle />
            <Image
              src="/img/blog/detartrage-dentaire-tunisie.jpg"
              alt="détartrage dentaire tunisie"
              layout='fill'
            />
            <div className="date-article">
              <h3>
                {" "}
                Un détartrage peut-il rayer la dent ou abîmer les dents ?
              </h3>
              <p className="">01 juin 2022</p>
            </div>
          </div>
          <div className="article">
            <AiOutlinePlusCircle />
            <Image
              src="/img/hygiene-dentaire-conseils.jpg"
              alt="hygiène dentaire"
              layout='fill'
            />
            <div className="date-article">
              <h3>Les 10 règles de lhygiène dentaire</h3>
              <p className="">18 mai 2022</p>
            </div>
          </div>

          <div className="article">
            <AiOutlinePlusCircle />
            <Image
              src="/img/dentistes-blanchiment.jpg"
              alt="blanchiment ne fragilise pas"
              layout='fill'
            />
            <div className="date-article">
              <h3>Blanchir les dents ne les fragilise pas</h3>
              <p className="">01 jun 2022</p>
            </div>
          </div>
        </Carousel>
        <br />
        <div className="main-btn-wrap">
          <Link href="/actualite-dentiste-tunisie">
            <a className="nav-link primary-button m-auto">Voir Actualités</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Stories;
