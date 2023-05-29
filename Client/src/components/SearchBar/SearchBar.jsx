import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value) // event.target.value devuelve el texto ingresado en el input
   }

   return (
      <div>
         <div className={style.form__group}>
            <input type='search' onChange={handleChange} value={id} className={style.form__field} placeholder='search' name="search"/> {/* La propiedad value me permite tener el mismo valor que id */ }
            <label htmlFor="search" className={style.form__label} >Buscar</label>
         </div>
         <button onClick={() =>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}