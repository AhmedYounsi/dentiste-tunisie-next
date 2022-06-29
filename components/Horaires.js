import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaTrain, FaParking, FaRoad, FaWheelchair } from "react-icons/fa";
function Horaires() {
  return (
    <div className="container paddind-section">
       <div className="common-title pb-4">
                <h2 className="heading">Horaires Cabinet</h2>
              </div>
      <div className="horaire row">
        <div className="desc col-md-6 col-xs-12">
          <h2 className="heading-3 mb-2">
            
            Cabinet dentiste tunisie <br /> DR Asma Cherif
          </h2>
         
          <p>- 54 339 924 - 71 432 393</p>
          <p>- 23 Bis rue Habib Thameur Megrine Riadh 2034</p>
          <hr />
          <p>
            <FaRoad /> Accès routièrs
          </p>
          <p>
            {" "}
            <FaTrain /> Train
          </p>
          <p>
            {" "}
            <FaParking />
            Parking
          </p>
          <p>
            <FaWheelchair /> Accessibilité
          </p>
        </div>
        <div className="temps col-md-6 col-xs-12">
          <div className="jour">
            <BiTimeFive />
            <p>Lundi</p>
            <span>09:00 - 17:00</span>
          </div>
          <div className="jour">
            <BiTimeFive />
            <p>Mardi</p>
            <span>09:00 - 17:00</span>
          </div>
          <div className="jour">
            <BiTimeFive />
            <p>Mercredi</p>
            <span>09:00 - 17:00</span>
          </div>
          <div className="jour">
            <BiTimeFive />
            <p>Jeudi</p>
            <span>09:00 - 17:00</span>
          </div>
          <div className="jour">
            <BiTimeFive />
            <p>Vendredi</p>
            <span>09:00 - 17:00</span>
          </div>
          <div className="jour">
            <BiTimeFive />
            <p>Samedi - Dimance</p>
            <span>Fermé</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Horaires;
