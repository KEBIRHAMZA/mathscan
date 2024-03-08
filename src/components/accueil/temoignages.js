import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl'; 
import "../../styles/accueil-styles/hero.css"

export default function Temoignages() {
    const intl = useIntl(); 

    const [margin,setMargin] = React.useState({})

    // Changer la direction du composant quand la langue est l'arabe
    const locale = intl.locale;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    React.useEffect(() => {
        locale === 'ar' ? setMargin({marginRight : "10%"}) : setMargin({});
    }, [direction]);

    return (
        <section className="hero-section text-center bg-white dark:bg-gray-900">
            <h3 className="title-temoignage md:block mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">{intl.formatMessage({ id: "titleTestimonials" })}</h3>
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
                <div className="lg:flex lg:items-center">
                    <div style={margin} className="lg:w-1/2">
                        <iframe
                            src="https://www.youtube.com/embed/G90FGCnsYDo?controls=0"
                            title="YouTube video player"
                            style={{ 
                                width: '100%',
                                height: '300px'
                            }}
                        />
                    </div>
                    <div dir={direction} className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
                        <div className="max-w-md w-full h-auto lg:max-h-[calc(56.25vw*7/16)] bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-start">
                            <div className="text-lg font-semibold text-gray-800 mb-3">
                            J'ai la joie de vous annoncer que la note de ma fille J. est passée de
                            9/20 à 17/20 et cela grâce à Mathscan. Merci à l'équipe pour tous ses
                            efforts.
                            </div>
                            <div className="flex items-center mb-1">
                            <StaticImage
                                src="../../images/accueil-images/maman-revieww.png"
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className="font-medium text-gray-600">{intl.formatMessage({ id: "testimonialOneName" })}</span>
                            </div>
                            <div className="text-sm text-gray-500 mb-4">{intl.formatMessage({ id: "testimonialOneRole" })}</div>
                            <div className="flex">
                            <img
                                src="https://icons.getbootstrap.com/assets/icons/star-fill.svg"
                                className="w-6 h-6 text-yellow-400"
                            />
                            <img
                                src="https://icons.getbootstrap.com/assets/icons/star-fill.svg"
                                className="w-6 h-6 text-yellow-400"
                            />
                            <img
                                src="https://icons.getbootstrap.com/assets/icons/star-fill.svg"
                                className="w-6 h-6 text-yellow-400"
                            />
                            <img
                                src="https://icons.getbootstrap.com/assets/icons/star-fill.svg"
                                className="w-6 h-6 text-yellow-400"
                            />
                            <img
                                src="https://icons.getbootstrap.com/assets/icons/star-fill.svg"
                                className="w-6 h-6 text-yellow-400"
                            />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
