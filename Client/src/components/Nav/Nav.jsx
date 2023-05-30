import SearchBar from '../SearchBar/SearchBar';
import { Link} from 'react-router-dom';
import style from './Nav.module.css';
import logoImage from '../Form/Logo_rickandmorty2.png';

const Nav = ({ onSearch,  setAccess }) => {

    const handlelogOut = () => {
        setAccess(false);
    }

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
            
            <button className={`${style.btnComun} ${style.logout}`} onClick={handlelogOut}>Log Out</button>

            <img className={style.imgLogo} src={logoImage} alt="logotipo rick and morty"/>

            <div className={style.searchBar}>
                <SearchBar onSearch={onSearch}/>
            </div>
        </nav>
    )
}

export default Nav;