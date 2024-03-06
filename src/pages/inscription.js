import React from 'react'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from 'gatsby-plugin-image';
import { useIntl } from 'gatsby-plugin-intl';


export default function Inscription() {

    const intl = useIntl();

  return (
    <Layout>
        <section className="relative flex flex-wrap lg:h-screen lg:items-center">
            <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">{intl.formatMessage({ id: "inscription" })}</h1>
            </div>
            <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                <label htmlFor="username" className="sr-only">
                Nom d'utilisateur
                </label>
                <div className="relative">
                    <input
                    type="text"
                    id="username"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder={intl.formatMessage({ id: "inputIn1" })}
                    />
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                    </svg>
                    </span>
                </div>
                </div>
                <div>
                <label htmlFor="username" className="sr-only">
                Prénom
                </label>
                <div className="relative">
                    <input
                    type="text"
                    id="username"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder={intl.formatMessage({ id: "inputIn2" })}
                    />
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                    </svg>
                    </span>
                </div>
                </div>
                <div>
                <label htmlFor="firstname" className="sr-only">
                Nom
                </label>
                <div className="relative">
                    <input
                    type="text"
                    id="firstname"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder={intl.formatMessage({ id: "inputIn3" })}
                    />
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                    </svg>
                    </span>
                </div>
                </div>
                <div>
                <label htmlFor="firstname" className="sr-only">
                Email
                </label>
                <div className="relative">
                    <input
                    type="email"
                    id="firstname"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder={intl.formatMessage({ id: "inputIn4" })}
                    />
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                    </svg>
                    </span>
                </div>
                </div>
                <div>
                  <label htmlFor="genre" className="sr-only">
                    Genre
                  </label>
                  <select
                    id="genre"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  >
                    <option value="">{intl.formatMessage({ id: "inputIn5" })}</option>
                    <option value="male">{intl.formatMessage({ id: "genre1" })}</option>
                    <option value="female">{intl.formatMessage({ id: "genre2" })}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="niveau" className="sr-only">
                    Niveau Scolaire
                  </label>
                  <select
                    id="niveau"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  >
                    <optgroup label="Programm : Système marocain">
                    <option value="">{intl.formatMessage({ id: "inputIn6" })}</option>
                    <option value="1 éme annèe primaire">{intl.formatMessage({ id: "niveau1" })}</option>
                    <option value="2 éme annèe primaire">{intl.formatMessage({ id: "niveau2" })}</option>
                    <option value="3 éme annèe primaire">{intl.formatMessage({ id: "niveau3" })}</option>
                    <option value="4 éme annèe primaire">{intl.formatMessage({ id: "niveau4" })}</option>
                    <option value="5 éme annèe primaire">{intl.formatMessage({ id: "niveau5" })}</option>
                    <option value="6 éme annèe primaire">{intl.formatMessage({ id: "niveau6" })}</option>
                    <option value="Tronc Commun">{intl.formatMessage({ id: "niveau7" })}</option>
                    <option value="1 ére annèe BAC Sc Math">{intl.formatMessage({ id: "niveau8" })}</option>
                    <option value="2 éme annèe BAC Sc Math">{intl.formatMessage({ id: "niveau9" })}</option>
                    <option value="1 éme annèe BAC Sc Ex">{intl.formatMessage({ id: "niveau10" })}</option>
                    <option value="2 éme annèe BAC PC ou SVT">{intl.formatMessage({ id: "niveau11" })}</option>
                    </optgroup>
                  </select>
                </div>
                <div>
                <label htmlFor="password" className="sr-only">
                Mot de passe
                </label>
                <div className="relative">
                    <input
                    type="password"
                    id="password"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder={intl.formatMessage({ id: "inputIn7" })}
                    />
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                    </svg>
                    </span>
                </div>
                </div>
                <div>
                <label htmlFor="confirmPassword" className="sr-only">
                Confirmer le mot de passe
                </label>
                <div className="relative">
                    <input
                    type="password"
                    id="confirmPassword"
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder={intl.formatMessage({ id: "inputIn8" })}
                    />
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                    </svg>
                    </span>
                </div>
                </div>
                <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                {intl.formatMessage({ id: "question" })}
                    <a className="underline" href="#">
                    {intl.formatMessage({ id: "lienInscription" })}
                    </a>
                </p>
                <button
                    type="submit"
                    className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                >
                    {intl.formatMessage({ id: "buttonInscription" })}
                </button>
                </div>
            </form>
            </div>
            <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <StaticImage
                alt=""
                src="../images/accueil-images/header.png"
                className="absolute inset-0 h-full w-full object-cover"
            />
            </div>
        </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Mathscan ©" />
