import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../styles/parents-styles/exceller.css'
import { useIntl } from 'gatsby-plugin-intl'; // Import useIntl hook
import { Link } from 'gatsby';


export default function Exceller() {

    const intl = useIntl(); 

    const locale = intl.locale;
    const direction = locale === 'ar' ? 'ltr' : 'rtl';

  return (
    <section dir={direction} style={{ marginBottom: '200px' }} className="mb-40 conatiner-for-astuces">
      <div className="px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="">
              <StaticImage
                src="../../images/parents-images/parents-cover.png"
                alt="ebook image"
                className='image-for-astuces'
              />
            </div>
            <div className="mt-12 lg:mt-0">

              <p className='text-5xl'>
               {intl.formatMessage({ id: 'titreone' })} <span>{intl.formatMessage({ id: 'exceller' })}</span> {intl.formatMessage({ id: 'titretwo' })}
              </p><br/>
              <p className='text-astuces'>
                {intl.formatMessage({ id: 'textparents' })}
              </p>
              <Link
                href="/inscriprion"
                className="btn-astuces"
                style={{ backgroundColor: '#0dcaf0' }}
              >
                {intl.formatMessage({ id: 'createAccount' })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
