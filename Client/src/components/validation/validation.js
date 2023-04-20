const validation = (userData) => { //userData se puede llamar como sea 
    const errors = {};

    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'Escribe correctamente tu email';

    }
    if(!userData.email){
        errors.email = 'Debe ingresar un email';
    }
    if(userData.email.length > 35){
        errors.email = 'el email no debe superar los 35 caracteres';
    }
    if(!/.*d+.*/.test(userData.password)){
        errors.password = 'La contraseña debe contener al menos un número';
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe ser entre 6 y 10 caracteres';
    }


    return errors;
}
export default validation