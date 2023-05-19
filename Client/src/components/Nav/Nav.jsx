import SearchBar from '../SearchBar/SearchBar';
import { Link} from 'react-router-dom';
import style from './Nav.module.css';

const Nav = ({ onSearch,  setAccess }) => {

    const handlelogOut = () => {
        setAccess(false);
    }

    return (
        <div className={style.home}>
            <nav>
                <SearchBar onSearch={onSearch}/>

                <button>
                    <Link to='/about' >ABOUT</Link>
                </button>

                <button>
                    <Link to='/home' >HOME</Link>
                </button>

                <button>
                    <Link to='/favorites' >Favorites</Link>
                </button>

                <button onClick={handlelogOut}>Log Out</button>
            </nav>

        </div>
    )
}

export default Nav;