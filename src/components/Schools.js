import React from 'react';
import schools from '../data/dataschools';
import '../styles/timeline.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Schools extends React.Component {

  componentDidMount() {
    AOS.init({
      duration:  1000
    });
  }

  render() {

    return (
      <section id="schools">
          <h1 className="text-center mt-5 text-white">
            Cursus
          </h1>
          <div className="underline mx-auto"></div>
          <div className="timeline mt-2">
              <ul>
                {schools.map((school) => (
                  <li data-aos="fade-up">
                      <div className="content">
                          <h3>{school.titre}</h3>
                          <p className="text-white">{ school.description }</p>
                      </div>
                      <div className="time">
                          <h4>{ school.date  }</h4>
                      </div>
                  </li>
                ))}
                  <div style={{clear: 'both'}}></div>
              </ul>
          </div>

      </section>
      
    );
  }
}

export default Schools;
