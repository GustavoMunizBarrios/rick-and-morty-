import SearchBar from '../SearchBar/SearchBar';
import { useState} from "react";
import { Link} from 'react-router-dom';
import style from './Nav.module.css';
import logoImage from '../Form/Logo_rickandmorty2.png';
import menuIcon from "../Form/menu-svg.svg";

const Nav = ({ onSearch, logOut }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav className={style.nav}>

            <button className={`${style.btnComun} ${style.home}`}>
                <Link to='/home' >Home</Link>
            </button>

            <button className={`${style.btnComun} ${style.about}`}>
                <Link to='/about' >About</Link>
            </button>
            
            <button className={`${style.btnComun} ${style.favorites}`}>
                <Link to='/favorites' >Favorites</Link>
            </button>
            
            <button className={`${style.btnComun} ${style.logout}`} onClick={logOut}>Log Out</button>

            <img className={style.imgLogo} src={logoImage} alt="logotipo rick and morty"/>

            <div className={style.searchBar}>
                <SearchBar onSearch={onSearch}/>
            </div>

            <button className={style.hamburgerMenu} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <img className={style.menuIcon} src={menuIcon} alt="Menu Icon" />
            </button>
            {isMenuOpen && (
              <div className={style.menuOverlay}>
                <div className={style.menuItems}>

                  <Link to="/home">
                    <p className={style.btn_hamburguerMenu}>Home</p>
                  </Link>

                  <Link to="/about">
                    <p className={style.btn_hamburguerMenu}>About</p>
                  </Link> 

                  <Link to="/favorites">
                    <p className={style.btn_hamburguerMenu}>Favorites</p>
                  </Link> 

                  <p className={style.btn_hamburguerMenu} onClick={logOut}>Log Out</p>

                </div>
              </div>
            )}

        </nav>
    )
}

export default Nav;
