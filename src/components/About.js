import React from 'react'
import Mika from '../images/Mika.jpg'
import CV from '../data/CV_Michael.pdf'

const About = () => {
    return (
        <section id= "about">
            <h1 className="text-center mt-5 text-white">
                A propos
            </h1>
            <div className="underline mx-auto"></div>
            <div className="container" data-aos="fade-right">
                <div class="card mt-5 bg-dark text-white">
                    <div class="row g-0">
                        <div class="col-lg-3">
                            <img src={Mika} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-lg-9">
                            <div class="card-body text-center">
                                <h1 class="card-title" style={{color : 'rgb(0, 132, 255)'}}>RASOLOARISON Ambinintsoa Michaël</h1>
                                <p class="card-text lh-lg ps-4 pe-4" style={{textAlign: "justify"}}>Ma passion pour l'informatique a débuté depuis mon plus jeune âge et je n'ai jamais cessé de l'aimer. Actuellement étudiant en 5ème année au sein de l'université "Institut Supérieur Polytechnique de Madagascar" dans la filière Informatique Multimédia, Technologie de l'Information, de la Communication et Intelligence Artificielle, je suis très intéressé en développement informatique et en création de site web. J'aime découvrir de nouvelles horizons et essayer de nouveaux technologies.</p>
                                <a href={CV} class="btn btn-outline-info" download>Télécharger mon CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
