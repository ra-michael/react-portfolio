import React from 'react';
import projects from '../data/dataprojects';
import '../App.css'

function Projects() {
  return (
      <section id="projects">
        <h1 className="text-center mt-5 text-white">
            Projets
        </h1>
        <div className="underline mx-auto"></div>
        <div className="container mt-5">
          <div className="row g-4">
            {projects.map(project => (
                <div className="col-lg-6">
                  <div class="card bg-dark text-white h-100" data-aos="fade-up">
                    <img src={project.image} class="card-img-top" alt="Projet" />
                      <div class="card-header text-uppercase fs-5">
                        {project.title}
                      </div>
                      <div class="card-body">
                        <p class="card-text">{project.description}</p>
                      </div>
                      <div className="card-footer text-uppercase fw-bold" style={{color : 'rgb(0, 132, 255)'}}>
                        {project.langage}
                      </div>
                      <div class="card-footer text-muted small">
                        {project.date}
                      </div>
                    </div>
              </div>
            ))}
            
          </div>
          
      </div>
      </section>
  );
}

export default Projects;
