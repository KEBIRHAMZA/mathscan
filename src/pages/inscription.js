import React, { useState } from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';
import '../styles/inscription.css'

export default function Inscription() {
    const intl = useIntl();
    const locale = intl.locale;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    return (
            <section style={{ marginBottom: "10%" }} className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div
  className="my-inscription col-3a3 col-swf col-zyw col-c4e form-goa style-ftIj6 w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24"
  id="style-ftIj6"
>
  <p className="text-awj">
    <a href="/">
      <img
        src="https://mathscan.net/img/new-logo.png"
        width={100}
        style={{ width:"300px",marginLeft:"200px",marginBottom:"70px" }}
        className="logo-odi"
      />
    </a>
  </p>
  <div className="col-swf col-618 col-co4 card-mgx mx-rwm" style={{ width:"500px" }}>
    <div className="card-ad4 mx-auto mb-0 mt-8 max-w-md space-y-4">
      <form>
        <input
          type="hidden"
          name="_token"
          defaultValue="aGYrY0HIZValIPlVmqmkjjY3gF3cwAFW56IuqvLU"
          id="_to-own"
        />
        <div className="mb-aic">
          <label className="label-zp1">Nom d'utilisateur</label>
          <input
            type="text"
            name="username"
            id="use-zq1"
            defaultValue=""
            placeholder="Votre nom d'utilisateur"
            className="form-control-7v3"
          />
        </div>
        <div className="mb-aic">
          <label className="label-zp1">Prénom</label>
          <input
            type="text"
            name="username"
            id="use-zq1"
            defaultValue=""
            placeholder="Votre Prénom"
            className="form-control-7v3"
          />
        </div>
        <div className="mb-aic">
          <label className="label-zp1">Nom</label>
          <input
            type="text"
            name="username"
            id="use-zq1"
            defaultValue=""
            placeholder="Votre Nom"
            className="form-control-7v3"
          />
        </div>
        <div className="mb-aic">
          <label className="label-zp1">Email Address</label>
          <input
            type="text"
            name="username"
            id="use-zq1"
            defaultValue=""
            placeholder="Entrer Email Address"
            className="form-control-7v3"
          />
        </div>
        <div className="mb-aic">
            <label htmlFor="Genre" className="label-zp1">
                Genre
            </label>
            <select className="my-inscription select-wm7" name="sex" id="xltmd">
                <option value="m">Homme</option>
                <option value="f">Femme</option>
            </select>
        </div>
        <div className="mb-aic">
            <label htmlFor="Niveau Scolaire" className="label-zp1">
                Niveau Scolaire
            </label>
            <select
                className="my-inscription select-wm7"
                name="education_system_select"
                id="edu-ro1"
            >
                <optgroup label='Programm: Système marocain'>
                <option value="1+6">6ème année primaire</option>
                <option value="1+7">1ère année collége</option>
                <option value="1+8">2ème année collége</option>
                <option value="1+9">3ème année collége</option>
                <option value="1+10">Tronc Commun</option>
                <option value="1+11">1ère année BAC Sc MATH</option>
                <option value="1+12">2ème année BAC Sc MATH</option>
                <option value="1+13">1ère année BAC Sc Ex</option>
                <option value="1+14">2ème BAC PC ou SVT</option>
                </optgroup>
            </select>
        </div>
        <div className="mb-aic">
          <label className="label-zp1">Mot de passe</label>
          <input
            type="password"
            name="username"
            id="use-zq1"
            defaultValue=""
            placeholder="Entrer le mot de passe"
            className="form-control-7v3"
          />
        </div>
        <div className="mb-aic">
          <label className="label-zp1">Confirmer le Mot de passe</label>
          <input
            type="password"
            name="username"
            id="use-zq1"
            defaultValue=""
            placeholder="Confirmer le Mot de passe"
            className="form-control-7v3"
          />
        </div>
        {/* Other form elements */}
        <hr />
        <div className="footer-zwx">
          <p className="my-5xe">
            Vous avez déjà un compte?
            <a href="https://mathscan.net/login">Se connecter</a>
          </p>
          <div>
            <div className="style-tIc5t" id="style-tIc5t">
              <div>
                <iframe
                  width={256}
                  height={60}
                  src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lf_-OEcAAAAAFWDHhC5rpaifU6wY-aqhxV8139r&co=aHR0cHM6Ly9tYXRoc2Nhbi5uZXQ6NDQz&hl=fr&v=rz4DvU-cY2JYCwHSTck0_qm-&size=invisible&sa=submit&cb=sgkxre29atu3"
                ></iframe>
              </div>
              <div></div>
              <textarea
                id="g-r-srl"
                className="style-kXlcQ"
                defaultValue={"              "}
              />
            </div>
            <iframe className="style-BhTIz" id="style-BhTIz"></iframe>
          </div>
          <div className="footer-zwx">
            <p className="my-5xe">
                Vous avez déjà un compte? <a href="https://mathscan.net/login">Se connecter</a>
            </p>
            <button type="submit" className="btn-rz3 btn-primary-3wk">
                S'inscrire
            </button>
        </div>
        </div>
      </form>
    </div>
  </div>
</div>

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <StaticImage
                        alt=""
                        src="../images/accueil-images/header.png"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section>
    );
}

export const Head = () => <Seo title="Mathscan ©" />
