import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../styles/tarifs-styles/formules.css'
import { useIntl } from 'gatsby-plugin-intl'; 
import { Link } from 'gatsby';

export default function Formules() {

    const intl = useIntl(); 

    const [margin,setMargin] = React.useState({})

    // Changer la direction du composant quand la langue est l'arabe
    const locale = intl.locale;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    React.useEffect(() => {
        locale === 'ar' ? setMargin({marginRight : "300px", marginTop: "50px", marginBottom: "-100px"}) : setMargin({marginLeft : "px"});
    }, [direction]);

  return (
    <section dir={direction} style={margin} className="bg-white dark:bg-gray-900">
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

            {/* la button d'inscription */}
            <div className="text-center">
                <Link to='/inscription' className="hero-button text-white py-2 px-4 border rounded inline-block mt-4">
                    {intl.formatMessage({ id: "createAccount" })}
                </Link>
            </div>
        </div>

        {/* L'image de Hero */}
        <div className="images-container-pricing"style={{ marginLeft:"400px" }}>
                 <StaticImage
                     src="../../images/tarifs-images/pricing-cover.png"
                     alt=""
                     className='images-pricing'
                 />
             </div>
        </div>
    </section>
  )
}
