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
        locale === 'ar' ? setMargin({marginRight : "300px", marginTop: "50px", marginBottom: "50px"}) : setMargin({marginLeft : "250px"});
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
        <div className="images-container-pricing">
                 <StaticImage
                     src="../../images/tarifs-images/pricing-cover.png"
                     alt=""
                     className='images-pricing'
                 />
             </div>
        </div>
    </section>
    // <section dir={direction} className="mb-40 conatiner-for-school">
    //     <div className="px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
    //     <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
    //         <div className="grid items-center gap-12 lg:grid-cols-2">
    //         <div className="text-tarifs mt-12 lg:mt-0">
    //             <p className='titre-two-school'>
    //             {intl.formatMessage({ id: 'titrformule' })} <span>{intl.formatMessage({ id: 'spanformule' })}</span>
    //             </p>
    //             <p className='text-school'>
    //             {intl.formatMessage({ id: 'textformule' })}
    //             </p>
                
    //             {/* la button d'inscription */}
    //                     <div className={`${locale == "ar" ? `flex justify-center sm:justify-end text-center` : `flex justify-center text-center`} `}>
    //                         <Link to='/inscription' className="hero-button text-white py-2 px-4 border rounded inline-block mt-4">
    //                             {intl.formatMessage({ id: "createAccountButton" })}
    //                         </Link>
    //                     </div>

    //         </div>
    //         <div className="images-container-pricing">
    //             <StaticImage
    //                 src="../../images/tarifs-images/pricing-cover.png"
    //                 alt=""
    //                 className='images-pricing'
    //             />
    //         </div>
    //         </div>
    //     </div>
    //     </div>
    // </section>
  )
}
