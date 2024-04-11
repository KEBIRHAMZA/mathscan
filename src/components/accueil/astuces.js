import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/accueil-styles/astuces.css';
import { useIntl } from 'gatsby-plugin-intl';
import { Link } from 'gatsby';

export default function Astuces() {
  const intl = useIntl(); 

  const [margin,setMargin] = React.useState({})
  const [marginsection,setmarginsection] = React.useState({})

  // Change the direction of the component when the language is Arabic
  const locale = intl.locale;
  const direction = locale === 'ar' ? 'ltr' : 'rtl';
  const entidirection = locale === 'ar' ? 'rtl' : 'ltr';

  //des styles selon la langue
  React.useEffect(() => {
    locale === 'ar' ? setMargin({marginRight : "-70px"}) : setMargin({marginLeft : "10px"});
    locale === 'ar' ? setmarginsection({ marginTop: "-10px", marginBottom: "-100px",marginLeft:"90px",width:"1400px"}) : setmarginsection({ marginTop: "-10px", marginBottom: "-100px",marginLeft:"-100px"});
  }, [direction]);
  
  
  return (
    <section dir={direction} style={marginsection} className="bg-white dark:bg-gray-900 astuce-section">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 flex flex-col items-center lg:flex-row">
        <div dir={entidirection} style={margin} className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:justify-start">

          {/* Hero title 1 */}
          <p className='titre-two-astuces'>
               {intl.formatMessage({ id: 'tipsSectionTitle' })}
          </p>

          {/* Hero Paragraph */}
          <p className='text-astuces'>
              {intl.formatMessage({ id: 'tipsSectionSubtitle' })}
          </p>

          {/* la button d'inscription */}
          <div className="text-center">
              <Link to='/inscription' className="hero-button text-white py-2 px-4 border rounded inline-block mt-4">
                  {intl.formatMessage({ id: "tipsSectionButton" })}
              </Link>
          </div>
          {/* <a
            href="#"
            className="btn-astuces"
            style={{ backgroundColor: '#0dcaf0' }}
          >
            {intl.formatMessage({ id: 'tipsSectionButton' })}
          </a> */}
        </div>

        {/* L'image de Hero */}
        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 flex justify-center">
          <StaticImage
            src="../../images/accueil-images/ebook.png"
            alt="Hero image"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
