import Card from '../Card/Card';
import style from "./Favorites.module.css";
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';

const Favorites = ({myFavorites}) => { //estado global myFavorites por props
    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value)); //la event.target.value será "A" o "D" dependiendo en que option se haga click
        setAux(true)
    }
    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value)); //la event.target.value será ""Male", "Female", "Genderless"... dependiendo en que option se haga click
    }

    return (
        <div>
            <div  className={style.main_select}>
                <div className={`${style.select} ${style.select01}`}>
                    <select onChange={handleOrder}>
                        <option value="A">Ascendente</option>
                        <option value="D">Descendente</option>
                    </select>
                </div>

                <div className={`${style.select} ${style.select02}`}>
                    <select onChange={handleFilter}>
                        <option value="Male" >Male</option>
                        <option value="Female">Female</option>
                        <option value="Genderless">Genderless</option>
                        <option value="unknown">unknown</option>
                        <option value="allCharacters">All Characters</option>
                    </select>
                </div>
            </div>

            <div className={style.main_cards}>
                {// mapeamos el estado myfavorites (que es un array) y lo randerizamos utilizando el componente Card
                    myFavorites?.map(fav => { // agregamos el condicional ? changing para evitar que se rompa 
                        return(
                            <Card
                                key={fav.id}
                                id={fav.id}
                                name={fav.name}
                                image={fav.image}
                                status={fav.status}
                                origin={fav.origin.name}
                                species={fav.species}
                                gender={fav.gender}
                                onClose={fav.onClose}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

//mapStateToProps trae el estado global myFavorite
const mapStateToProps = (state) => { //recibe el estado global completo 
    return {
       myFavorites: state.myFavorites 
    }
 }


export default connect( //conecta el componente Favorites con la funcion mapStateToProps
    mapStateToProps,
    null
 )(Favorites);