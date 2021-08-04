import React,{ useState, useEffect } from 'react';
import './styles/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import LanguageIcon from '@material-ui/icons/Language';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SignupModal from './SignupModal';
import LoginModal from './LoginModal';

function Menu({ page }) {
    const [scroll, setScroll] = useState(false);
    const [loginShow, setLoginShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <div className={scroll || page!=="home" ? "menu menu__scroll" : "menu"}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className={scroll || page!=="home" ? "navbar-brand navbar-brand__scroll" : "navbar-brand"} to="/">
                    <FontAwesomeIcon icon={faAirbnb} size="2x"/> <span>airbnb</span>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        scroll || page!=="home" 
                        ? 
                        <div className="searchBar__scroll mx-auto">
                            <input type="text" placeholder="Start your search" />
                            <Button className="searchBar__scrollBtn"><SearchIcon /></Button>
                        </div>
                        :
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className={scroll || page!=="home" ? "nav-link nav-link__scroll" : "nav-link"}>Places to stay</a>
                            </li>
                            <li className="nav-item">
                                <a className={scroll || page!=="home" ? "nav-link nav-link__scroll" : "nav-link"}>Experiences</a>
                            </li>
                            <li className="nav-item">
                                <a className={scroll || page!=="home" ? "nav-link nav-link__scroll" : "nav-link"}>Online Experiences</a>
                            </li>
                        </ul>    
                    }

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={scroll || page!=="home" ? "nav-link nav-link__scroll" : "nav-link"}>Become a host</a>
                        </li>
                        <li className="nav-item" style={{margin: "0 10px 0 5px"}}>
                            <a className={scroll || page!=="home" ? "nav-link nav-link__scroll" : "nav-link"}><LanguageIcon style={{fontSize:"20px",margin:"0 2px"}}/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link menu__profileIcon" onClick={()=>setLoginShow(!loginShow)}><MenuRoundedIcon style={{fontSize:"20px"}} /><Avatar/></a>
                        </li>
                    </ul>
                </div>
            </nav>
            {loginShow && <div className="navbar__loginSec">
                <LoginModal />
                <SignupModal />
                <hr />
                <p>Host your home</p>
                <p>Host an experience</p>
                <p>Help</p>
            </div>}
        </div>
    )
}

export default Menu;
