import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/ecole.css'

export default function Ecole() {
  return (
    <>
    <section className="mb-40 conatiner-for-school">
        <div className="px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
                <h1 className='titre-for-school'>
                    Pour les écoles et enseignants
                </h1>
                <p className='titre-two-school'>
                    Gain de plus de <span style={{ color : '#FF64B1' }}>6 heures</span> à chaque devoir ou évaluation
                </p>
                <p className='text-school'>
                    Suivi instantané de la progression des élèves (individuellement ou par classe) et une meilleure gestion du temps. 
                </p>
                <p className='text-school'>
                    Automatisation de l’évaluation sous toutes ses formes et reportings détaillés en temps réel pour un accompagnement différencié des élèves.
                </p>
                <a
                    href="#"
                    className="btn-school"
                >
                Utiliser Mathscan dans mon école
                </a>
                </div>
            <div className="">
                <StaticImage
                    src="../images/for-schools.png"
                    alt="Flowbite Logo"
                    className='image-for-school'
                />
            </div>
            </div>
        </div>
        </div>
    </section>
    </>

  )
}
