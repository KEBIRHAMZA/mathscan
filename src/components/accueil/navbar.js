import React, { useState,useEffect } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl, changeLocale } from 'gatsby-plugin-intl'; 

export default function Navbar({page}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [margin,setMargin] = useState({})
  const [pageActuelle,setPage] = useState()

  const intl = useIntl();

  const direction = intl.locale === 'ar' ? 'rtl' : 'ltr';


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (language) => {
    changeLocale(language); 
  };

  useEffect(() => {
    setPage(page)
  }, [page]);

  useEffect(() => {
    setMargin(intl.locale === 'ar' ? { 
      marginLeft : "40px"
     } : {})
  }, [direction]);

  return (
    <nav dir={direction} className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <StaticImage
            src="../../images/accueil-images/logo.png"
            alt="Mathscan logo"
            className="h-8"
            style={{ width: '200px' }}
          />
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? '' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col items-center md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <Link
  to="/"
  activeClassName="active"
  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  style={pageActuelle === "accueil" ? { color: "#57bef9", borderBottom: "2px solid #57bef9", ...margin } : { ...margin }}
>
  {intl.formatMessage({ id: "home" })}
</Link>
            </li>
            <li>
              <Link
                to="/parents/"
                activeClassName="active"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  style={pageActuelle === "parents" ? { color: "#57bef9", borderBottom: "2px solid #57bef9", ...margin } : { ...margin }}
              >
                {intl.formatMessage({ id: "parents" })}
              </Link>
            </li>
            <li>
              <Link
                to="/tarifs/"
                activeClassName="active"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
  style={pageActuelle === "pricing" ? { color: "#57bef9", borderBottom: "2px solid #57bef9", ...margin } : { ...margin }}
              >
                {intl.formatMessage({ id: "pricing" })}
              </Link>
            </li>
            <li>
            <Link 
              to="/connection" 
              className="text-blue-500 font-bold underline focus:underline focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-blue-300 dark:hover:text-blue-400 focus:outline-none dark:focus:ring-blue-800"
              style={{ fontSize: "20px", color: "#57bef9", fontWeight: "600" }}
            >
              {intl.formatMessage({ id: "signIn" })}
            </Link>
            </li>
            <li>
            <Link to='/inscription' style={{ marginTop:'-2px' }} className="hero-button text-center text-white py-2 px-4 border rounded inline-block mt-4">
                {intl.formatMessage({ id: "createAccount" })}
              </Link>
            </li>
            <li>
            <div className="ml-auto">
              <select
                className="px-3 py-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 text-gray-900 dark:text-gray-300"
                onChange={(e) => handleLanguageChange(e.target.value)}
                value={intl.locale}
              >
                <option value="ar">العربية</option>
                <option value="fr">Français</option>
                <option value="en">English</option>
              </select>
            </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
