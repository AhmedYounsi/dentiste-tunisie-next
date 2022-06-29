/* eslint-disable */
import React from "react";
import Carousel from "react-elastic-carousel";
import Link from "next/link";

function ServiceCarousel() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];
  return (
    <section id="service" className="service paddind-section">
      <div className="container-fluid">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 col-md-12">
              <div className="service-left pt-0">
                <div className="col-lg-12">
                  <div className="common-title padding-bottom-40">
                    <h2 className="heading">Traitements Dentaires</h2>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="m-auto traitement-text">
                    <h3 className="heading-2">
                      Des <b>traitements dentaires</b> adaptés à vos besoins :
                    </h3>
                    <p>
                      Chez dentiste tunisie nous vous garantissons des{" "}
                      <b>traitements dentaires</b> adaptés à vos besoins <br />{" "}
                      Prodigués par le docteur <b>Asma Cherif</b> chirurgien
                      dentiste, au tarif le plus juste. <br />
                      Ces <b>traitements dentaires</b> vous permettront de
                      conserver ou de rétablir une bonne santé
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-right">
              <Carousel
                itemPadding={[10, 10]}
                breakPoints={breakPoints}
                itemsToShow={3}
                pagination={false}
              >
                <div
                  style={{
                    backgroundImage: `url("img/traitements/implant-dentaire-tunisie.webp")`,
                  }}
                  className="service-item service-carousel "
                >
                  <div className="heading-6 service-div">
                    <h3>Implants dentaires</h3>
                  </div>
                </div>

                <div
                  style={{
                    backgroundImage: `url("img/traitements/orthodontie-tunisie.webp")`,
                  }}
                  className="service-item service-carousel"
                >
                  <div className="heading-6 service-div">
                    <h3>
                      Aligner par gouttière <br /> transparente
                    </h3>
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage: `url("img/traitements/blanchiement-dentaire-tunisie.webp")`,
                  }}
                  className="service-item service-carousel"
                >
                  <div className="heading-6 service-div">
                    <h3>Blanchiment dentaire</h3>
                  </div>
                </div>

                <div
                  style={{
                    backgroundImage: `url("img/traitements/chirurgie-dentaire-tunisie.webp")`,
                  }}
                  className="service-item service-carousel"
                >
                  <div className="heading-6 service-div">
                    <h3> Chirurgie dentaire</h3>
                  </div>
                </div>

                <div
                  style={{
                    backgroundImage: `url("img/traitements/facette-dentaire-tunisie.webp")`,
                  }}
                  className="service-item service-carousel"
                >
                  <div className="heading-6 service-div">
                    <h3>
                      Facettes dentaires <br /> veneers
                    </h3>
                  </div>
                </div>

                <div
                  style={{
                    backgroundImage: `url("img/traitements/chirurgie-dent-de-sagesse.webp")`,
                  }}
                  className="service-item service-carousel"
                >
                  <div className="heading-6 service-div">
                    <h3>
                      Chirurgie <br /> Dent de sagesse
                    </h3>
                  </div>
                </div>

                <div
                  style={{
                    backgroundImage: `url("img/traitements/bridge-dentaire-tunisie.webp")`,
                  }}
                  className="service-item service-carousel"
                >
                  <div className="heading-6 service-div">
                    <h3>
                      Bridge <br /> Ceramique - Zircone
                    </h3>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="main-btn-wrap mt-3">
        <Link href="/traitement-dentaire-tunisie">
          <a className="nav-link primary-button m-auto">Voir Traitements</a>
        </Link>
      </div>
    </section>
  );
}

export default ServiceCarousel;
