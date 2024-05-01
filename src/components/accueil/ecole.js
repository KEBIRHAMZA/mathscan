import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/accueil-styles/ecole.css';
import { useIntl } from 'gatsby-plugin-intl';
import { Link } from 'gatsby';

export default function Ecole() {
  const intl = useIntl(); 

  const [margin,setMargin] = React.useState({})

  // Change the direction of the component when the language is Arabic
  const locale = intl.locale;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  //le style selon la langue
  React.useEffect(() => {
    locale === 'ar' ? setMargin({}) : setMargin({});
  }, [locale]);

  return (
    <section dir={direction} style={{marginBottom:"-80px"}} className="container-for-school bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 flex flex-col items-center lg:flex-row">
        <div style={margin} className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:justify-start">

          {/* Hero title 1 */}
          <h1 dir={direction} style={locale==="ar" ? {color: "#FF64B1", marginBottom: "20px",fontSize:"60px" } :{color: "#FF64B1", marginBottom: "20px" }} className='titre-one'>
            {intl.formatMessage({ id: "schoolSectionTitle" })}
          </h1>

          {/* Hero Paragraph */}
          <p dir={direction} className='titre-two-school'>
            {intl.formatMessage({ id: "schoolSectionSubtitle" })} <span style={{ color: '#FF64B1' }}>{intl.formatMessage({ id: "schoolSectionHours" })}</span> {intl.formatMessage({ id: "schoolSectionSubtitlePart2" })}
          </p>

          {/* Les niveaux */}
          <p dir={direction} className='text-school' style={locale==="ar" ? { fontSize:"25px" } :{}}>
            {intl.formatMessage({ id: "schoolSectionDescription1" })}
          </p>
          <p dir={direction} className='text-school' style={locale==="ar" ? { fontSize:"25px" } :{}}>
            {intl.formatMessage({ id: "schoolSectionDescription2" })}
          </p>

          {/* la button d'inscription */}
          <Link
            to="/"
            className="flex justify-center btn-school"
            style={{ backgroundColor: "#57bef9" }}
          >
            {intl.formatMessage({ id: "schoolSectionButton" })}
          </Link>
        </div>

        {/* L'image de Hero */}
        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 flex justify-center">
          <StaticImage
            src="../../images/accueil-images/for-schools.png"
            alt="Hero image"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
