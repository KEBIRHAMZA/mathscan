import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl'; 
import "../../styles/accueil-styles/hero.css";

export default function Temoignages() {
    const intl = useIntl(); 

    // Changer la direction du composant quand la langue est l'arabe
    const locale = intl.locale;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-8">Témoignages</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="max-w-md mx-auto">
                    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden">
                        <div className="px-8 py-6">
                            <p className="text-white">
                                {intl.formatMessage({ id: "testimonialOneContent1" })}
                            </p>
                            <div className="mt-4 flex items-center">
                                <StaticImage
                                    className="h-10 w-10 rounded-full mr-4"
                                    src='../../images/parents-images/parents-cover.png'
                                    alt="Avatar of person"
                                />
                                <div>
                                    <p className="text-white font-medium">{intl.formatMessage({ id: "testimonialOneName1" })}</p>
                                    <p className="text-gray-200">{intl.formatMessage({ id: "testimonialRole1" })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-md mx-auto" style={{ height:"40px" }}>
                    <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden">
                        <div className="px-8 py-6">
                            <p className="text-white">
                                {intl.formatMessage({ id: "testimonialOneContent2" })}<br/><br/><br/>
                            </p>
                            <div className="mt-4 flex items-center">
                                <StaticImage
                                    className="h-10 w-10 rounded-full mr-4"
                                    src='../../images/accueil-images/maman-revieww.png'
                                    alt="Avatar of person"
                                />
                                <div>
                                    <p className="text-white font-medium">{intl.formatMessage({ id: "testimonialOneName2" })}</p>
                                    <p className="text-gray-200">{intl.formatMessage({ id: "testimonialRole2" })}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Ajout de la vidéo YouTube */}
            <div
            className="video-container mt-8 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/G90FGCnsYDo?controls=0"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Embedded YouTube Video"
                ></iframe>
            </div>
        </div>
    );
}
