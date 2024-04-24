import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../styles/parents-styles/exceller.css'
import { useIntl } from 'gatsby-plugin-intl'; // Import useIntl hook
import { Link } from 'gatsby';


export default function Exceller() {

  const intl = useIntl(); 

  const [margin,setMargin] = React.useState({})
  const [marginsection,setmarginsection] = React.useState({});

  // Change the direction of the component when the language is Arabic
  const locale = intl.locale;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section dir={direction} className={`bg-white dark:bg-gray-900 ${locale==="ar" ? 'arabe-style-exceller':'fr-style-exceller'}`}>
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 flex flex-col items-center lg:flex-row">
        <div style={margin} className={`lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:justify-start exceller-text ${locale==="ar" ? 'arabe-margin-exceller':'fr-margin-exceller'}`}>

          {/* Hero title 1 */}
          <p className='titre-two-astuces'>
            {intl.formatMessage({ id: 'titreone' })} <span>{intl.formatMessage({ id: 'exceller' })}</span> {intl.formatMessage({ id: 'titretwo' })}
          </p>

          {/* Hero Paragraph */}
          <p className='text-astuces'>
          {intl.formatMessage({ id: 'textparents' })}
          </p>

          {/* la button d'inscription */}
          <div className="text-center">
              <Link to='/inscription' className="hero-button text-white py-2 px-4 border rounded inline-block mt-4" style={{ backgroundColor: "#57bef9" }}>
                  {intl.formatMessage({ id: "createAccount" })}
              </Link>
          </div>
        </div>

        {/* L'image de Hero */}
        <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 flex justify-center">
          <StaticImage
            src="../../images/parents-images/parents-cover.png"
            alt="Hero image"
            className="max-w-full"
          />
        </div>
      </div>
    </section>
  )
}
