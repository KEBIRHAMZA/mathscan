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
    <StaticImage src="../../images/accueil-images/partner-icons/al-hikma.png" alt="Flowbite Logo" style={{ width:'177px',marginTop:'-50px' }}/>,
    <StaticImage src="../../images/accueil-images/partner-icons/el-fateh.png" alt="Flowbite Logo" style={{ width:'100px',marginTop:"-68px" }}/>,
    <StaticImage src="../../images/accueil-images/partner-icons/moubadara.png" alt="Flowbite Logo" style={{ width:'177px',marginTop:"-40px" }}/>,
    <StaticImage src="../../images/accueil-images/partner-icons/residence.jpg" alt="Flowbite Logo" style={{ width:'100px' ,marginTop:'-50px' }}/>,
    <StaticImage src="../../images/accueil-images/partner-icons/stevejobs.png" alt="Flowbite Logo" style={{ width:'150px',marginTop:"-80px" }}/>,
  ];

  return (
    <div className="container-partner my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-16 text-3xl font-bold partener-title">
          {intl.formatMessage({ id: 'partnersSectionTitle' })}
        </h2>

        <div className="grid px-4 md:grid-cols-2 lg:grid-cols-5">
          {users.map((user, index) => (
            <div key={index} className="media-ic mx-auto mb-12 lg:mb-0">
              {user}
            </div>
          ))}
        </div>
        <Link to='/inscription' className="hero-button text-white py-2 px-4 border rounded inline-block mt-4" style={{ backgroundColor: "#57bef9" }}>
                                {intl.formatMessage({ id: "createAccountButton" })}
                            </Link>
      </section>
    </div>
  );
};

export default Partner;
