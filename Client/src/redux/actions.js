import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';

//Esta función recibe un personaje por parámetro. Retorna un payload que es igual al personaje
export const addFav = (character) => {
    return { type: ADD_FAV, payload: character }
};

//Esta función recibe un id por parámetro. Retorna un payload que es igual al id
export const removeFav = (id) => { 
    return { type: REMOVE_FAV, payload: id }
}

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}
export const orderCards = (order) => {
    return {type:ORDER, payload: order}
}