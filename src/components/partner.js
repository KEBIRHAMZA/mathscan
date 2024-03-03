import React from 'react';
import '../styles/partner.css'
import { StaticImage } from 'gatsby-plugin-image';

const users = [
  <StaticImage src="../images/partner-icons/kaizen.png" alt="Flowbite Logo" style={{ width:'99px',marginTop:"-10px" }}/>,
  <StaticImage src="../images/partner-icons/mowatana.png" alt="Flowbite Logo" style={{ width:'142px',marginTop:"-10px" }}/>,
  <StaticImage src="../images/partner-icons/jamiati.png" alt="Flowbite Logo" style={{ width:'169px',marginTop:"15px" }}/>,
  <StaticImage src="../images/partner-icons/elbilia.png" alt="Flowbite Logo" style={{ width:'105px' }}/>,
  <StaticImage src="../images/partner-icons/tijari.png" alt="Flowbite Logo" style={{ width:'177px' }}/>,
];

const Partner = () => {
  return (
    <div className="container-partner my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 style={{ fontSize:"36px",color:"#3E3E3E" }} className="mb-16 text-3xl font-bold">
        Ils nous font confiance
        </h2>

        <div className="grid px-4 md:grid-cols-2 lg:grid-cols-5">
          {users.map((user, index) => (
            <div key={index} className="mx-auto mb-12 lg:mb-0">
              {user}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Partner;