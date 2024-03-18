import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl'; 
import "../../styles/accueil-styles/hero.css";

export default function Temoignages() {
    const intl = useIntl(); 
    const [currentSlide, setCurrentSlide] = useState(0);
    const [arabeStyle,setStyle] = React.useState();

    useEffect(() => {
        const interval = setInterval(() => {
            const nextSlide = (currentSlide + 1) % 3; // Assuming 4 slides
            setCurrentSlide(nextSlide);
        }, 5000); // Change slides every 5 seconds

        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
    };

    // Changer la direction du composant quand la langue est l'arabe
    const locale = intl.locale;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

    React.useEffect(() => {
        setStyle(locale === 'ar' ? {marginTop : "-120px"} : "");
    }, [direction]);

    return (
        <div className='testi-cantainer'>
            <div className="flex justify-center">
                <h1 className='text-4xl font-bold'>{intl.formatMessage({ id: 'titleTestimonials' })}</h1>
            </div>
            
        <div className="slider">
        <input
            type="radio"
            name="slider"
            title="slide1"
            checked={currentSlide === 0}
            className="slider__nav"
            onClick={() => handleSlideChange(0)}
        />
        <input
            type="radio"
            name="slider"
            title="slide2"
            checked={currentSlide === 1}
            className="slider__nav"
            onClick={() => handleSlideChange(1)}
        />
        <input
            type="radio"
            name="slider"
            title="slide3"
            checked={currentSlide === 2}
            className="slider__nav"
            onClick={() => handleSlideChange(2)}
        />
        <div className="slider__inner">
            <div className="slider__contents">
            <StaticImage
                src="../../images/accueil-images/maman-revieww.png"
                alt=""
            />
            <h2 className="slider__caption">{intl.formatMessage({ id: 'testimonialOneName1' })}</h2>
            <p className="slider__txt">
            {intl.formatMessage({ id: 'testimonialOneContent1' })}
            </p>
            </div>
            <div className="slider__contents">
            <StaticImage
                src="../../images/accueil-images/maman-revieww.png"
                alt=""
            />
            <h2 className="slider__caption">{intl.formatMessage({ id: 'testimonialOneName2' })}</h2>
            <p className="slider__txt">
            {intl.formatMessage({ id: 'testimonialOneContent2' })}
            </p>
            </div>
            <div className="slider__contents">
            <StaticImage
                src="../../images/accueil-images/maman-revieww.png"
                alt=""
            />
            <h2 className="slider__caption">{intl.formatMessage({ id: 'testimonialOneName1' })}</h2>
            <p className="slider__txt">
            {intl.formatMessage({ id: 'testimonialOneContent1' })}
            </p>
            </div>
            <div className="slider__contents">
            <StaticImage
                src="../../images/accueil-images/maman-revieww.png"
                alt=""
            />
            <h2 className="slider__caption">{intl.formatMessage({ id: 'testimonialOneName2' })}</h2>
            <p className="slider__txt">
            {intl.formatMessage({ id: 'testimonialOneContent2' })}
            </p>
            </div>
            <div className="slider__contents">
            <StaticImage
                src=""
                alt=""
            />
            <h2 className="slider__caption">{intl.formatMessage({ id: 'testimonialOneName3' })}</h2>
            <p className="slider__txt">
            {intl.formatMessage({ id: 'testimonialOneContent3' })}
            </p>
            </div>
        </div>
        </div>
        </div>
    );
}
