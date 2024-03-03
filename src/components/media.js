import React from 'react';
import '../styles/media.css'
import { StaticImage } from 'gatsby-plugin-image';

const users = [
  <StaticImage src="../images/media-icons/manara.png" alt="Flowbite Logo" style={{ width:"100px" }} />,
  <StaticImage src="../images/media-icons/casa24.png" alt="Flowbite Logo" style={{ width:"141px" }}/>,
  <StaticImage src="../images/media-icons/al-oula.png" alt="Flowbite Logo" style={{ width:"58px" }}/>,
  <StaticImage src="../images/media-icons/snrt.png" alt="Flowbite Logo" style={{ width:"96px" }}/>,
  <StaticImage src="../images/media-icons/2mtv.png" alt="Flowbite Logo" style={{ width:"99px" }}/>,
  <StaticImage src="../images/media-icons/ecnoomist.png" alt="Flowbite Logo" style={{ width:"192px" }}/>,
  <StaticImage src="../images/media-icons/feb.png" alt="Flowbite Logo" style={{ width:"91px" }}/>,
  <StaticImage src="../images/media-icons/matin.png" alt="Flowbite Logo" style={{ width:"158px" }}/>,
  <StaticImage src="../images/media-icons/challenge.png" alt="Flowbite Logo" style={{ width:"115px" }}/>,
  <StaticImage src="../images/media-icons/jsk.png" alt="Flowbite Logo" style={{ width:"44px" }}/>,
  <StaticImage src="../images/media-icons/achtari24.png" alt="Flowbite Logo" style={{ width:"133px" }}/>,
  <StaticImage src="../images/media-icons/omaq.png" alt="Flowbite Logo" style={{ width:"77px" }}/>,
  <StaticImage src="../images/media-icons/sky.png" alt="Flowbite Logo" style={{ width:"159px" }}/>,
  <StaticImage src="../images/media-icons/jareeda24.png" alt="Flowbite Logo" style={{ width:"100px" }}/>,
  <StaticImage src="../images/media-icons/24h.png" alt="Flowbite Logo" style={{ width:"125px" }}/>,
];

// margin-bottom: -20px;
//     margin-top: 200px;

const Media = () => {
  return (
    <div className="container-media my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 style={{ fontSize:"36px",color:"#3E3E3E",marginBottom:"300px",marginBottom:"-20px",marginTop:"200px" }} className="mb-16 text-3xl font-bold">
        Dans les médias
        </h2>
        <div className="grid px-4 md:grid-cols-2 lg:grid-cols-5">
          {users.map((user, index) => (
            <div key={index} style={{ marginTop:'100px' }} className="mx-auto mb-12 lg:mb-0">
              {user}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Media;
