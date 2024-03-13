import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/parents-styles/cardsparent.css';
import { useIntl } from 'gatsby-plugin-intl';


export default function Cardsparent() {

    const intl = useIntl();

  const Card = ({ title, description, image }) => {
    return (
      <a
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <div className="flex justify-center mb-4">
            {image},
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center"> 
          <span>{title}</span>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-center"> 
          {description}
        </p>
      </a>
    );
  }

  return (
    <div className='cards-parents-container'>
        <div>
      <h1 className="text-center text-3xl font-bold mb-8">{intl.formatMessage({ id: 'titrecardsone' })} <span>{intl.formatMessage({ id: 'spanCards' })}</span> 
      {intl.formatMessage({ id: 'titrecardstwo' })}</h1>
        </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <Card
          title={intl.formatMessage({ id: 'card1' })}
          description={intl.formatMessage({ id: 'desc1' })}
          image={<StaticImage
            style={{ width:"80px" }}
            className='cards-icons image-decalage' src="../../images/parents-images/cards-images/app-icon.png" />}
        />

        <Card
          title={intl.formatMessage({ id: 'card2' })}
          description={intl.formatMessage({ id: 'desc2' })}
          image={<StaticImage 
            style={{ width:"50px" }}
            className='cards-icons' src="../../images/parents-images/cards-images/checklist-icon.png"/>}
        />

        <Card
          title={intl.formatMessage({ id: 'card3' })}
          description={intl.formatMessage({ id: 'desc3' })}
          image={<StaticImage 
            style={{ width:"50px" }}
            className='cards-icons' src="../../images/parents-images/cards-images/rocket-icon.png"/>}
        />

        <Card
          title={intl.formatMessage({ id: 'card4' })}
          description={intl.formatMessage({ id: 'desc4' })}
          image={<StaticImage 
            style={{ width:"50px" }}
            className='cards-icons' src="../../images/parents-images/cards-images/money-icon.png"/>}
        />
      </div>
    </div>
  );
}
