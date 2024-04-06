import React from 'react';
import '../../styles/accueil-styles/media.css'
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';

const users = [
  <StaticImage src="../../images/accueil-images/media-icons/manara.png" alt="Flowbite Logo" style={{ width:"100px" }} />,
  <StaticImage src="../../images/accueil-images/media-icons/casa24.png" alt="Flowbite Logo" style={{ width:"141px" }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/al-oula.png" alt="Flowbite Logo" style={{ width:"58px" }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/snrt.png" alt="Flowbite Logo" style={{ width:"96px" }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/2mtv.png" alt="Flowbite Logo" style={{ width:"99px" }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/ecnoomist.png" alt="Flowbite Logo" style={{ width:"192px",marginTop:'-50px'  }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/feb.png" alt="Flowbite Logo" style={{ width:"91px",marginTop:'-50px'  }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/matin.png" alt="Flowbite Logo" style={{ width:"158px",marginTop:'-50px'  }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/challenge.png" alt="Flowbite Logo" style={{ width:"115px",marginTop:'-50px'  }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/jsk.png" alt="Flowbite Logo" style={{ width:"44px",marginTop:'-50px'  }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/achtari24.png" alt="Flowbite Logo" style={{ width:"133px",marginTop:'-50px'  }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/omaq.png" alt="Flowbite Logo" style={{ width:"77px",marginTop:'-50px'  }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/sky.png" alt="Flowbite Logo" style={{ width:"159px",marginTop:'-50px'  }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/jareeda24.png" alt="Flowbite Logo" style={{ width:"100px",marginTop:'-50px'  }}/>,
  <StaticImage src="../../images/accueil-images/media-icons/24h.png" alt="Flowbite Logo" style={{ width:"125px",marginTop:'-50px'  }}/>,
];



const Media = () => {
  const intl = useIntl();
  return (
    <div className="container-media my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="titre-media mb-16 text-3xl font-bold">
        {intl.formatMessage({ id: 'media' })}
        </h2>
        <div className="grid px-4 md:grid-cols-2 lg:grid-cols-5">
          {users.map((user, index) => (
            <div key={index} className="media-ic mx-auto mb-12 lg:mb-0">
              {user}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Media;
