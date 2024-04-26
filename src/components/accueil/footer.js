import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../styles/accueil-styles/footer.css'
import { Link } from 'gatsby'
import {useIntl } from 'gatsby-plugin-intl'

export default function Footer() {

  const intl = useIntl();
  const locale = intl.locale;
  //changement de langue
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <footer className="footer-container p-4 bg-white sm:p-6 dark:bg-gray-800">
    <div dir={direction} className="mx-auto max-w-screen-xl">
      <div className="content-container md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          {/* le Logo de mathscan */}
          <Link to="/" className="flex items-center">
                  <StaticImage
                      src="../../images/accueil-images/new-logo-light.png"
                      alt="Mathscan Logo"
                      className='logo-footer'
                  />
          </Link>
          <div className='text-desc'>
          {intl.formatMessage({ id: 'textfooter' })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 info-container" >
          <div className={`${locale=="ar" ? 'contacter-ar':'contacter'}`}>
            <h2 className="titres-footer mb-6 text-sm font-semibold uppercase dark:text-white">
            {intl.formatMessage({ id: 'contacter' })}
            </h2>
            <ul className="dark:text-gray-400">
              <li className='adresse'>
                {/* l'icone de l'adresse */}
                  <StaticImage
                      src="../../images/accueil-images/footer-icons/icon-map.png"
                      alt="adress"
                      style={{ 
                          width: "24px"
                      }}
                  />
                {intl.formatMessage({ id: 'address' })}
              </li>
              <li>
                {/* l'icone de l'email */}
                  <StaticImage
                      src="../../images/accueil-images/footer-icons/icon-mail.png"
                      alt="email"
                      style={{ 
                          width: "24px"
                      }}
                  />
                  contact@mathscan.net
              </li>
              <li>
                {/* l'icone de telephone */}
                  <StaticImage
                      src="../../images/accueil-images/footer-icons/icon-phone.png"
                      alt="Logo"
                      style={{ 
                          width: "24px"
                      }}
                  />
                  {intl.formatMessage({ id: 'tel1' })}
              </li>
              <li>
                {/* l'icone de telephone */}
                  <StaticImage
                      src="../../images/accueil-images/footer-icons/icons-whatsapp.png"
                      alt="Flowbite Logo"
                      style={{ 
                          width: "20px",
                      }}
                  />
                  {intl.formatMessage({ id: 'tel1' })}
              </li>
            </ul>
          </div>
          {/* les liens UTILES*/}
          <div className={`${locale=="ar" ? 'liens-footer-ar':'liens-footer'}`}>
            <h2 className="titres-footer mb-6 text-sm font-semibold uppercase dark:text-white">
            {intl.formatMessage({ id: 'lienUtiles' })}
            </h2>
            <ul className=" dark:text-gray-400">
              <li>
                <Link
                  to="/inscription"
                >
                  {intl.formatMessage({ id: 'diagnostique' })}
                </Link>
              </li>
              <li>
                <Link
                  to="/connection"
                >
                  {intl.formatMessage({ id: 'signIn' })}
                </Link>
              </li>
              <li>
                <Link
                  to="/contacter"
                >
                  {intl.formatMessage({ id: 'contacter' })}
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                >
                  {intl.formatMessage({ id: 'politique' })}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* le copyright avec les icons des reseaux sociaux */}
    <div className="top-footer sm:flex sm:items-center sm:justify-between">
        <span className="copyright text-sm sm:text-center dark:text-gray-400">
          Copyright © 2022 Mathscan
        </span>
        <div className="social-media flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <a
            href="https://www.facebook.com/Mathscanner/"
            className="hover dark:hover:text-white"
            target='_blank'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 social-media-icons"
              fill="currentColor"
              style={{ color: "white" }}
              viewBox="0 0 24 24"
              >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>

          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=212623467615&text=Bonjour+%21+Je+suis+int%C3%A9ress%C3%A9+par+MATHSCAN+%21&type=phone_number&app_absent=0"
            target='_blank'
            className="hover dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 social-media-icons"
              fill="currentColor"
              style={{ color: "white" }}
              viewBox="0 0 24 24"
              >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/mathscan"
            target='blank'
            className="hover dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 social-media-icons"
              fill="currentColor"
              style={{ color: "white" }}
              viewBox="0 0 24 24"
              >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
          </a>
          <a
            href="https://www.instagram.com/math_scan"
            target="_blank"
            className="hover dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 social-media-icons"
              fill="currentColor"
              style={{ color: "white" }}
              viewBox="0 0 24 24"
              >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>


          </a>
          <a
            href="https://www.youtube.com/channel/UCCrA4JZvHOumvZhCveWihPg"
            target="_blank"
            className="hover dark:hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 social-media-icons"
              fill="currentColor"
              style={{ color: "white" }}
              viewBox="0 0 24 24"
              >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>


          </a>
        </div>
      </div>
</footer>

  )
}
