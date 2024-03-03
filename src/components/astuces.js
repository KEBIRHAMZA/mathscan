import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../styles/ecole.css'

export default function Astuces() {
  return (
    <>
    <section style={{ marginTop:'-200px' }} className="mb-40 conatiner-for-school">
        <div className="px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left">
        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="">
                <StaticImage
                    src="../images/ebook.png"
                    alt="Flowbite Logo"
                    className='image-for-school'
                />
            </div>
            <div className="mt-12 lg:mt-0">
                <p className='titre-two-school'>
                    5 Astuces pour aider votre enfant à exceller en math
                </p>
                <p className='text-school'>
                    Un ebook gratuit pour les parents et les enfants qui souhaitent savoir quelques astuces.
                </p>
                <a
                    href="#"
                    className="btn-school"
                    style={{ 
                        backgroundColor: '#0dcaf0'
                     }}
                >
                    Télecharger mon guide
                </a>
            </div>
            </div>
        </div>
        </div>
    </section>
    </>

  )
}
