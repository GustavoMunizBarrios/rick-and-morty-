import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

/* const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'f99ef8399d40.cea0bfba7c15f21eb580'; */

const email = 'Gustavo@gmail.com'
const password = '123456'

function App() {
   const location = useLocation(); //Retorna la locación del objeto. la cual representa la url
   const navigate = useNavigate() // Cambia la locación de la url 
   const [characters, setCharacters] = useState([]); //characters es un estado del tipo array de objetos
   const [access, setAcces] = useState(false); //access es un estado inicializado en false

   const login = (userData) => {
      const { email, password } = userData; // Hace destructuring del objeto userData, extayendo las propiedades email y password
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`) //realiza una petición GET a la URL pasando como parametros email y password
      //Si la solicitud es exitosa regresa el objeto data que es: {access:true} con un valor booleano true o false.
      .then(({ data }) => {
         const { access } = data; //Hace destructuring de data, extrayendo el valor booleano (true o false)
         setAccess(access); // Configura el estado access con el valor booleano (true o false)
         access && navigate('/home'); //Si access es true, entonces ingreso al home
      });
   }

   useEffect(() => { // cada vez que cambie access se ejecuta lo que este en useEffect
      !access && navigate('/') // si access esta en false entonces no va a llevar a otra ruta que no sea /
   }, [access]) // El array de dependencias se queda "escuchando" a access

   // La función onSearch agrega un nuevo personaje al estado local characters
   const onSearch = (id) => {
      //Con axios le hago peticiones a una api al servidor, el id lo estamos obteniendo del input, 
      //es decir de lo que escribe el usuario. 

      axios(`https://rickandmortyapi.com/api/character/${id}`) 
      //Una vez que se ejecuta la petición, obtengo la respuesta con .then
      //Axios retorna un objeto con una propiedad llamada data y ahi dentro es donde tengo la información de la api

      .then(response => response.data)  //de la respuesta que me retorna me quedo con data
      .then((data) => { 
         if (data.name) { // si hay un data.name entonces 
            //setea characters [Crea una copia de todo lo que tenia characters(...oldChars), concatena la nueva respuesta (data)]
            setCharacters((oldChars) => [...oldChars, data]); 
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      //El método filter retornará los elementos del array que cumplan la condición especificada en la función callback
      // Es decir me retornará un array con los characters que no contangan el id que le pase por parámetro.
      const charactersFiltered = characters.filter(character => character.id !== id)// si da true se queda si da false se va el character
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         {
            //pathname me dice la url del usuario, si esta es diferente de '/' entonces randeriza a Nav
            location.pathname !== '/' && <Nav onSearch={onSearch} />   
         }
          {/* le pasamos por propiedad a Nav la función onSearch */}

         {/* Con Route definimos las rutas y que se ve a mostrar en cada una de ellas, después con Link le mostramos a que path se va a dirigir */}
         <Routes>
            <Route path='/' element={<Form login={login}  setAcces={setAcces}/>}/>
            <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
        
      </div>
   );
}

export default App;