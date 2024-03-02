import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/statistique.css'; // Import CSS file

export default function Statistique() {

    return (
        <div className='container'>
            <div className="statistics-content grid grid-cols-1 lg:grid-cols-3 gap-3">
                <div className="lg:col-span-1 first">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="image-container-certificate">
                            <StaticImage
                                src="../images/certificate-icon.png"
                                alt="Flowbite Logo"
                            />
                        </div>
                        <div className="col-span-2 inner-container">
                            <span className="number">60K+</span> <br/>
                            <p className="description">Exercices et problèmes mathématiques ludiques</p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1" style={{ 
                    marginTop: '20px',
                }}>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="image-container-student">
                            <StaticImage
                                src="../images/student-icon.png"
                                alt="Flowbite Logo"
                            />
                        </div>
                        <div className="col-span-2 inner-container">
                            <span className="number">15ans+</span> <br/>
                            <p className="description">De recherche et 200 publications</p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-1" style={{ 
                    marginTop: '20px',
                }}>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="image-container-teacher">
                            <StaticImage
                                src="../images/teacher-icon.png"
                                alt="Flowbite Logo"
                            />
                        </div>
                        <div className="col-span-2 inner-container">
                            <span className="number">5</span> <br/>
                            <p className="description">Distinctions nationales et internationales</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
