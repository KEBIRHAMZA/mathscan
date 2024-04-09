import React, { useState } from 'react';
import Seo from "../components/seo";
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';
import '../styles/inscription.css'
import { Link } from 'gatsby';

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
          <label dir={direction} className="label-zp1">{intl.formatMessage({ id: 'inputIn1' })}</label>
          <input
            type="text"
            name="username"
            id="use-zq1"
            defaultValue=""
            placeholder={intl.formatMessage({ id: 'insc_place1' })}
            className="form-control-7v3"
            dir={direction}
          />
        </div>
        <div className="mb-aic">
          <label dir={direction} className="label-zp1">{intl.formatMessage({ id: 'inputIn2' })}</label>
          <input
            type="text"
            name="username"
            id="use-zq1"
            defaultValue=""
            placeholder={intl.formatMessage({ id: 'insc_place2' })}
            className="form-control-7v3"
            dir={direction}
          />
        </div>
        <div className="mb-aic">
          <label dir={direction} className="label-zp1">{intl.formatMessage({ id: 'inputIn3' })}</label>
          <input
            type="text"
            name="username"
            id="use-zq1"
            defaultValue=""
            placeholder={intl.formatMessage({ id: 'insc_place3' })}
            className="form-control-7v3"
            dir={direction}
          />
        </div>
        <div className="mb-aic">
          <label dir={direction} className="label-zp1">{intl.formatMessage({ id: 'inputIn4' })}</label>
          <input
            type="text"
            name="username"
            id="use-zq1"
            defaultValue=""
            placeholder={intl.formatMessage({ id: 'insc_place4' })}
            className="form-control-7v3"
            dir={direction}
          />
        </div>
        <div className="mb-aic">
            <label dir={direction} htmlFor="Genre" className="label-zp1">
            {intl.formatMessage({ id: 'inputIn5' })}
            </label>
            <select dir={direction} className="my-inscription select-wm7" name="sex" id="xltmd">
                <option value="m">{intl.formatMessage({ id: 'genre1' })}</option>
                <option value="f">{intl.formatMessage({ id: 'genre2' })}</option>
            </select>
        </div>
        <div className="mb-aic">
            <label dir={direction} htmlFor="Niveau Scolaire" className="label-zp1">
            {intl.formatMessage({ id: 'inputIn6' })}
            </label>
            <select
                className="my-inscription select-wm7"
                name="education_system_select"
                id="edu-ro1"
                dir={direction}
            >
                <optgroup label={intl.formatMessage({ id: 'insc_place5' })}>
                <option value="1+6">{intl.formatMessage({ id: 'niveau1' })}</option>
                <option value="1+7">{intl.formatMessage({ id: 'niveau2' })}</option>
                <option value="1+8">{intl.formatMessage({ id: 'niveau3' })}</option>
                <option value="1+9">{intl.formatMessage({ id: 'niveau4' })}</option>
                <option value="1+10">{intl.formatMessage({ id: 'niveau5' })}</option>
                <option value="1+11">{intl.formatMessage({ id: 'niveau6' })}</option>
                <option value="1+12">{intl.formatMessage({ id: 'niveau7' })}</option>
                <option value="1+13">{intl.formatMessage({ id: 'niveau8' })}</option>
                <option value="1+14">{intl.formatMessage({ id: 'niveau9' })}</option>
                <option value="1+14">{intl.formatMessage({ id: 'niveau10' })}</option>
                <option value="1+14">{intl.formatMessage({ id: 'niveau11' })}</option>
                </optgroup>
            </select>
        </div>
        <div className="mb-aic">
          <label dir={direction} className="label-zp1">{intl.formatMessage({ id: 'inputIn7' })}</label>
          <input
            type="password"
            name="username"
            id="use-zq1"
            defaultValue=""
            placeholder={intl.formatMessage({ id: 'insc_place6' })}
            className="form-control-7v3"
            dir={direction}
          />
        </div>
        <div className="mb-aic">
          <label dir={direction} className="label-zp1">{intl.formatMessage({ id: 'inputIn8' })}</label>
          <input
            type="password"
            name="username"
            id="use-zq1"
            defaultValue=""
            placeholder={intl.formatMessage({ id: 'insc_place7' })}
            className="form-control-7v3"
            dir={direction}
          />
        </div>
        {/* Other form elements */}
        <hr />
        <div className="footer-zwx">
          <p className="my-5xe">
          {intl.formatMessage({ id: 'question' })}
            <a href="https://mathscan.net/login">{intl.formatMessage({ id: 'lienInscription' })}</a>
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
            {intl.formatMessage({ id: 'question' })} <Link to="/connection">{intl.formatMessage({ id: 'lienInscription' })}</Link>
            </p>
            <button type="submit" className="btn-rz3 btn-primary-3wk">
            {intl.formatMessage({ id: 'buttonInscription' })}
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
