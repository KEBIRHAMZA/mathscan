import React from 'react';
import '../../styles/tarifs-styles/pricing.css';
import { useIntl } from 'gatsby-plugin-intl';
import { Link } from 'gatsby';

export default function Pricing() {
  const intl = useIntl();

  const locale = intl.locale;
  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <section className="py-24" style={{ marginBottom:"-70px" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">
            {intl.formatMessage({ id: 'titleProce' })}
          </h2>
          {/*Switch*/}
          <div className="tabs">
            <div
              id="tabs-with-background-1"
              role="tabpanel"
              aria-labelledby="tabs-with-background-item-1"
              className="tabcontent mt-12"
              style={{}}
            >
              <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0">
                {/*Pricing Card*/}
                <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-300 p-6 xl:p-12 hover:border-indigo-600">
                  <h3 className="font-manrope text-2xl font-bold mb-6"></h3>
                  <div className="mb-20 flex flex-col">
                    <span className="font-manrope text-4xl font-semibold mb-2">
                      <span dir={direction}>{intl.formatMessage({ id: 'price1' })}</span>
                      <span dir={direction} className="text-red-500 text-base ml-2 line-through">{intl.formatMessage({ id: 'compaireprice1' })}</span>
                    </span>
                    <span className="text-xl text-gray-400">{intl.formatMessage({ id: 'duration1' })}</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-blue-400 group-hover:text-white"
                  >
                    {intl.formatMessage({ id: 'buttonPrice' })}
                  </a>
                  {/*List End*/}
                </div>
                {/*Pricing Card*/}
                <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-300 p-6 xl:p-12 hover:border-indigo-600">
                  <h3 className="font-manrope text-2xl font-bold mb-6"></h3>
                  <div className="mb-20 flex flex-col">
                    <span className="font-manrope text-4xl font-semibold mb-2">
                      <span dir={direction}>{intl.formatMessage({ id: 'price2' })}</span>
                      <span dir={direction} className="text-red-500 text-base ml-2 line-through">{intl.formatMessage({ id: 'compaireprice2' })}</span>
                    </span>
                    <span className="text-xl text-gray-400">{intl.formatMessage({ id: 'duration2' })}</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-blue-400 group-hover:text-white"
                  >
                    {intl.formatMessage({ id: 'buttonPrice' })}
                  </a>
                  {/*List End*/}
                </div>
                {/*Pricing Card*/}
                <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-300 p-8 xl:p-12 hover:border-indigo-600">
                  <h3 className="font-manrope text-2xl font-bold mb-6"></h3>
                  <div className="mb-20 flex flex-col">
                    <span className="font-manrope text-4xl font-semibold mb-2">
                      <span dir={direction}>{intl.formatMessage({ id: 'price3' })}</span>
                      <span dir={direction} className="text-red-500 text-base ml-2 line-through">{intl.formatMessage({ id: 'compaireprice3' })}</span>
                    </span>
                    <span className="text-xl text-gray-400">{intl.formatMessage({ id: 'duration3' })}</span>
                  </div>
                  <a
                    href="javascript:;"
                    className="py-2.5 px-5 bg-indigo-50 shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto group-hover:bg-blue-400 group-hover:text-white"
                  >
                    {intl.formatMessage({ id: 'buttonPrice' })}
                  </a>
                  {/*List End*/}
                </div>
              </div>
            </div>
          </div>
          {/*Switch End*/}
        </div>
      </div>
    </section>
  );
}
