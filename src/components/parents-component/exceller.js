import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../styles/parents-styles/exceller.css'
import { useIntl } from 'gatsby-plugin-intl'; // Import useIntl hook
import { Link } from 'gatsby';


export default function Exceller() {

    const intl = useIntl(); 

    const locale = intl.locale;
    const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="mb-40 conatiner-for-school">
        <div className="px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
                <p dir={direction} className='titre-two-school'>
                {intl.formatMessage({ id: 'titreone' })} <span>{intl.formatMessage({ id: 'exceller' })}</span> {intl.formatMessage({ id: 'titretwo' })}
                </p>
                <p dir={direction} className='text-school'>
                 {intl.formatMessage({ id: 'textparents' })}
                </p>
                <Link to="/inscription" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                    {intl.formatMessage({ id: "createAccountButton" })}
                </Link>
                </div>
            <div className="">
                <StaticImage
                    src="../../images/parents-images/parents-cover.png"
                    alt="Flowbite Logo"
                    className='image-for-school'
                />
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}
