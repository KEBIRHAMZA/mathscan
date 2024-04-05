import React, { useState, useEffect } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

function Temoignages() {
  const [styleCard, setStyleCard] = useState({});
  const [styleProfile, setStyleProfile] = useState({});

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
      case 'en':
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
      imageSrc: 'https://pagedone.io/asset/uploads/1696229969.png',
      margin: locale === 'ar' ? { marginTop: '10px' } : { marginTop: '28px' }
    },
    {
      name: intl.formatMessage({ id: 'testimonialOneName2' }),
      title: intl.formatMessage({ id: 'testimonialRole2' }),
      content: intl.formatMessage({ id: 'testimonialOneContent2' }),
      imageSrc: 'https://pagedone.io/asset/uploads/1696229969.png',
      margin: locale === 'ar' ? { marginTop: '35px' } : { marginTop: '100px' }
    },
    {
      name: intl.formatMessage({ id: 'testimonialOneName3' }),
      title: intl.formatMessage({ id: 'testimonialRole3' }),
      content: intl.formatMessage({ id: 'testimonialOneContent3' }),
      imageSrc: 'https://pagedone.io/asset/uploads/1696229969.png',
      margin: locale === 'ar' ? { marginTop: '30px' } : { marginTop: '50px' }
    }
  ];

  return (
    <div className="flex flex-col items-center" style={{ marginTop: '-100px' }}>
      <h2 className="text-4xl font-bold my-6"></h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col flex-grow w-full md:w-1/2 lg:w-1/3 px-2 mb-4" style={{ width:"400px" }}>
            <div
              style={styleCard}
              className="flex justify-center items-start flex-col p-5 bg-white hover:shadow-indigo-300 hover:shadow-lg rounded-lg border relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="icon icon-tabler icon-tabler-quote rotate-180 text-sky-500"
                viewBox="0 0 24 24"
                style={{ color: "#f59e0b",marginBottom:"20px" }}
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M10 11H6a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5M19 11h-4a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 011 1v6c0 2.667-1.333 4.333-4 5"></path>
              </svg>
              <div className="flex flex-col gap-2 flex-grow">
                <p dir={direction} className="text-sm md:text-base">
                  {testimonial.content}
                </p>
                <div dir={direction} style={testimonial.margin} className="flex items-center gap-2">
                  <img src={testimonial.imageSrc} alt={testimonial.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <h3 className="text-base font-semibold">{testimonial.name}</h3>
                    <p className="text-xs">{testimonial.title}</p>
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
