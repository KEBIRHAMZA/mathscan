import React from 'react';
import "../styles/privacy.css";
import Layout from '../components/layout';

const Privacy = () => {
  return (
    <Layout>
    <div className="">
      <div className="container-privacy mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Les conditions générales d’utilisation</h1>
        
        <h2 className="text-2xl font-bold mb-2">Introduction</h2>
        <p className="mb-4">
          Ce site Web (le «site») appartient à la société MATHSCAN sarl en collaboration avec l’université Worcester Polytechnic Institute («WPI»). MATHSCAN accepte de fournir des services et du matériel sur ce site conformément aux conditions d'utilisation énoncées ci-dessous. Toute personne qui utilise ou s'appuie sur les services et le matériel figurant sur ce site accepte de le faire conformément aux présentes conditions. MATHSCAN peut modifier les présentes conditions en publiant une mise à jour sur ce site. Vous acceptez les nouvelles conditions en utilisant ou en vous appuyant sur nos services et notre matériel après cette notification. Vous devriez prendre le temps de lire ces conditions et, si vous avez des questions, veuillez nous contacter à l'adresse email contact@mathscan.net.
        </p>
        
        <p className="mb-4">
          Les informations que nous recueillons, grâce à votre enregistrement à nos offres, permettent aux professeurs, chercheurs, designers et ingénieurs d’améliorer continuellement la plateforme et renforcer l’apprentissage.
        </p>
        
        <p className="mb-4">
          En vous inscrivant, vous participez également à des recherches visant à améliorer les offres d’enseignement de mathématiques ainsi que la qualité de l’apprentissage dans le monde entier. Dans l’intérêt de la recherche, vous pouvez être exposé à certaines variations des pratiques pédagogiques normales. MATHSCAN n'utilise pas les données d'apprenant à des fins autres que les missions déclarées d'éducation de recherche et de gestion de la clientèle.
        </p>

        <h2 className="text-2xl font-bold mb-2">Données à caractère personnel</h2>
        <p className="mb-4">
          MATHSCAN peut être amenée à demander aux utilisateurs de lui communiquer des informations personnelles telles que leurs noms, prénoms, coordonnées et adresse électronique, dans certains cas; ces informations sont susceptibles de faire l’objet de traitements automatisés.
        </p>
        <p className="mb-4">
          Lesdites informations sont recueillies conformément aux dispositions de la loi 09-08 du 18 février 2009 relative à la Protection des Personnes Physiques à l'égard du Traitement des Données à Caractère Personnel et sont destinées au seul usage de MATHSCAN, de ses filiales et de ses prestataires le cas échéant. Elles ne seront en aucun cas mises à la disposition de tierces personnes.
        </p>

        <h2 className="text-2xl font-bold mb-2">Droits de l’utilisateur</h2>
        <p className="mb-4">
          Conformément à la loi 09-08 relative à la protection des personnes physiques à l’égard du traitement des données à caractère personnel, le Client dispose d’un droit d’accès, de rectification des données personnelles le concernant, en application des articles 7 à 8 de la loi n°09-08 précitée.
        </p>
        <p className="mb-4">
          Le Client peut également, pour des motifs légitimes, s’opposer au traitement des données personnelles le concernant, sauf lorsqu’elles sont recueillies en vertu d’une loi. Cette opposition peut toutefois entraîner l’impossibilité pour le Client à accéder à la Plateforme.
        </p>
        <p className="mb-4">
          Pour l’exercice de ces droits, le Client doit respecter la procédure suivante :
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Demande écrite et signée par le Client à laquelle est jointe une photocopie de sa pièce d’identité.</li>
          <li>Demande adressée à : <a href="mailto:service@mathscan.net" className="text-blue-600 hover:text-blue-800">service@mathscan.net</a>.</li>
        </ul>

        <p className="mb-4">
          Cette politique de confidentialité est sujette à modification sans préavis.
        </p>
      </div>
    </div>
    </Layout>

  );
};

export default Privacy;
