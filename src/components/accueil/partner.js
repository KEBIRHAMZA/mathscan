import React from 'react';
import '../../styles/accueil-styles/partner.css';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';
import { Link } from 'gatsby';

const Partner = () => {
  const intl = useIntl();

  const users = [
    <StaticImage src="../../images/accueil-images/partner-icons/kaizen.png" alt="Flowbite Logo" style={{ width:'99px',marginTop:"-10px" }}/>,
    <StaticImage src="../../images/accueil-images/partner-icons/mowatana.png" alt="Flowbite Logo" style={{ width:'142px',marginTop:"-10px" }}/>,
    <StaticImage src="../../images/accueil-images/partner-icons/jamiati.png" alt="Flowbite Logo" style={{ width:'169px',marginTop:"15px" }}/>,
    <StaticImage src="../../images/accueil-images/partner-icons/elbilia.png" alt="Flowbite Logo" style={{ width:'105px' }}/>,
    <StaticImage src="../../images/accueil-images/partner-icons/tijari.png" alt="Flowbite Logo" style={{ width:'177px' }}/>,
  ];

  return (
    <div className="container-partner my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 style={{ fontSize:"36px",color:"#3E3E3E" }} className="mb-16 text-3xl font-bold">
          {intl.formatMessage({ id: 'partnersSectionTitle' })}
        </h2>

        <div className="grid px-4 md:grid-cols-2 lg:grid-cols-5">
          {users.map((user, index) => (
            <div key={index} className="mx-auto mb-12 lg:mb-0">
              {user}
            </div>
          ))}
        </div>
        <Link
          to="/inscription"
          className="btn-partner"
          style={{ backgroundColor: '#0dcaf0' }}
        >
          {intl.formatMessage({ id: 'createAccountButton' })}
        </Link>
      </section>
    </div>
  );
};

export default Partner;
