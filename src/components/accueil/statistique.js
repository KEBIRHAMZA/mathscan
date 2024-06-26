import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';
import '../../styles/accueil-styles/statistique.css';

export default function Statistique() {
    const intl = useIntl();
    const locale = intl.locale;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <div dir={direction} className={`container-statistique ${locale==="ar" ? '':'container-sat-fr'}`}>
            <div className={`statistics-content grid grid-cols-1 lg:grid-cols-3 gap-3 ${locale==="ar" ? 'cantainer-two-margin' : ''}`}>
                <div className={`lg:col-span-1 first`}>

                    {/* Exercices et problèmes mathématiques ludiques */}
                    <div className={`grid grid-cols-3 gap-4`}>
                        <div className={`image-container-certificate`}>
                            <StaticImage
                                src="../../images/accueil-images/certificate-icon.png"
                                alt="Flowbite Logo"
                            />
                        </div>
                        <div className={`col-span-2 inner-container ${locale==="ar" ? '':'text-margin-cara'}`}>
                            <span className={`number`}>60K+</span> <br />
                            <p className={`description`}>{intl.formatMessage({ id: "exercises" })}</p>
                        </div>
                    </div>


                </div>

                {/* Années de recherche et 200 publications */}
                <div className={`prt-statistique lg:col-span-1`}>
                    <div className={`grid grid-cols-3 gap-4`}>
                        <div className={`image-container-student`}>
                            <StaticImage
                                src="../../images/accueil-images/student-icon.png"
                                alt="Flowbite Logo"
                            />
                        </div>
                        <div className={`col-span-2 inner-container ${locale==="ar" ? '':'text-margin-cara'}`}>
                            <span className={`number`}>15 {intl.formatMessage({ id: "year" })}</span> <br />
                            <p className={`description`}>{intl.formatMessage({ id: "research" })}</p>
                        </div>
                    </div>
                </div>

                {/* Distinctions nationales et internationales */}
                <div className={`prt-statistique lg:col-span-1`}>
                    <div className={`grid grid-cols-3 gap-4`}>
                        <div className={`image-container-teacher`}>
                            <StaticImage
                                src="../../images/accueil-images/teacher-icon.png"
                                alt="Flowbite Logo"
                            />
                        </div>
                        <div className={`col-span-2 inner-container ${locale==="ar" ? '':'text-margin-cara'}`}>
                            <span className={`number`}>5</span> <br />
                            <p className={`description`}>{intl.formatMessage({ id: "distinctions" })}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
