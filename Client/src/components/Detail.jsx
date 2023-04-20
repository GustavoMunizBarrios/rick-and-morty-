import axios from 'axios';
import { useParams } from 'react-router-dom'; // useParams nos permite obtener el valor de la variable de la ruta 
import { useState, useEffect } from 'react';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'f99ef8399d40.cea0bfba7c15f21eb580';

const Detail = () => {
    //useParams es un objeto que contiene la propiedad id (el cual viene de la ruta 'detail/:id')
    const { id } = useParams(); 

    //character será un objeto con la información de un personaje (es diferente de characters)
    const [character, setCharacter] = useState({});
     
    // El siguiente código buscará al personaje de la API cada vez que el componente se monte,
    // después cada vez que se desmonte, borrara su información ( return setCharacter({}) ).
    // El componente se actualizará cada vez que cambie el id.

    // Recordar que useEffect simula los tres ciclos de vida del componente
    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`) // axios hace una petición a la API, cuando axios responde nos da un objeto
        .then(response => response.data) // Aqui es cuando recibo la respuesta de la API, y me quedo con data que es un objeto
        .then((data) => { // Aquí trabajamos con esa información
           if (data.name) {  //si hay un data.name entonces 
              setCharacter(data); //configura character con la información de data, por lo tanto character será un objeto con la información de un personaje especifico
           } else { //Si no hay data.name entonces muestra un alert 
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({}); // retorna character como un objeto vacio
    }, [id]); // El [id] es un array de dependencias, evita que se haga un loop infinito, Tambien es uno de los 
              // ciclos de vida del componente (componentDidUpdate), esto significa que todo lo que este dentro de useEffect 
              // se va a modificar cada vez que cambie el id


    return(
        /* Se randeriza condicionalmente cada propiedad de character */
        <div>
            <h2>{character?.name}</h2> {/* si hay información en character entonces extrae el valor de la propiedad name */}
            <h2>{character?.status}</h2> {/* si hay información en character entonces extrae el valor de la propiedad status */}
            <h2>{character?.species}</h2> {/* si hay información en character entonces extrae el valor de la propiedad species */}
            <h2>{character?.gender}</h2> {/* si hay información en character entonces extrae el valor de la propiedad gender */}
            <h2>{character?.origin?.name}</h2> {/* si hay información en character entonces extrae el valor de la propiedad origin.name */}
            <img src={character?.image} alt={character?.name} /> {/* si hay información en character entonces extrae el valor de la propiedad image */}
        </div>
    )
}

export default Detail;