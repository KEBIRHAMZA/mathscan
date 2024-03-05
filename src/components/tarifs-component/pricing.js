import React from 'react'
import '../../styles/tarifs-styles/pricing.css'

export default function Pricing() {
  return (
    <div className="pricing-parent">
  <div style={{ 
    backgroundColor:"white"
   }} className="pricing-container mt-24 container space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
    <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl font-semibold ">Fondamental</h3>
        <p className="mt-4 flex items-baseline ">
          <p className="text-5xl font-extrabold tracking-tight">45 dh</p>
          <p className="ml-1 text-xl font-semibold">/mois (annuel)</p>
        </p>
        <p className="mt-4 flex items-baseline ">
          <p className="text-5xl font-extrabold tracking-tight">90 dh</p>
          <p className="ml-1 text-xl font-semibold">/mois (mensuel)</p>
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
            <p className="ml-3 ">Diagnostic integral et granulaire des lacunes de toutes les thématiques</p>
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
            <p className="ml-3 ">Remédiation des lacunes de toutes les thématiques</p>
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
            <p className="ml-3 ">Accés à tous les chapitres et tout le programme</p>
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
            <p className="ml-3 ">Révision par thème et par chapitre</p>
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
            <p className="ml-3 ">Accès à la progression des examens</p>
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
            <p className="ml-3 ">Suivi de la progression par rapport au programme scolaire</p>
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
            <p className="ml-3 ">Accès au rapport de progression par thème et au rapport global</p>
          </li>
        </ul>
      </div>
      <a
        className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
        href="/auth/login"
      >
        Acheter
      </a>
    </div>
    <div className="relative p-8  border border-gray-200 rounded-2xl shadow-sm flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl font-semibold ">Excellence</h3>
        <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
            Bientôt disponible
        </p>
        <p className="mt-6 ">En plus de ce qu’il y’a dans le plan fondamental</p>
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
            <p className="ml-3 ">Suivi individualisé et personnalisé quotidien par un prof de math</p>
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
            <p className="ml-3 ">Participation à tous les ateliers d’accompagnement</p>
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
            <p className="ml-3 ">Participation à tous les ateliers sur l’usage des maths dans la vie réelle</p>
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
            <p className="ml-3 ">Accès à la préparation des concours (à partir du tronc commun)</p>
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
            <p className="ml-3 ">Accès à la préparation des tests internationaux</p>
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
            <p className="ml-3 ">Accès à la préparation des olympiades</p>
          </li>
        </ul>
      </div>
      <a
        className="bg-emerald-500 text-white  hover:bg-emerald-600 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
        href="/auth/login"
      >
        M'informer
      </a>
    </div>
  </div>
</div>

  )
}
