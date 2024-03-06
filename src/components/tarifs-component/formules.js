import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../styles/tarifs-styles/formules.css'
import { useIntl } from 'gatsby-plugin-intl'; // Import useIntl hook

export default function Formules() {

    const intl = useIntl(); 

  return (
    <section className="mb-40 conatiner-for-school">
        <div className="px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-tarifs mt-12 lg:mt-0">
                <p className='titre-two-school'>
                {intl.formatMessage({ id: 'titrformule' })} <span>{intl.formatMessage({ id: 'spanformule' })}</span>
                </p>
                <p className='text-school'>
                {intl.formatMessage({ id: 'textformule' })}
                </p>
                <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                {intl.formatMessage({ id: 'buttonformule' })}
                </a>
            </div>
            <div className="images-container-pricing">
                <StaticImage
                    src="../../images/tarifs-images/pricing-cover.png"
                    alt="Flowbite Logo"
                    className='images-pricing'
                />
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}
