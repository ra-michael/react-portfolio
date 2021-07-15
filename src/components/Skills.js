import React from 'react'
import '../App.css'
import skills from '../data/dataskills'

function Skills() {
  return (
    <section id="skills">
      <h1 className="text-center mt-5 text-white">
        Compétences
      </h1>
      <div className="underline mx-auto"></div>
      <div className="container mt-5">
        <div className="row g-4">
          {skills.map(skill => (
            <div className="col-lg-4" data-aos="fade-up">
              <p className="text-uppercase fw-bold mb-1" style={{color : 'rgb(0, 132, 255)'}}>{skill.langage}</p>
              <div class="progress">
                <div class="progress-bar progress-bar-animated progress-bar-striped" role="progressbar" style={{width: skill.longueur+"%"}} aria-valuenow={skill.longueur} aria-valuemin="0" aria-valuemax="100">{skill.longueur}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;