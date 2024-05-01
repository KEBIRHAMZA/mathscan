import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../styles/tarifs-styles/formules.css'
import { useIntl } from 'gatsby-plugin-intl'; 

export default function Formules() {

    const intl = useIntl(); 

    // Changer la direction du composant quand la langue est l'arabe
    const locale = intl.locale;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    

  return (
    <section dir={direction} className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 flex flex-col items-center lg:flex-row">
        <div className="lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:justify-start">

            {/* Hero title 1 */}
            <p className='titre-two-astuces'>
            {intl.formatMessage({ id: 'titrformule' })} <span>{intl.formatMessage({ id: 'spanformule' })}</span>
            </p>

            {/* Hero Paragraph */}
            <p className='text-astuces'>
            {intl.formatMessage({ id: 'textformule' })}
            </p>

        </div>

<div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 flex justify-center">
          <StaticImage
            src="../../images/tarifs-images/pricing-cover.png"
            alt="Hero image"
            className={`${locale==="ar" ? 'images-pricing-ar':'images-pricing'}`}
          />
        </div>
        </div>
    </section>
  )
}
