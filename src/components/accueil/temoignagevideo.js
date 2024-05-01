import React from 'react';
import '../../styles/accueil-styles/temoignagevideo.css'; 
import { useIntl } from 'gatsby-plugin-intl';


const ReactCardSlider =(props)=>{

    const intl = useIntl();

    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return(
        <>
        <div className="flex justify-center" style={{ marginTop:"150px",marginBottom:"50px" }}>
            <h1 className='text-5xl font-bold titre-video'>{ intl.formatMessage({ id: 'titleTestimonials' }) }</h1>
        </div>
        <div id="main-slider-container" style={{ margin:'auto' }}>
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={slideRight}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none" style={{ marginBottom:"150px" }}>
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <div id="slider">
               { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index}>
                            <iframe
                                    title={`Adult Video ${index + 1}`}
                                    width="100%"
                                    height="400px"
                                    src={slide}
                                    frameBorder={0}
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen=""
                                    className='video-silder-container-mb'
                                />
                            </div>
                        )
                    })
                }
            </div>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={slideLeft}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-black dark:group-focus:ring-gray-800/70 group-focus:outline-none" style={{ marginBottom:"150px" }}>
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
        </>

    )
}
function Temoignagevideo() {
    
    const slides = [
        "https://www.youtube.com/embed/K9veIwpcO-g?si=BDvkRSeDalCS5FRw",
        "https://www.youtube.com/embed/OJlxyI234vs?si=R0e4mxMRdwebPnOD",
        "https://www.youtube.com/embed/njOzXFBJ-hM?si=-mnwXvv-SfVmoFO4",
        "https://www.youtube.com/embed/bYRK1gC9I4k?si=RjCpVudvypsaWIKp",
        "https://www.youtube.com/embed/d7ADhSJJR7A?si=4CQZP68dRJ5ebiUt",
        "https://www.youtube.com/embed/G90FGCnsYDo"
    ]
    return (
      <div id="body">
        <ReactCardSlider slides={slides}/>
      </div>
    );
  }
  
  export default Temoignagevideo;
