import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl'; 
import { Link } from 'gatsby';
import "../../styles/accueil-styles/hero.css"

export default function Hero() {
    const intl = useIntl(); 

    const [margin,setMargin] = React.useState({})
    const [titleStyle,setTitleStyle] = React.useState({})

    // Changer la direction du composant quand la langue est l'arabe
    const locale = intl.locale;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    React.useEffect(() => {
        locale === 'ar' ? setMargin({marginRight : "20px"}) : setMargin({});
        locale === 'ar' ? setTitleStyle("hero_size_ar hero_size_ar") : setTitleStyle({});
    }, [direction]);

    return (
        <section dir={direction} className="hero-section bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
                <div className="lg:flex lg:items-center">
                    <div style={margin} className="lg:w-1/2">

                        {/* Hero title 1 */}
                        <h1 className={`titre-hero text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight md:leading-tight dark:text-white ${locale == "ar" ? titleStyle : ''} `}>
                            {intl.formatMessage({ id: "heroTitle" })}
                        </h1>

                        {/* Hero Paragraph */}
                        <p className="desc-hero max-w-xl mt-4 text-base md:text-lg lg:text-xl font-light text-gray-500 md:mb-6 lg:mb-8 dark:text-gray-400" style={locale=="ar" ? { fontSize:"23px" } :{}}>
                            {intl.formatMessage({ id: "heroDescription" })}
                        </p>

                        {/* Les niveaux */}
                        <p className="max-w-xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400" style={locale=="ar" ? { fontSize:"23px" } :{}}> 
                            <span className='span-niveau' style={{ color: '#f1bf5b' }}>
                                {intl.formatMessage({ id: "primary" })}    
                            </span> - <span className='span-niveau' style={{ color: '#f4876a' }}>
                                {intl.formatMessage({ id: "middleSchool" })}
                            </span> - <span className='span-niveau' style={{ color: '#b46f8d' }}>
                                {intl.formatMessage({ id: "highSchool" })}
                            </span>
                        </p>

                        {/* la button d'inscription */}
                        <div className="text-center">
                            <Link to='/inscription' style={{ backgroundColor:'#57bef9' }} className="hero-button text-white py-2 px-4 border rounded inline-block mt-4">
                                {intl.formatMessage({ id: "createAccountButton" })}
                            </Link>
                        </div>
                    </div>

                    {/* L'image de Hero */}
                    <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
                        <StaticImage
                            src="../../images/accueil-images/header.png"
                            alt="Hero image"
                            className={`${locale=="ar"?'hero_image_ar':''}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
