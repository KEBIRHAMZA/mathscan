import React from 'react';
import '../../styles/tarifs-styles/pricing.css';
import { useIntl } from 'gatsby-plugin-intl';
import { Link } from 'gatsby';

export default function Pricing() {
  const intl = useIntl();

  const locale = intl.locale;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className={`flex items-center justify-center mt-10 pb-10 ${locale === 'ar' ? 'font-readex-pro' : 'font-sans'}`}>
      <div
        className="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto"
        id="pricing"
      >
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div dir={direction} className="ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-standard"
                className="text-gray-900 text-2xl font-semibold leading-8"
              >
                {intl.formatMessage({ id: 'fondamantal' })}
              </h3>
            </div>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="line-through text-2xl font-sans text-gray-500/70">
              {intl.formatMessage({ id: 'price1' })}
              </span>
              <span className="text-5xl font-bold tracking-tight text-gray-900">
              {intl.formatMessage({ id: 'Cprice1' })}
              </span>
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="line-through text-2xl font-sans text-gray-500/70">
              {intl.formatMessage({ id: 'price2' })}
              </span>
              <span className="text-5xl font-bold tracking-tight text-gray-900">
              {intl.formatMessage({ id: 'Cprice2' })}
              </span>
            </p>
            <a
              href=""
              aria-describedby="tier-standard"
              className="text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              target="_blank"
            >
              {intl.formatMessage({ id: 'buttoncard1' })}
            </a>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard1' })}
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard2' })}
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard3' })}
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard4' })}
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard5' })}
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard6' })}
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard7' })}
              </li>
            </ul>
          </div>
          <div dir={direction} className="ring-2 ring-sky-400 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-extended"
                className="text-sky-400 text-2xl font-semibold leading-8"
              >
                {intl.formatMessage({ id: 'exellence' })}
              </h3>
              <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
              {intl.formatMessage({ id: 'desccard2' })}
              </p>
            </div>
            <p className="mt-4 text-base leading-6 text-gray-600">
            {intl.formatMessage({ id: 'titrecard2' })}
            </p>
            <a
              href=""
              aria-describedby="tier-extended"
              className="bg-sky-400 text-white shadow-sm hover:bg-blue-500 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              target="_blank"
            >
              {intl.formatMessage({ id: 'buttincard2' })}
            </a>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard11' })}
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard22' })}
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard33' })}
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard44' })}
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard55' })}
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {intl.formatMessage({ id: 'infocard66' })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  );
}
