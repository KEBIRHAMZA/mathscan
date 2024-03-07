import React from 'react';
import Layout from '../components/layout';
import { useIntl } from 'gatsby-plugin-intl';

const Contacter = () => {
  const intl = useIntl();
  const locale = intl.locale;

  const direction = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <Layout>
      <section dir={direction} className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{intl.formatMessage({ id: "titreContacter" })}</h2>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="prenom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {intl.formatMessage({ id: "incontacter1" })}
              </label>
              <input 
                type="text" 
                id="prenom" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder={intl.formatMessage({ id: "phcontacter1" })} 
                required 
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {intl.formatMessage({ id: "incontacter2" })}
              </label>
              <input 
                type="email" 
                id="email" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder="nom@exemple.com" 
                required 
              />
            </div>

            <div>
              <label htmlFor="telephone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {intl.formatMessage({ id: "incontacter3" })}
              </label>
              <input 
                type="tel" 
                id="telephone" 
                dir={direction} 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder={intl.formatMessage({ id: "phcontacter2" })} 
                required 
              />
            </div>

            <div>
              <label htmlFor="sujet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {intl.formatMessage({ id: "incontacter4" })}
              </label>
              <input 
                type="text" 
                id="sujet" 
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder={intl.formatMessage({ id: "phcontacter3" })} 
                required 
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                {intl.formatMessage({ id: "incontacter5" })}
              </label>
              <textarea 
                id="message" 
                rows="6" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                placeholder={intl.formatMessage({ id: "phcontacter4" })}
              ></textarea>
            </div>

            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              {intl.formatMessage({ id: "buttonContacter" })}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contacter;
