/* eslint-disable */
import React, { useState, useEffect,useRef } from "react";
 
 
import { Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function RendezVous() {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Mail, setMail] = useState("");
  const [Sujet, setSujet] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [Tel, setTel] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Error, setError] = useState(null);

  const myRef = useRef(null)

  const Send = () => {
    if (Nom == "") {
      myRef.current.scrollIntoView()  
      setError(" Veuillez renseigner le champ Nom");
      return;
    }
    if (Prenom == "") {
      myRef.current.scrollIntoView()  
      setError(" Veuillez renseigner le champ Prénom");
      return;
    }
 
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Mail)) {
      setError("Adresse mail non valide");
      myRef.current.scrollIntoView()  
      return;
    }

    if (Tel == "") {
      myRef.current.scrollIntoView()  
      setError(" Veuillez renseigner le champ Téléphone");
      return;
    }
    if (Adresse == "") {
      myRef.current.scrollIntoView()  
      setError(" Veuillez renseigner le champ Adresse");
      return;
    } else {
      setNom("");
      setPrenom("");
      setMail("");
      setSujet("");
      setAdresse("");
      setTel("");
      handleShow();
    }
  };

  const HandleTel = (num) => {
    const result = num.replace(/\D/g, '');

    setTel(result);
   
  };

  useEffect(() => {
    setError(null);
  }, [Nom, Prenom, Mail, Adresse, Tel]);

  return (
    <section className="appointment-section paddind-section rltv">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Demande Rendez-vous</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Votre demande de rendez-vous a été effectué avec succès
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="modal-btn-x"
            onClick={handleClose}
          >
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="common-title padding-bottom-20">
              <h2 className="heading">Rendez-vous dentiste</h2>
            </div>
          </div>

          <div ref={myRef} className="col-lg-12 col-md-12 ">
            <div className="appointment-content">
              <div className="tab-content">
                {/* <div className="appointment-img-area">
                  <img src={Image} alt="cabinet densite tunisie rendez vous" />
                </div> */}
                <div className="appointment">
                  <h3 className="">
                    Obtenez un rendez-vous chez cabinet dentiste tunisie
                  </h3>
                  {Error && (
                    <Alert
                      onClose={() => setError(null)}
                      variant={"danger"}
                      dismissible
                    >
                      
                      {Error}{" !"}
                    </Alert>
                  )}
                  <div className="form_rdv ">
                    <input
                      value={Nom}
                      onChange={(e) => setNom(e.target.value)}
                      placeholder="Nom"
                      type="text"
                      className="mr-2"
                    />
                    <input
                      value={Prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                      placeholder="Prenom"
                      type="text"
                    />
                  </div>
                  <div className="form_rdv  ">
                    <input
                      value={Mail}
                      onChange={(e) => setMail(e.target.value)}
                      placeholder="Email"
                      type="text"
                      className="mr-2 input_mail"
                    />
                    <input
                        value={Tel}
                      onChange={(e) => HandleTel(e.target.value)}
                      placeholder="Téléphone"
                      type="text"
                    />
                  </div>
                  <div className="form_rdv  ">
                    <input
                      value={Adresse}
                      onChange={(e) => setAdresse(e.target.value)}
                      placeholder="Adresse"
                      className="mr-2"
                      type="text"
                    />
                    <input
                      value={Sujet}
                      onChange={(e) => setSujet(e.target.value)}
                      placeholder="Sujet"
                      type="text"
                    />
                  </div>
                  <button onClick={Send} className="button_submit w-100">
                    Valider le Rendez-vous
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RendezVous;
