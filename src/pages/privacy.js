import React from 'react';
import "../styles/privacy.css";
import Layout from '../components/layout';
import { useIntl } from 'gatsby-plugin-intl'; 


const Privacy = () => {

  const intl = useIntl(); 

  const locale = intl.locale;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';


  return (
    <Layout>
    <div dir={direction} className="">
      <div className="container-privacy mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{intl.formatMessage({ id: "titrePrivacy" })}</h1>
        
        <h2 className="text-2xl font-bold mb-2">{intl.formatMessage({ id: "introduction" })}</h2>
        <p className="mb-4">
        {intl.formatMessage({ id: "textintroduction1" })}
        </p>
        
        <p className="mb-4">
        {intl.formatMessage({ id: "textintroduction2" })}
        </p>
        
        <p className="mb-4">
        {intl.formatMessage({ id: "textintroduction3" })}
        </p>

        <h2 className="text-2xl font-bold mb-2">{intl.formatMessage({ id: "caractere" })}</h2>
        <p className="mb-4">
        {intl.formatMessage({ id: "textcaractere1" })}
        </p>
        <p className="mb-4">
        {intl.formatMessage({ id: "textcaractere2" })}
        </p>

        <h2 className="text-2xl font-bold mb-2">{intl.formatMessage({ id: "Droits" })}</h2>
        <p className="mb-4">
        {intl.formatMessage({ id: "textdroits1" })}
        </p>
        <p className="mb-4">
        {intl.formatMessage({ id: "textdroits2" })}
        </p>
        <p className="mb-4">
        {intl.formatMessage({ id: "textdroits3" })}
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>{intl.formatMessage({ id: "textdroits4" })}</li>
          <li>{intl.formatMessage({ id: "textdroits5" })}<a href="mailto:service@mathscan.net" className="text-blue-600 hover:text-blue-800">service@mathscan.net</a>.</li>
        </ul>

        <p className="mb-4">
        {intl.formatMessage({ id: "textdroits6" })}
        </p>
      </div>
    </div>
    </Layout>

  );
};

export default Privacy;
