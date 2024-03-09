import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../styles/accueil-styles/ecole.css'
import { useIntl } from 'gatsby-plugin-intl';
import { Link } from 'gatsby';

export default function Ecole() {
  const intl = useIntl();

  const locale = intl.locale;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <>
    <section className="mb-40 conatiner-for-school">
        <div className="px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
            <div dir='ltr' className="mt-12 lg:mt-0">
                <h1 className='titre-for-school'>
                    {intl.formatMessage({ id: "schoolSectionTitle" })}
                </h1>
                <p  dir={direction} className='titre-two-school'>
                    {intl.formatMessage({ id: "schoolSectionSubtitle" })} <span style={{ color : '#FF64B1' }}>{intl.formatMessage({ id: "schoolSectionHours" })}</span> {intl.formatMessage({ id: "schoolSectionSubtitlePart2" })}
                </p>
                <p  dir={direction} className='text-school'>
                    {intl.formatMessage({ id: "schoolSectionDescription1" })}
                </p>
                <p  dir={direction} className='text-school'>
                    {intl.formatMessage({ id: "schoolSectionDescription2" })}
                </p>
                <Link
                    to="/"
                    className="btn-school"
                >
                {intl.formatMessage({ id: "schoolSectionButton" })}
                </Link>
                </div>
            <div className="">
                <StaticImage
                    src="../../images/accueil-images/for-schools.png"
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
