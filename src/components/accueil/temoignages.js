import React, { useState, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { StaticImage } from 'gatsby-plugin-image';

function Temoignages() {
  const [styleCard, setStyleCard] = useState({});

  const intl = useIntl();
  const locale = intl.locale;

  useEffect(() => {
    switch (locale) {
      case 'ar':
        setStyleCard({
          height: '280px'
        });
        break;
      case 'fr':
      default:
        setStyleCard({
          height: '400px'
        });
        break;
    }
  }, [locale]);

  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  const testimonials = [
    {
      name: intl.formatMessage({ id: 'testimonialOneName1' }),
      title: intl.formatMessage({ id: 'testimonialRole1' }),
      content: intl.formatMessage({ id: 'testimonialOneContent1' }),
      imageSrc: "../../images/accueil-images/default-avatar.jpg",
      margin: locale === 'ar' ? { marginTop: '10px' } : { marginTop: '45px' }
    },
    {
      name: intl.formatMessage({ id: 'testimonialOneName2' }),
      title: intl.formatMessage({ id: 'testimonialRole2' }),
      content: intl.formatMessage({ id: 'testimonialOneContent2' }),
      imageSrc: "../../images/accueil-images/default-avatar.jpg",
      margin: locale === 'ar' ? { marginTop: '60px' } : { marginTop: '100px' }
    },
    {
      name: intl.formatMessage({ id: 'testimonialOneName3' }),
      title: intl.formatMessage({ id: 'testimonialRole3' }),
      content: intl.formatMessage({ id: 'testimonialOneContent3' }),
      imageSrc: "../../images/accueil-images/default-avatar.jpg",
      margin: locale === 'ar' ? { marginTop: '30px' } : { marginTop: '50px' }
    }
  ];

  return (
    <div className="flex flex-col items-center tem_cards_cont" >
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col flex-grow w-full md:w-1/2 lg:w-460 px-2 mb-4 card_tem_mb">
            <div
              style={styleCard}
              className="flex justify-center items-start flex-col p-5 bg-white hover:shadow-indigo-300 hover:shadow-lg rounded-lg border relative"
            >
              <StaticImage
                            src="../../images/accueil-images/temoignage_icone.png"
                            alt="Hero image"
                            style={{ width:"200px",marginBottom:"20px" }}
                        />
              <div className="flex flex-col gap-2 flex-grow">
                <p dir={direction} className="text-sm md:text-base">
                  {testimonial.content}
                </p>
                <div dir={direction} style={testimonial.margin} className="flex items-center gap-2">
                  <StaticImage
                    src="../../images/accueil-images/default-avatar.jpg"
                    alt="default profile image"
                    className="w-8 h-8 rounded-full" 
                  />
                  <div>
                    <h3 className="text-base font-semibold">{testimonial.name}</h3>
                    <p style={{ color:"#f98c06" }} className="text-xs">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Temoignages;
