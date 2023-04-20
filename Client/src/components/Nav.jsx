import SearchBar from './SearchBar';
import { Link} from 'react-router-dom';

const Nav = ({ onSearch,  setAccess }) => {

    const handlelogOut = () => {
        setAccess(false);
    }

    return (
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
    )
}

export default Nav;