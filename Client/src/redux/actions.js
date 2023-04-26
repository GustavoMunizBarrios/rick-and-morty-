import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';
import axios from 'axios';

//Esta función recibe un personaje por parámetro. Retorna un payload que es igual al personaje
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav'; //guarda la URL de nuestro servidor
    return (dispatch) => { //retorna una función haciendo una petición al servidor
       axios.post(endpoint, character) // (ruta, el objeto character) character lo recibe por body nuestro servidor.
       .then(({ data }) => { // destructuring de data
          return dispatch({
             type: ADD_FAV,
             payload: data,
          });
       });
    };
 };

//Esta función recibe un id por parámetro. Retorna un payload que es igual al id
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
       axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAV',
             payload: data,
       });
       });
    };
 };

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}
export const orderCards = (order) => {
    return {type:ORDER, payload: order}
}