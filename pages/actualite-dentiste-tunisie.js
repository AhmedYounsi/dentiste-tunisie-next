/* eslint-disable */
import Head from "next/head";
import React from "react";
import Link from "next/link";

function Actualites() {

  return (
    <div className="__Actualites">
       <Head>
        <title>Actualités Dentiste Tunisie | Blog dentiste tunisie</title>
       </Head>
      <section className="breadcrumb-area">
        <div className="breadcrumb-content">
          <div className="col-12 px-0">
            <div className="page-title">
              <h1 className="heading-2">Actualités dentiste tunisie</h1>
            </div>
          </div>
          <ul className="page-list">
            <li>
            <Link href="/">
                <a>Accueil</a>
              </Link>
            </li>
            <li>Actialités</li>
          </ul>
        </div>
      </section>
      <div className="blog-page-content padding-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-post-single-item ">
                <img
                  className="img-blog "
                  src="img/blog/sourire-eclatant.jpg"
                  alt="sourire eclatant dentaire tunisie"
                />

                <div className="content">
                  <ul className="post-meta">
                    <li>
                      <a href="#">
                        <i className="icon far fa-calendar-alt"></i> 10 mai 2022{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon far fa-bookmark"></i> Dents
                        Naturelles{" "}
                      </a>
                    </li>
                  </ul>
                  <h2 className="title padding-top-10">
                    <a href="#">
                      Un sourire éclatant et des dents blanches, comment faire ?
                    </a>
                  </h2>
                  <p className="padding-top-5 padding-bottom-15">
                    Comment avoir un sourire éclatant et des dents blanches ?
                    <br />
                    Avoir un sourire de star et de superbes dents blanches est
                    désormais possible. Entre les produits naturels, les
                    produits chimiques et les traitements chez le dentiste, il
                    existe de nombreuses façons de blanchir les dents, et ce,
                    qu’elles soient naturelles ou artificielles. Mythe ou
                    réalité, il est toujours bon de savoir que les dents sont
                    fragiles, et qu’il faut en prendre soin. L’émail des dents
                    est naturellement blanc, tandis que la couleur de la dentine
                    tire vers le jaune. Lorsque l’émail se fragilise, la dent
                    perd en blancheur.
                  </p>
                  <ul className="post-meta two">
                    <li>
                      <a href="#">
                        <i className="icon far fa-eye"></i>203 vues
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon fas fa-share-alt"></i>30 partages
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-post-single-item">
                <img
                  className="img-blog"
                  src="img/blog/dents-taches-cafe-tasse.jpg"
                  alt="dents taches cafe"
                />

                <div className="content">
                  <ul className="post-meta">
                    <li>
                      <a href="#">
                        <i className="icon far fa-calendar-alt"></i> 18 février
                        2022{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon far fa-bookmark"></i> Dents
                        Naturelles{" "}
                      </a>
                    </li>
                  </ul>
                  <h2 className="title padding-top-10">
                    <a href="#">
                      Comment protéger nos dents des taches de café ?
                    </a>
                  </h2>
                  <p className="padding-top-5 padding-bottom-15">
                    Boire de l’eau : Une simple gorgée d’eau peut laver les
                    liquides salissants avant qu’ils ne commencent à se fixer
                    sur vos dents. Et même si la science indique que le café ne
                    nous déshydrate pas, cela reste tout de même un très bon
                    moyen de rester hydraté durant la journée. Soyez attentif à
                    la santé de vos dents: pensez à surveiller ces symptômes
                    dangereux.
                  </p>
                  <ul className="post-meta two">
                    <li>
                      <a href="#">
                        <i className="icon far fa-eye"></i>34 vues
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon fas fa-share-alt"></i>14 partages
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="blog-post-single-item">
                <img
                  className="img-blog "
                  src="img/blog/detartrage-dentaire-tunisie.jpg"
                  alt="détartrage dentaire tunisie"
                />

                <div className="content">
                  <ul className="post-meta">
                    <li>
                      <a href="#">
                        <i className="icon far fa-calendar-alt"></i> 01 juin
                        2022{" "}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon far fa-bookmark"></i> Dents
                        Naturelles{" "}
                      </a>
                    </li>
                  </ul>
                  <h2 className="title padding-top-10">
                    <a href="#">
                      Un détartrage peut-il rayer la dent ou abîmer les dents ?
                    </a>
                  </h2>
                  <p className="padding-top-5 padding-bottom-15">
                    Faire un détartrage dentaire est recommandé à tout âge,
                    cependant il n’est pas rare pour le patient d’avoir des
                    questions voire des inquiétudes. L’une d’elles qui revient
                    régulièrement est la suivante : est-ce qu’un détartrage
                    dentaire peut rayer ou abîmer les dents ? Si la procédure en
                    elle-même est sans danger, il est possible cependant de
                    tomber sur un mauvais praticien ou sur des instruments mal
                    utilisés. Focus sur les problèmes pouvant être rencontrés
                    lors d’un détartrage et notamment les questions relatives à
                    une éventuelle usure des dents.
                  </p>
                  <ul className="post-meta two">
                    <li>
                      <a href="#">
                        <i className="icon far fa-eye"></i>150 vues
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icon fas fa-share-alt"></i>3 partages
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* <div className="widget widget_search">
                                <form action="http://zwin.io/html/moristan/blog.html" className="search-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Recherche ..."/>
                                    </div>
                                    <button className="submit-btn" type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div> */}

              <div className="widget widget_recent_posts">
                <h3 className="widget-title">Articles populaires</h3>
                <ul className="recent_post_item">
                  <li className="single-recent-post-item">
                    <div className="content">
                      <span className="time">
                        <i className="icon far fa-calendar-alt"></i>10 mai 2022
                      </span>
                      <h4 className="title">
                        <a href="#">
                          Un sourire éclatant et des dents blanches, comment
                          faire ?
                        </a>
                      </h4>
                    </div>
                  </li>

                  <li className="single-recent-post-item">
                    <div className="content">
                      <span className="time">
                        <i className="icon far fa-calendar-alt"></i>18 février
                        2022
                      </span>
                      <h4 className="title">
                        <a href="#">
                          Comment protéger nos dents des taches de café
                        </a>
                      </h4>
                    </div>
                  </li>
                  <li className="single-recent-post-item">
                    <div className="content">
                      <span className="time">
                        <i className="icon far fa-calendar-alt"></i>01 juin 2022
                      </span>
                      <h4 className="title">
                        <a href="#">
                          Un détartrage peut-il rayer la dent ou abîmer les
                          dents ?
                        </a>
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actualites;
