import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from 'gatsby-plugin-intl';
import '../../styles/accueil-styles/caracteristiques.css';

export default function Caracteristiques() {
  const intl = useIntl();

  return (
    <div className="container-caracteristiques grid gap-2 grid-cols-2" style={{ marginLeft:"100px"}}>
      <div className="text-container">
        <div>
          <p className='titre-one'>{intl.formatMessage({ id: "title" })}</p> <br />
          <p className='titre-two'>
            {intl.formatMessage({ id: "improvementOne" })} <span>30%</span> {intl.formatMessage({ id: "to" })} <span>40%</span> {intl.formatMessage({ id: "improvementTwo" })}
          </p> <br />
          <p className='titre-three'>{intl.formatMessage({ id: "progress" })}</p> <br/>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              {intl.formatMessage({ id: "createAccountButton" })}
          </a>
        </div>
      </div>
      <div className='cards-container'>
        <div className="grid gap-4 grid-cols-2 cards-position">
          <div className="card" >
            <DynamicComponent
                iconUrl={<StaticImage className='image-icon' src="../../images/accueil-images/intelligent-icon.png" alt="Intelligent Icon" />}
                showen={intl.formatMessage({ id: "intelligentDiagnostic" })}
                hiden={intl.formatMessage({ id: "intelligentDiagnosticDescription" })}
                buttonText="Read the docs"
                buttonLink="#"
            />
          </div>
          <div className="card">
            <DynamicComponent
                iconUrl={<StaticImage className='image-icon' src="../../images/accueil-images/phone-icon.png" alt="Phone Icon" />}
                showen={intl.formatMessage({ id: "personalizedRemediation" })}
                hiden={intl.formatMessage({ id: "personalizedRemediationDescription" })}
                buttonText="Read the docs"
                buttonLink="#"
            />
          </div>
          <div className="card">
            <DynamicComponent 
                iconUrl={<StaticImage className='image-icon' src="../../images/accueil-images/time-icon.png" alt="Time Icon" />}
                showen={intl.formatMessage({ id: "selfAssessment" })}
                hiden={intl.formatMessage({ id: "selfAssessmentDescription" })}
                buttonText="Read the docs"
                buttonLink="#"
            />
          </div>
          <div className="card">
            <DynamicComponent
                iconUrl={<StaticImage className='image-icon' src="../../images/accueil-images/repport-icon.png" alt="Report Icon" />}
                showen={intl.formatMessage({ id: "instantReports" })}
                hiden={intl.formatMessage({ id: "instantReportsDescription" })}
                buttonText="Read the docs"
                buttonLink="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


function DynamicComponent({ iconUrl, showen,hiden, buttonText, buttonLink }) {
  return (
    <div className="cards group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
          {iconUrl}
        </span>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p className='shoen-content'>{showen}</p>
          <p className='hidden-content'>{hiden}</p>
        </div>
      </div>
    </div>
  );
}
