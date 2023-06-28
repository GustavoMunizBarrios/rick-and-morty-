import style from "./Card.module.css";
import { Link } from 'react-router-dom';
import {addFav, removeFav} from '../../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Card(props) {
   //const {pathname} = useLocation()
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
    
      if (isFav) {
        setIsFav(!isFav);
        props.removeFav(props.id);
      } else if (!isFav) {
        setIsFav(!isFav);
        props.addFav(props); 
      }
    };
   //useEffect permite ejecutar código después de que un componente se haya renderizado en la pantalla y cada vez que un 
   //estado cambia en el componente.
   //Este useEffect comprobará si el personaje que contiene la Card ya esta dentro de tus favoritos. En ese caso setteará el 
   //estado isFav en true

   //recorre al estado global myFavorites que contiene el objeto de cada personaje
   //si el id de ese personaje es igual al id que estamos recibiendo por props entonces:
   //el estado isFav se settea a true
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [props]);

   return (
      <div className={style.card}>
         <div className={style.card2}>
            <img className={style.img} src={props.image} alt='' />

            <button className={style.btnX} onClick={() => props.onClose(props.id)}>
               <span className={style.btnX_text}>Remove</span>
               <span className={style.btnX_icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                     <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                  </svg>
               </span>
            </button>

            <Link to={`/detail/${props.id}`}> {/* la ruta me va a dirigir a a /detail mas el id que le pasemos por parámetro a Card */}
               <button className={style.btnName}>{props.name}</button>
            </Link>

            {
               /*<h2>{species}</h2>
               <h2>{gender}</h2>
               <h2>{status}</h2>
               <h2>{origin}</h2> */
            }
            <button onClick={handleFavorite} className={style.btnFav_main}>
            { //randerizado condicional
               isFav 
               ? ( //isfav en true, entonces: 
                  <button  className={`${style.btnFav} + ${style.btnFav_select}`}>
                     <svg className={style.btnFav_tick} viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="tick"> <polyline fill="none" points="3.7 14.3 9.6 19 20.3 5" stroke="#fafafa" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4"></polyline> </g> </g> </g></svg>
                  </button>
               ) : ( //isfav en false, entonces:
                  <button className={style.btnFav}>
                     <span className={style.btnFav_text}>Add to Fav</span>
                     <span className={style.btnFav_icon}>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g data-name="add" id="add-2"> <g> <line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="19" y2="5"></line> <line fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="5" x2="19" y1="12" y2="12"></line> </g> </g> </g> </g></svg>
                     </span>
                  </button>
               )
            }</button>
         </div> 
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
      addFav: (personaje) => {dispatch(addFav(personaje))}, // Aqui character es igual al objeto {id, name, species, gender, image} que le pasamos como props a addFav
      removeFav: (id) => {dispatch(removeFav(id))} // El que se despacha "removeFav(id)" es el que importo desde actions,
                                                 // y el que recibo por props en Card es el que retorna la función "removeFav:"
   }
}
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);