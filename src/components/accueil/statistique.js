import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/accueil-styles/statistique.css';
import { useIntl } from 'gatsby-plugin-intl'; 
import { useState,useEffect } from 'react';

export default function Statistique() {

    // Changer la direction du composant quand la langue est l'arabe
    const intl = useIntl();
    const locale = intl.locale;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    const [margin,setMargin] = useState()
    useEffect(() => {
        locale === 'ar' ? setMargin({marginRight:"80px"}) : setMargin({})
    }, [locale]);

    return (
        <div dir={direction} className='container-statistique'>
            <div style={margin} className="statistics-content grid grid-cols-1 lg:grid-cols-3 gap-3">
                <div className="lg:col-span-1 first">

                    {/* Exercices et problèmes mathématiques ludiques */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="image-container-certificate">
                            <StaticImage
                                src="../../images/accueil-images/certificate-icon.png"
                                alt="Flowbite Logo"
                            />
                        </div>
                        <div className="col-span-2 inner-container">
                            <span className="number">60K+</span> <br/>
                            <p className="description">{intl.formatMessage({ id: "exercises" })}</p>
                        </div>
                    </div>


                </div>

                {/* Années de recherche et 200 publications */}
                <div className="prt-statistique lg:col-span-1">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="image-container-student">
                            <StaticImage
                                src="../../images/accueil-images/student-icon.png"
                                alt="Flowbite Logo"
                            />
                        </div>
                        <div className="col-span-2 inner-container">
                            <span className="number">15 {intl.formatMessage({ id: "year" })}</span> <br/>
                            <p className="description">{intl.formatMessage({ id: "research" })}</p>
                        </div>
                    </div>
                </div>

                {/* Distinctions nationales et internationales */}
                <div className="prt-statistique lg:col-span-1">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="image-container-teacher">
                            <StaticImage
                                src="../../images/accueil-images/teacher-icon.png"
                                alt="Flowbite Logo"
                            />
                        </div>
                        <div className="col-span-2 inner-container">
                            <span className="number">5</span> <br/>
                            <p className="description">{intl.formatMessage({ id: "distinctions" })}</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
