import { bindActionCreators } from "redux";
import { ADD_FAV, FILTER, REMOVE_FAV, ORDER } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharactersFav: []
}


const reducer = (state = initialState, { type, payload }) => { //el segundo parámetro es action,
                                                                //y como este es un objeto con dos tiene dos propiedades (type, payload)
                                                                //hacemos destructuring.
    switch( type ){
        case ADD_FAV: // Agrega el personaje que se recibe por payload al estado "myFavorites"
            return {
                ...state, //Hacemos una copia del estado
                myFavorites: [...state.allCharactersFav, payload], //El array myFavorites será igual al estado myfavorites concatenando el
                                                             // payload que es igual a character (al personaje), recordemos que
                                                             // character es un objeto con las propiedades del personaje
                allCharactersFav:[...state.allCharactersFav, payload]
            }

        case REMOVE_FAV: // Elimina a un personaje del estado "myFavorites" a partir de un id que recibas por payload
            return {
                ...state,
                //Recordar que el método filter devuelve un nuevo array con los elementos que cumplan con la condición especificada 
                myFavorites: state.myFavorites.filter(fav => fav.id !== payload) // Aplicamos un método filter al estado 
                                                                                // myFavorites, recorremos a cada chacaracter dentro de 
                                                                                // myFavorites, si el id de algun character es diferente
                                                                                // al id que recibimos por payload entonces lo agrega
                                                                                // al nuevo array myFavorites.
            }
        case FILTER:
            const allCharactersFiltered =state.allCharactersFav.filter(character => character.gender === payload)
            return{
                ...state,
                myFavorites: 
                    payload === 'allCharacters'
                    ? [...state.allCharactersFav]
                    : allCharactersFiltered
                
            }
        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav]
            return {
                ...state,
                myFavorites:
                    payload === 'A'//Si payload es igual a 'A' entonces:
                    ? allCharactersFavCopy.sort((a,b) => a.id - b.id) //El id del primero tiene que ser menor al id del segundo (menor a mayor)
                    : allCharactersFavCopy.sort((a,b) => b.id - a.id) // El id del segundo tiene que ser menor al id del primero (mayor a menor)
            }

        default:
            return {...state}


    }
}


export default reducer;