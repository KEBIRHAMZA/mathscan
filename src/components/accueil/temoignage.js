// Testimonials.js

import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import '../../styles/accueil-styles/temoignage.css'

const Testimonial = ({ name, role, imageSrc, content }) => (
  <div className="mb-12 md:mb-0">
    <div className="mb-6 flex justify-center">
      {imageSrc}
    </div>
    <h5 className="mb-4 text-xl font-semibold">{name}</h5>
    <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">{role}</h6>
    <p className="mb-4">{content}</p>
    <ul className="mb-0 flex items-center justify-center">
      {[...Array(5)].map((_, index) => (
        <li key={index}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-500">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        </li>
      ))}
    </ul>
  </div>
)

const Testimonials = () => (
  <div className="container-temoignage mx-auto text-center md:max-w-xl lg:max-w-3xl">
    <h3 className="title-temoignage md:block mb-6 text-3xl font-bold text-neutral-800 dark:text-neutral-200">Témoignages</h3>
    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
    </p>
    <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
      <Testimonial
        name="Maman de J.A"
        role="2ème année college"
        imageSrc={<StaticImage className='image-icon' src="../../images/accueil-images/maman-revieww.png" alt="Intelligent Icon" />}
        content="J'ai la joie de vous annoncer que la note de ma fille J. est passée de 9/20 à 17/20 et cela grâce à Mathscan. Merci à l'équipe pour tous ses efforts. Maman de J. A. 2ème année collège."
      />
      <Testimonial
        name="Maman de J.A"
        role="2ème année college"
        imageSrc={<StaticImage className='image-icon' src="../../images/accueil-images/maman-revieww.png" alt="Intelligent Icon" />}
        content="J'ai la joie de vous annoncer que la note de ma fille J. est passée de 9/20 à 17/20 et cela grâce à Mathscan. Merci à l'équipe pour tous ses efforts. Maman de J. A. 2ème année collège."
      />
      <Testimonial
        name="Maman de J.A"
        role="2ème année college"
        imageSrc={<StaticImage className='image-icon' src="../../images/accueil-images/maman-revieww.png" alt="Intelligent Icon" />}
        content="J'ai la joie de vous annoncer que la note de ma fille J. est passée de 9/20 à 17/20 et cela grâce à Mathscan. Merci à l'équipe pour tous ses efforts. Maman de J. A. 2ème année collège."
      />
    </div>
  </div>
)

export default Testimonials
