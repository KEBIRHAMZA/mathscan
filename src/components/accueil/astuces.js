import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/accueil-styles/astuces.css';
import { useIntl } from 'gatsby-plugin-intl';

export default function Astuces() {
  const intl = useIntl(); 

  const [margin,setMargin] = React.useState({})

  // Change the direction of the component when the language is Arabic
  const locale = intl.locale;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  React.useEffect(() => {
    locale === 'ar' ? setMargin({marginRight : "10%"}) : setMargin({});
  }, [direction]);
  
  return (
    <section dir={direction} style={{ marginTop: "200px", marginBottom: "300px" }} className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 flex flex-col items-center lg:flex-row">
        <div style={margin} className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:justify-start">

          {/* Hero title 1 */}
          <p className='titre-two-astuces'>
               {intl.formatMessage({ id: 'tipsSectionTitle' })}
          </p>

          {/* Hero Paragraph */}
          <p className='text-astuces'>
              {intl.formatMessage({ id: 'tipsSectionSubtitle' })}
          </p>

          {/* la button d'inscription */}
          <a
            href="#"
            className="btn-astuces"
            style={{ backgroundColor: '#0dcaf0' }}
          >
            {intl.formatMessage({ id: 'tipsSectionButton' })}
          </a>
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
