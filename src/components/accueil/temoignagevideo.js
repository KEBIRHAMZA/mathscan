import React from 'react';
import '../../styles/accueil-styles/temoignagevideo.css';

const adultVideoUrls = [
    "https://www.youtube.com/embed/4B4h0a36-ic?si=ooxgikt6K52FJHf-",
    "https://www.youtube.com/embed/G90FGCnsYDo?si=WnP11jD36qKzJldQ",
];

const childrenVideoUrls = [
    "https://www.youtube.com/embed/2VJWUARvkIg?si=PZTJ3MBXXamGPUg6",
    "https://www.youtube.com/embed/K9dqMe3g2tE?si=YGMU2gFQ9E9tWq0U",
    "https://www.youtube.com/embed/VCy8-y7tr9Q?si=ZSMn3vlhDk-QACA0"
];

const Temoignagevideo = () => {
    return (
        <>
            {/* --------------------------- Temoignages adultes ------------------------------ */}
            <div style={{ height: "100%", overflowX: "hidden", textAlign: "center", marginTop: "100px" }}>
                <div className="flex justify-center">
                    <h1 className='text-4xl font-bold'>Temoignages adultes</h1>
                </div>
                <div className="csslider infinity" id="sliderAdult">
                    {adultVideoUrls.map((url, index) => (
                        <input key={index} type="radio" name="slidesAdult" defaultChecked={index === 0 ? "checked" : ""} id={`slidesAdult_${index + 1}`} />
                    ))}
                    <ul>
                        {adultVideoUrls.map((url, index) => (
                            <li key={index}>
                                <iframe
                                    title={`Adult Video ${index + 1}`}
                                    width="100%"
                                    height="400px"
                                    src={url}
                                    frameBorder={0}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen=""
                                />
                                <p />
                            </li>
                        ))}
                    </ul>
                    <div className="arrows">
                        {adultVideoUrls.map((_, index) => (
                            <label key={index} htmlFor={`slidesAdult_${index + 1}`} />
                        ))}
                        <label className="goto-first" htmlFor="slidesAdult_1" />
                        <label className="goto-last" htmlFor={`slidesAdult_${adultVideoUrls.length}`} />
                    </div>
                    <div className="navigation">
                        <div>
                            {adultVideoUrls.map((_, index) => (
                                <label key={index} htmlFor={`slidesAdult_${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------------------- Temoignages enfants ------------------------------ */}
            <div style={{ height: "100%", overflowX: "hidden", textAlign: "center", marginTop: "100px" }}>
                <div className="flex justify-center">
                    <h1 className='text-4xl font-bold'>Temoignages enfants</h1>
                </div>
                <div className="csslider infinity" id="sliderChildren">
                    {childrenVideoUrls.map((url, index) => (
                        <input key={index} type="radio" name="slidesChildren" defaultChecked={index === 0 ? "checked" : ""} id={`slidesChildren_${index + 1}`} />
                    ))}
                    <ul>
                        {childrenVideoUrls.map((url, index) => (
                            <li key={index}>
                                <iframe
                                    title={`Child Video ${index + 1}`}
                                    width="100%"
                                    height="400px"
                                    src={url}
                                    frameBorder={0}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen=""
                                />
                                <p />
                            </li>
                        ))}
                    </ul>
                    <div className="arrows">
                        {childrenVideoUrls.map((_, index) => (
                            <label key={index} htmlFor={`slidesChildren_${index + 1}`} />
                        ))}
                        <label className="goto-first" htmlFor="slidesChildren_1" />
                        <label className="goto-last" htmlFor={`slidesChildren_${childrenVideoUrls.length}`} />
                    </div>
                    <div className="navigation">
                        <div>
                            {childrenVideoUrls.map((_, index) => (
                                <label key={index} htmlFor={`slidesChildren_${index + 1}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Temoignagevideo;
