import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl'; // Import useIntl hook

export default function Hero() {
    const intl = useIntl(); // Initialize the useIntl hook

    const titleStyle = {
        lineHeight: "1.2",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: "800",
        color: "#3E3E3E"
    };

    const buttonStyle = {
        fontFamily: "'Montserrat', sans-serif",
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
                <div className="lg:flex lg:items-center">
                    <div className="lg:w-1/2">
                        {/* Use intl.formatMessage to access values from the JSON file */}
                        <h1 style={titleStyle} className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight md:leading-tight dark:text-white">{intl.formatMessage({ id: "heroTitle" })}</h1>
                        <p className="max-w-xl mt-4 text-base md:text-lg lg:text-xl font-light text-gray-500 md:mb-6 lg:mb-8 dark:text-gray-400">{intl.formatMessage({ id: "heroDescription" })}</p>
                        <p className="max-w-xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> <span style={{ color: '#f1bf5b', fontWeight: "bold" }}>{intl.formatMessage({ id: "primary" })}</span> - <span style={{ color: '#f4876a', fontWeight: "bold" }}>{intl.formatMessage({ id: "middleSchool" })}</span> - <span style={{ color: '#b46f8d', fontWeight: "bold" }}>{intl.formatMessage({ id: "highSchool" })}</span></p>
                        <a href="#" style={buttonStyle} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            {intl.formatMessage({ id: "createAccountButton" })}
                        </a>
                    </div>
                    <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
                        <StaticImage
                            src="../../images/accueil-images/header.png"
                            alt="Flowbite Logo"
                            className="max-w-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
