/* eslint-disable */
import React, { useState, useEffect,useRef } from "react";
 

import { Alert, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function DevisForm() {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Mail, setMail] = useState("");
  const [Sujet, setSujet] = useState("");
  const [Adresse, setAdresse] = useState("");
  const [Tel, setTel] = useState("");
  const [Age, setAge] = useState("");
  const [Sexe, setSexe] = useState("");
  const [Service, setService] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Error, setError] = useState(null);

  const myRef = useRef(null)

  const Send = () => {
    if (Nom == "") {
        setError("Veuillez renseigner le champ Nom");
        myRef.current.scrollIntoView()  
        return;
    }
    if (Prenom == "") {
        setError("Veuillez renseigner le champ Prénom");
        myRef.current.scrollIntoView()  
        return;
    }
  
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Mail)) {
      setError("Adresse mail non valide");
      myRef.current.scrollIntoView()  
      return;
    }

    if (Tel == "") {
        setError("Veuillez renseigner le champ Téléphone");
        myRef.current.scrollIntoView()  
        return;
    }
    if (Adresse == "") {
        setError("Veuillez renseigner le champ Adresse");
        myRef.current.scrollIntoView()  
        return;
    } 
    if (Age == "") {
      
        setError("Veuillez renseigner le champ Age");
        myRef.current.scrollIntoView()  
        return;
      }
    if (Service == "") {
      
        setError("Veuillez renseigner le champ Traitement");
        myRef.current.scrollIntoView()  
        return;
      }
    else {
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
    const result = num.replace(/\D/g, "");

    setTel(result);
  };
  const HandleAge = (num) => {
    const result = num.replace(/\D/g, "");

    setAge(result);
  };

  useEffect(() => {
    setError(null);
  }, [Nom, Prenom, Mail, Adresse, Tel]);

  return (
    <section className="appointment-section paddind-section rltv">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Demande Devis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Votre demande de devis a été effectué avec succès
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
              <h2 className="heading">Devis dentiste</h2>
            </div>
          </div>

          <div ref={myRef}  className="col-lg-12 col-md-12 ">
            <div className="appointment-content">
              <div className="tab-content">
                <div className="appointment-img-area">
                  <img src="img/devis-dentiste-tunisie.jpg" alt="devis en ligne densite tunisie" />
                </div>
                <div className="appointment">
                  <h3 className="">
                    Obtenez un Devis en ligne avec dentiste tunisie
                  </h3>
                  {Error && (
                    <Alert
                      onClose={() => setError(null)}
                      variant={"danger"}
                      dismissible
                    >
                      {Error}
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
                  <div className="form_rdv ">
                    <input
                      value={Age}
                      onChange={(e) => HandleAge(e.target.value)}
                      placeholder="Age"
                      type="text"
                      className="mr-2"
                    />
                    <Form.Select onChange={e => setSexe(e.target.value)} aria-label="Default select example">
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                    </Form.Select>
                  </div>
                 
                  <div className="form_rdv ">
                  
                    <Form.Select
                    onChange={e => setService(e.target.value)}
                    aria-label="Default select example">
               
                      <option value="Implantologie">Implantologie</option>
                      <option value="Alignement">Aligner par gouttière</option>
                      <option value="Blanchiment">Blanchiment dentaire</option>
                      <option value="Chirurgie">Chirurgie dentaire</option>
                      <option value="Facettes">Facettes dentaires</option>
                      <option value="Chirurgie_DS">Chirurgie Dent de sagesse</option>
                      <option value="Bridge">Bridge Ceramique - Zircone</option>
                    </Form.Select>
                  </div>
                  <button onClick={Send} className="button_submit w-100">
                    Demander Devis
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

export default DevisForm;
