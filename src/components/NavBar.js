import React, {useState} from 'react';
import '../App.css'

function NavBar() {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.pageYOffset >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
  window.addEventListener('scroll', changeNavbarColor);
    return (
        <nav className={colorChange ? "navbar colorChange fixed-top navbar-expand-lg navbar-dark p-md-3" : "navbar fixed-top navbar-expand-lg navbar-dark p-md-3"} id ="#navbar-mk">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold fs-4" href="/">MICHAEL RASOLOARISON</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">A propos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#schools">Cursus</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Compétences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
    
}

export default NavBar;