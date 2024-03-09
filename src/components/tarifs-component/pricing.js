import React from 'react'
import '../../styles/tarifs-styles/pricing.css'
import { useIntl } from 'gatsby-plugin-intl'; 
import { Link } from 'gatsby';

export default function Pricing() {

  const intl = useIntl();

  const locale = intl.locale;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <div dir={direction} className="pricing-parent">
  <div style={{ 
    backgroundColor:"white"
   }} className="pricing-container mx-auto mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 px-4 sm:px-6 lg:px-8 max-w-screen-lg">
    <div className="relative p-6 border border-gray-200 rounded-2xl shadow-sm flex flex-col text-center mx-auto">
      <div className="flex-1">
        <h3 className="text-xl font-semibold ">{intl.formatMessage({ id: 'fondamantal' })}</h3>
        <p className="mt-4 flex items-baseline ">
          <p className="text-5xl font-extrabold tracking-tight">{intl.formatMessage({ id: 'price1' })}</p>
          <p className="ml-1 text-xl font-semibold">{intl.formatMessage({ id: 'descprice1' })}</p>
        </p>
        <p className="mt-4 flex items-baseline ">
          <p className="text-5xl font-extrabold tracking-tight">{intl.formatMessage({ id: 'price2' })}</p>
          <p className="ml-1 text-xl font-semibold">{intl.formatMessage({ id: 'descprice2' })}</p>
        </p>
        <ul role="list" className="mt-6 space-y-6">
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard1' })}</p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard2' })}</p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard3' })}</p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard4' })}</p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard5' })}</p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard6' })}</p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard7' })}</p>
          </li>
        </ul>
      </div>
      <Link
        className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
        to="/connection"
      >
        {intl.formatMessage({ id: 'buttoncard1' })}
      </Link>
    </div>
    <div className="relative p-6 border border-gray-200 rounded-2xl shadow-sm flex flex-col text-center mx-auto">
      <div className="flex-1">
        <h3 className="text-xl font-semibold ">{intl.formatMessage({ id: 'exellence' })}</h3>
        <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
        {intl.formatMessage({ id: 'desccard2' })}
        </p>
        <p className="mt-6 ">{intl.formatMessage({ id: 'titrecard2' })}</p>
        <ul role="list" className="mt-6 space-y-6">
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard11' })}</p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard22' })}</p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard33' })}</p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard44' })}</p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard55' })}</p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 w-6 h-6 text-emerald-500"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <p className="ml-3 ">{intl.formatMessage({ id: 'infocard66' })}</p>
          </li>
        </ul>
      </div>
      <a
        className="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
        href="/auth/login"
      >
        {intl.formatMessage({ id: 'buttincard2' })}
      </a>
    </div>
  </div>
</div>

  )
}
