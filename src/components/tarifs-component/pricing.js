import React from 'react';
import '../../styles/tarifs-styles/pricing.css';
import { useIntl } from 'gatsby-plugin-intl';
import { Link } from 'gatsby';

export default function Pricing() {
  const intl = useIntl();

  const locale = intl.locale;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section dir={direction} className={`flex items-center justify-center mt-10 pb-10 ${locale === 'ar' ? 'font-readex-pro' : 'font-sans'}`}>
      <div class="m-4 flex flex-col justify-between p-5 bg-white border rounded shadow-sm card-container">
    <div class="mb-6">
        <div class="flex items-center justify-between pb-6 mb-6 border-b">
            <div>
                <p class="text-3xl font-bold tracking-wider uppercase">{intl.formatMessage({ id: 'fondamantal' })}</p> <br/>
                <p class="text-3xl font-extrabold">{intl.formatMessage({ id: 'Cprice1' })} {intl.formatMessage({ id: 'descprice1' })}</p> <br/>
                <p class="text-3xl font-extrabold">{intl.formatMessage({ id: 'Cprice2' })} {intl.formatMessage({ id: 'descprice2' })}</p>
            </div>
        </div>
        <div>
            <p class="mb-2 font-bold tracking-wide">{intl.formatMessage({ id: 'priceTitle' })}</p>
            <ul class="space-y-2">
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard1' })}</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard2' })}</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard3' })}</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard4' })}</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard5' })}</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard6' })}</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard7' })}</p>
                </li>
            </ul>
        </div>
    </div>
    <div>
        <a href="#"
            class="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hero-button-pricing focus:shadow-outline focus:outline-none">{intl.formatMessage({ id: 'buttoncard1' })}
        </a>
    </div>
</div>
<div class="m-4 flex flex-col justify-between p-5 bg-white border rounded shadow-sm card-container">
    <div class="mb-6">
        <div class="flex items-center justify-between pb-6 mb-6 border-b">
            <div>
                <p class="text-3xl font-bold tracking-wider uppercase">{intl.formatMessage({ id: 'exellence' })}</p> <br/>
                <p class="text-2xl ">{intl.formatMessage({ id: 'desccard2' })}</p> <br/>
                <p class="text-xl ">{intl.formatMessage({ id: 'titrecard2' })}</p> 
            </div>
        </div>
        <div>
            <p class="mb-2 font-bold tracking-wide">{intl.formatMessage({ id: 'priceTitle' })}</p>
            <ul class="space-y-2">
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard11' })}</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard22' })}</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard33' })}</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard44' })}</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard55' })}</p>
                </li>
                <li class="flex items-center">
                    <div class="mr-2"><svg class="w-4 h-4 text-blue-600" viewBox="0 0 24 24" stroke-linecap="round"
                            strokeLidth="2">
                            <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8"></polyline>
                            <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor"></circle>
                        </svg></div>
                    <p class="font-medium text-gray-800">{intl.formatMessage({ id: 'infocard66' })}</p>
                </li>
            </ul>
        </div>
    </div>
    <div>
        <a href="#"
            class="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hero-button-pricing focus:shadow-outline focus:outline-none">{intl.formatMessage({ id: 'buttincard2' })}
        </a>
    </div>
</div>
    </section>

  );
}
