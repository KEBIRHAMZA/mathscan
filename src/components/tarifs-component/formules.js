import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../styles/tarifs-styles/formules.css'

export default function Formules() {
  return (
    <section className="mb-40 conatiner-for-school">
        <div className="px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-tarifs mt-12 lg:mt-0">
                <p className='titre-two-school'>
                Découvrez les differentes <span>formules mathscan</span>
                </p>
                <p className='text-school'>
                Nos formules sont adaptées à tous les budgets. Initiez votre enfant vers l’excellence en mathématiques à partir de zéro dirhams.
                </p>
                <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    Tester Mathscan
                </a>
            </div>
            <div style={{ marginLeft:"160px" }} className="images-container">
                <StaticImage
                    src="../../images/tarifs-images/pricing-cover.png"
                    alt="Flowbite Logo"
                    className='images-pricing'
                    style={{ 
                        width:"300px"
                     }}
                />
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}
