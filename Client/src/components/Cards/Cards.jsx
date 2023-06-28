import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards({ characters, onClose }) {
   return (
      <div className={style.main}>
         {
            characters.map((character) => {
               return(
                  <Card
                     key={character.id}
                     id={character.id}
                     name={character.name}
                     status={character.status}
                     species={character.species}
                     gender={character.gender}
                     image={character.image}
                     origin={character.origin.name}
                     onClose={onClose}
                  />
               )
            })
         }
      </div>
   )
}
