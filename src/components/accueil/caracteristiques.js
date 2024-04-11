import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { useIntl } from 'gatsby-plugin-intl';
import '../../styles/accueil-styles/caracteristiques.css';
import { Link } from 'gatsby';

export default function Caracteristiques() {

  const intl = useIntl();

  const [additionalClass, setAdditionalClass] = React.useState('');
  const [arabeStyle,setStyle] = React.useState('');

  // Changer la direction du composant quand la langue est l'arabe
  const locale = intl.locale;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  React.useEffect(() => {
    setAdditionalClass(locale === 'ar' ? "large-screen-carc" : "");
    setStyle(locale === 'ar' ? "container-arabe-caracter" : "container-caracteristiques-etranger");
  }, [direction]);

  return (
    <div dir={direction} style={locale=="ar" ? { marginRight:'90px' } :{}} className={`${arabeStyle} ${additionalClass} grid gap-2 grid-cols-2`}>

      {/* Le text de cette composant */}
      <div className="text-container">

        {/* la description de cette composant */}
        <div>

          {/* Le premier titre */}
          <p className='titre-one' style={locale=="ar" ? { fontSize:"60px" } :{}}>{intl.formatMessage({ id: "title" })}</p> <br />

          {/* Le dexieme titre */}
          <p className='titre-two' style={locale=="ar" ? { fontSize:"45px" } :{}}>
            {intl.formatMessage({ id: "improvementOne" })} <span>30%</span> {intl.formatMessage({ id: "to" })} <span>40%</span> {intl.formatMessage({ id: "improvementTwo" })}
          </p> 
          <br />

          {/* paragraph de cette composant */}
          <p className='titre-three' style={locale=="ar" ? { fontSize:"25px" } :{}}>{intl.formatMessage({ id: "progress" })}</p><br/>

          {/* La button d'inscription */}
          <div className={`${locale == "ar" ? `flex justify-center sm:justify-end text-center` : `flex justify-center text-center`} `}>
              <Link to='/inscription' className="hero-button text-white py-2 px-4 border rounded inline-block mt-4">
                  {intl.formatMessage({ id: "createAccountButton" })}
              </Link>
            </div>

        </div>


      </div>

      {/* Les cartes */}
      <div className='cards-container'>
        <div className="grid gap-4 grid-cols-2 cards-position">
          <div className="card" >
            <DynamicComponent
                iconUrl={<StaticImage className='image-icon' src="../../images/accueil-images/intelligent-icon.png" alt="Intelligent Icon" />}
                showen={intl.formatMessage({ id: "intelligentDiagnostic" })}
                hiden={intl.formatMessage({ id: "intelligentDiagnosticDescription" })}
            />
          </div>
          <div className="card">
            <DynamicComponent
                iconUrl={<StaticImage className='image-icon' src="../../images/accueil-images/phone-icon.png" alt="Phone Icon" />}
                showen={intl.formatMessage({ id: "personalizedRemediation" })}
                hiden={intl.formatMessage({ id: "personalizedRemediationDescription" })}
            />
          </div>
          <div className="card">
            <DynamicComponent 
                iconUrl={<StaticImage className='image-icon' src="../../images/accueil-images/time-icon.png" alt="Time Icon" />}
                showen={intl.formatMessage({ id: "selfAssessment" })}
                hiden={intl.formatMessage({ id: "selfAssessmentDescription" })}
            />
          </div>
          <div className="card">
            <DynamicComponent
                iconUrl={<StaticImage className='image-icon' src="../../images/accueil-images/repport-icon.png" alt="Report Icon" />}
                showen={intl.formatMessage({ id: "instantReports" })}
                hiden={intl.formatMessage({ id: "instantReportsDescription" })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}


function DynamicComponent({ iconUrl, showen, hiden }) {
  const intl = useIntl();
  const locale = intl.locale;
  return (
    <div className="cards group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10" style={{ width:"350px" }}>
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full transition-all duration-300 group-hover:scale-[15]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span style={locale == "ar" ? {marginRight:"90px"} : {marginLeft:'93px' }} className="grid h-20 w-20 place-items-center rounded-full bg-gray-500 transition-all duration-300 group-hover:bg-gray-500">
          {iconUrl}
        </span>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          {/* Styling the first 'showen' */}
          <p className='shoen-content text-lg text-center'>{showen}</p>
          {/* Styling the second 'showen' as a title */}
          <p className='hidden-content color-hidden text-center font-bold' style={locale == "ar" ? { fontSize : "25px" }:{fontSize : "25px",width:"250px",marginLeft:"10px"}}>{showen}</p>
          <p className="hidden-content text-center" style={locale == "ar" ? { fontSize : "20px" }:{}}>{hiden}</p> 
        </div>
        {/* Blue band at the bottom */}
      </div>
      <div className="blue-band absolute bottom-0 left-0 w-full h-2 bg-blue-500 transition-all duration-300 opacity-0 group-hover:opacity-100" style={{ backgroundColor:'#57bef9' }}></div>
    </div>
  );
}