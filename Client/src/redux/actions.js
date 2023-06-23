import axios from 'axios';
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';

//Esta función recibe un personaje por parámetro. Retorna un payload que es igual al personaje
export const addFav = (character) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav"; //guarda la URL de nuestro servidor
    return async (dispatch) => { //retorna una función haciendo una petición al servidor
      try {
         const {data} = await axios.post(endpoint, character) // (ruta, el objeto character) character lo recibe por body nuestro servidor.

         if(!data.length) throw Error('No se pudo agregar a favoritos') //(data es un array con los personajes) Si data esta vacio tira error

         return dispatch({
            type: ADD_FAV,
            payload: data,
        });
      } catch (error) {
         console.log(error.message);
      }
       
    };
 };

//Esta función recibe un id por parámetro. Retorna un payload que es igual al id
export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return async (dispatch) => {
      try {
         const {data} = await axios.delete(endpoint);

         //if(!data.length) throw Error('No hay favoritos') //(data es un array con los personajes) Si data esta vacio tira error

         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error.message);
      }
      
    };
 };

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}
export const orderCards = (order) => {
    return {type:ORDER, payload: order}
}