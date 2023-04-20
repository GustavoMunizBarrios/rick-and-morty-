import { useState } from "react"
import validation from "./validation/validation"

const Form = ({login}) => {
    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: '',
        password:''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({ //Aqui voy a retornar un objeto, lo que retorna lo guarda en el estado errors
            // Si el objeto encuentra un error  generara una propiedad con un mensaje de error
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault(); // esto hace que la página no se recargue
        login(userData);
    }
    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor="email">Email: </label>
            <input type="text" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>} {/* si existe errors.amail entonces muestra el mensaje de errors.email */}

            <br/> <br />
            <label htmlFor="password">Password</label>
            <input type="text" name = "password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>} {/* si existe errors.password entonces muestra el mensaje de errors.password */}



            <button>submit</button>
        </form>
    )
}
export default Form;