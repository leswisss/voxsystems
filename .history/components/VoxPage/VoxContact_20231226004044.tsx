"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import arrowUpBroken from "@iconify/icons-solar/arrow-up-broken";
import "../../styles/VoxPage/contact.scss";

const VoxContact = ({ email }: { email: string }) => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [telValue, setTelValue] = useState("");
  const [projectValue, setProjectValue] = useState("");

  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setMessageSent(true);
    setNameValue("");
    setEmailValue("");
    setTelValue("");
    setProjectValue("");
  };

  return (
    <section className="contact__section">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <div className="contact__text">
            <div className="c-text__top">
              <h3>NOTRE ÉQUIPE</h3>
              <h3>EST</h3>
              <h3>
                PRÊTE Â <span>TOUT</span>
              </h3>
            </div>
            <div className="c-text__bottom">
              <span>Laisser des contacts pour discuter de votre projet.</span>
            </div>
          </div>
          <div className="contact__form-wrapper">
            <div className="contact__header">
              <h3>VOTRE CONTACT</h3>{" "}
              <Link href={`mailto:${email}`}>{email}</Link>{" "}
            </div>

            <div className="contact__form">
              <form onSubmit={handleSubmit}>
                <div className="contact__form-top">
                  <div className="form-left">
                    <div className="input__container">
                      <input
                        type="text"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                      />
                      {!nameValue && (
                        <span className="placeholder">Votre nom</span>
                      )}
                    </div>
                    <div className="input__container">
                      <input
                        type="tel"
                        required
                        value={telValue}
                        onChange={(e) => setTelValue(e.target.value)}
                      />
                      {!telValue && (
                        <span className="placeholder">
                          Téléphone <span>*</span>
                        </span>
                      )}
                    </div>
                    <div className="input__container">
                      <input
                        type="email"
                        required
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                      />
                      {!emailValue && (
                        <span className="placeholder">
                          E-mail <span>*</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="form-right">
                    <div className="input__container-2">
                      <textarea
                        name=""
                        id=""
                        cols={10}
                        rows={10}
                        required
                        value={projectValue}
                        onChange={(e) => setProjectValue(e.target.value)}
                      />
                      {!projectValue && (
                        <span className="placeholder">
                          Parlez-nous de votre projet <span>*</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="contact__form-bottom">
                  <span>
                    En cliquant sur le bouton, je confirme ma familiarisation et
                    mon consentement au traitement de mes données personnelles
                  </span>
                  <button type="submit">
                    {loading ? (
                      <div className="loader"></div>
                    ) : (
                      <Icon icon={arrowUpBroken} />
                    )}
                  </button>
                </div>
              </form>
              {!messageSent && <p className="success">Your message has been sent. </p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoxContact;
