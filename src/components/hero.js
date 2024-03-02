import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';


export default function Hero() {

    const Title = {
        fontSize: "48px",
        lineHeight: "62px",
        fontFamily: "'Montserrat', sans-serif !important",
        fontWidth : "800",
        color : "#3E3E3E"
    }
    const button = {
        fontFamily: "'Montserrat', sans-serif !important",
    }

  return (
    <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1
            style={Title}
            class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Rendre les mathématiques à nouveau amusantes</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Plateforme propulsée par l’intelligence artificielle, pour un apprentissage des mathématiques rapide, intuitif et efficace.</p>
            <p class="max-w-2xl mb-6 text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"> <span style={{ color:'#f1bf5b',fontWidth : "bold" }}>Primaire</span> - <span style={{ color:'#f4876a' }}>Collège </span> - <span style={{ color:'#b46f8d' }}>lycée</span></p>
            <a href="#" style={button} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Créer mon compte
            </a> 
        </div>
        <div class="lg:mt-0 lg:col-span-5 lg:flex">
            <StaticImage
                src="../images/header.png"
                alt="Flowbite Logo"
                style={{ 
                    width:'500px'
                }}
            />
        </div>                
    </div>
</section>
  )
}
