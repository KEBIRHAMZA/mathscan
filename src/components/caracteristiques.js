import React from 'react';
import '../styles/caracteristiques.css';
import { StaticImage } from "gatsby-plugin-image"

export default function Caracteristiques() {
  return (
    <div className="container-caracteristiques grid gap-2 grid-cols-2" style={{ marginLeft:"100px"}}>
      <div className="text-container">
        <div>
          <p className='titre-one'>Pour les parents et étudiants</p> <br />
          <p className='titre-two'>Une amélioration de <span>30%</span> à <span>40%</span> du niveau après deux mois d’utilisation</p> <br />
          <p className='titre-three'>Un progrès rapide garanti en mathématiques avec moins d’efforts et de frustration</p> <br/>
          <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
              Créer mon compte
          </a>
        </div>
      </div>
      <div className='cards-container'>
        <div className="grid gap-4 grid-cols-2 cards-position">
          <div className="card" >
            <DynamicComponent
                iconUrl={<StaticImage className='image-icon' src="../images/intelligent-icon.png" alt="Intelligent Icon" />}
                iconAlt="Icon Alt Text"
                showen="Diagnostic intelligent des lacunes"
                hiden="Un diagnostic rapide, précis, dynamique et factuel qui identifie les lacunes cumulées au fil des années à un niveau granulaire."
                buttonText="Read the docs"
                buttonLink="#"
            />
          </div>
          <div className="card">
            <DynamicComponent
                iconUrl={<StaticImage className='image-icon' src="../images/phone-icon.png" alt="Phone Icon" />}
                iconAlt="Icon Alt Text"
                showen="Remédiation personnalisée des lacunes"
                hiden="Une remédiation rapide de toutes les lacunes identifiées afin d’aider les élèves à maitriser les nouveaux acquis grâce à un feedback personnalisé."
                buttonText="Read the docs"
                buttonLink="#"
            />
          </div>
          <div className="card">
            <DynamicComponent 
                iconUrl={<StaticImage className='image-icon' src="../images/time-icon.png" alt="Time Icon" />}
                iconAlt="Icon Alt Text"
                showen="Auto-évaluation en libre accès"
                hiden="Un accès complet à des activités d’autovaluation et d’apprentissage par chapitre et par capacité couvrant tous le programme de l’année."
                buttonText="Read the docs"
                buttonLink="#"
            />
          </div>
          <div className="card">
            <DynamicComponent
                iconUrl={<StaticImage className='image-icon' src="../images/repport-icon.png" alt="Report Icon" />}
                iconAlt="Icon Alt Text"
                showen="Suivi via des rapports instantanées"
                hiden="Des rapports instantanés vous donnent des informations précises et pertinentes sur le progrés de votre enfant."
                buttonText="Read the docs"
                buttonLink="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


function DynamicComponent({ iconUrl, showen,hiden, buttonText, buttonLink }) {
  return (
    <div className="cards group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
          {iconUrl}
        </span>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <p className='shoen-content'>{showen}</p>
          <p className='hidden-content'>{hiden}</p>
        </div>
      </div>
    </div>
  );
}
