const {User} = require('../DB_connection') //importa la tabla User del archivo DB_connection.js

module.exports = async (req, res)=>{
    
    try {
        const {email, password} =req.body //extrae del body email y password
    
        if(!email || !password) return res.status(400).send("Faltan datos")
        
        //Busca un registro en la DB tabla que coincida con el email y password del req.body,
        //si no lo encuentra lo crea con los valores especificados.
        //Si crea el registro devuelve también un true dentro del objeto JSON
        const user = await User.findOrCreate({where: {email, password}})
        return res.json(user)

    } catch (error) {
        return res.status(500).json(error.message)        
    }
}