import { Link } from 'react-router-dom';
import {addFav, removeFav} from '../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card({ id, name, species, gender, image, onClose, addFav, removeFav, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav({id, name, species, gender, image, onClose}) //Aqui le paso todo el objeto del personaje, ya que es lo que espera el payload de addFav
      }
   }
   //useEffect permite ejecutar código después de que un componente se haya renderizado en la pantalla y cada vez que un 
   //estado cambia en el componente.
   //Este useEffect comprobará si el personaje que contiene la Card ya esta dentro de tus favoritos. En ese caso setteará el 
   //estado isFav en true
   useEffect(() => {
      myFavorites.forEach((fav) => { //recorre al estado global myFavorites que contiene el objeto de cada personaje
         if (fav.id === id) { //si el id de ese personaje es igual al id que estamos recibiendo por props entonces:
            setIsFav(true);   //el estado isFav se settea a true
         }
      });
   }, [myFavorites]);

   return (
      <div>
         { //randerizado condicional
            isFav 
            ? ( //isfav en true, entonces: 
               <button onClick={handleFavorite}>❤️</button>
            ) : ( //isfav en false, entonces:
               <button onClick={handleFavorite}>🤍</button>
            )
            
         }
         <button onClick={() => onClose(id)}>X</button>

         <Link to={`/detail/${id}`}> {/* la ruta me va a dirigir a a /detail mas el id que le pasemos por parámetro a Card */}
            <h2>{name}</h2>
         </Link>

         <h2>{species}</h2>
         <h2>{gender}</h2>
         {/* <h2>{status}</h2>
         <h2>{origin}</h2> */}
         <img src={image} alt='' />
      </div>
   );
}
//Para asegurarnos que el status del estado local se mantenga aunque nos vayamos y volvamos al componente se agregará una mapStateToProps
const mapStateToProps = (state) => { //recibe el estado global completo 
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => { //dispatach de las dos actions
    //necesitamos despachar siempre para obtener un objeto
   return {
      addFav: (character) => {dispatch(addFav(character))}, // Aqui character es igual al objeto {id, name, species, gender, image} que le pasamos como props a addFav
      removeFav: (id) => {dispatch(removeFav(id))} // El que se despacha "removeFav(id)" es el que importo desde actions,
                                                 // y el que recibo por props en Card es el que retorna la función "removeFav:"
   }
}
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);