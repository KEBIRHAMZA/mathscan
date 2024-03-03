import React from 'react';
import '../styles/caracteristiques.css';
import { StaticImage } from "gatsby-plugin-image"

export default function Caracteristiques() {
  return (
    <div className="container-caracteristiques grid gap-2 grid-cols-2">
      <div className="text-container">
        <div>
          <p className='titre-one'>Pour les parents et étudiants</p> <br />
          <p className='titre-two'>Une amélioration de <span>30%</span> à <span>40%</span> du niveau après deux mois d’utilisation</p> <br />
          <p>Un progrès rapide garanti en mathématiques avec moins d’efforts et de frustration</p> <br/>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Créer mon compte
          </a>
        </div>
      </div>
      <div>
        <div className="grid gap-4 grid-cols-2 cards-position">
          <div className="card">
            <DynamicComponent
                iconUrl={<StaticImage src="../images/intelligent-icon.png" alt="Intelligent Icon" />}
                iconAlt="Icon Alt Text"
                description="Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share online."
                buttonText="Read the docs"
                buttonLink="#"
            />
          </div>
          <div className="card">
            <DynamicComponent
                iconUrl={<StaticImage src="../images/phone-icon.png" alt="Phone Icon" />}
                iconAlt="Icon Alt Text"
                description="Description for the second card."
                buttonText="Read the docs"
                buttonLink="#"
            />
          </div>
          <div className="card">
            <DynamicComponent
                iconUrl={<StaticImage src="../images/time-icon.png" alt="Time Icon" />}
                iconAlt="Icon Alt Text"
                description="Description for the third card."
                buttonText="Read the docs"
                buttonLink="#"
            />
          </div>
          <div className="card">
            <DynamicComponent
                iconUrl={<StaticImage src="../images/repport-icon.png" alt="Report Icon" />}
                iconAlt="Icon Alt Text"
                description="Description for the fourth card."
                buttonText="Read the docs"
                buttonLink="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


function DynamicComponent({ iconUrl, iconAlt, description, buttonText, buttonLink }) {
  return (
    <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
          {iconUrl}
        </span>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p>{description}</p>
        </div>
        <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <a href={buttonLink} className="text-sky-500 transition-all duration-300 group-hover:text-white">{buttonText} &rarr;</a>
          </p>
        </div>
      </div>
    </div>
  );
}
