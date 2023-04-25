const users = require('../utils/users') //recibe: [{email:'gustavo@gmail.com', password: '123asd'}]

/* El método find busca un elemento en el array que cumpla que el email y la contraseña del usuario
 sean iguales a los proporcionados en la solicitud (req.query). */

const login = (req, res) => {
    const {email, password} = req.query; // **NOTA

    //find devuelve true si user cumple con la condición especificada, de lo contrario false.
    const userFound = users.find((user) => user.email === email && user.password === password)


    return userFound // Encontro a un usuario que coincida con email y password?
    ? res.status(200).json({access:true})  // Si es asi entonces {access:true}
    : res.status(200).json({access:false}) // Si no es asi entonces {access:false}
}

/*  **NOTA: La línea de código const {email, password} = req.query; utiliza la sintaxis de desestructuración 
de objetos de JavaScript para extraer las propiedades email y password del objeto query que se 
encuentra en la solicitud HTTP req.

req.query es un objeto que contiene los parámetros de consulta enviados en una solicitud HTTP GET. 
Por ejemplo, si una solicitud HTTP GET tiene la siguiente URL: https://miapp.com/login?email=john@example.com&password=secret123,
entonces req.query contendrá un objeto con las propiedades email y password, y sus valores serán 
john@example.com y secret123 respectivamente.

La desestructuración de objetos permite asignar valores a variables utilizando la sintaxis de objetos.
En este caso, const {email, password} = req.query; asigna los valores de req.query.email y req.query.password 
a las variables email y password respectivamente, lo que facilita el acceso a los parámetros de consulta 
en el código. */

module.exports ={
    login
}