import { useState } from 'react';

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value) // event.target.value devuelve el texto ingresado en el input
   }

   return (
      <div>
         <input type='search' onChange={handleChange} value={id} /> {/* La propiedad value me permite tener el mismo valor que id */ }
         <button onClick={() =>{onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}