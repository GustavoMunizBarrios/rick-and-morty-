import { useState } from "react";
import validation from "../validation/validation";
import style from "./Form.module.css";
import portalImage from "./portal_download-removebg.png";
import logoImage from "./Logo_rickandmorty2.png";
import rickImage from "./rick_sin_fondo.png";
import mortyImage from "./morty2.png";

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        //Aqui voy a retornar un objeto, lo que retorna lo guarda en el estado errors
        // Si el objeto encuentra un error  generara una propiedad con un mensaje de error
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // esto hace que la página no se recargue
    login(userData);
  };
  return (
    <div className={style.login}>
      <img
        className={style.imgLogo}
        src={logoImage}
        alt="logotipo rick and morty"
      />
      <form onSubmit={handleSubmit} className={style.card}>
        <div className={style.card2}>
          {/* <p>Login</p> */}

          <div className={style.form__group}>
            <input
              type="input"
              onChange={handleChange}
              className={style.form__field}
              placeholder="email"
              name="email"
              value={userData.email}
            />
            <label htmlFor="email" className={style.form__label}>
              Email:{" "}
            </label>
            {errors.email && (
              <p className={style.form__error}>{errors.email}</p>
            )}{" "}
            {/* si existe errors.amail entonces muestra el mensaje de errors.email */}
          </div>
          {/* <br /> */}
          <div className={style.form__group}>
            <input
              type="password"
              onChange={handleChange}
              className={style.form__field}
              placeholder="password"
              name="password"
              value={userData.password}
            />
            <label htmlFor="password" className={style.form__label}>
              Password
            </label>
            {errors.password && (
              <p className={style.form__error}>{errors.password}</p>
            )}{" "}
            {/* si existe errors.password entonces muestra el mensaje de errors.password */}
          </div>

          <button className={style.form__login}>Login</button>

          <div className={style.demoCredentials}>
            <p>Try it !!</p>
            <p>email: user@email.com</p>
            <p>password: 1234</p>
          </div>
        </div>
      </form>
      <img
        className={style.img}
        src={portalImage}
        alt="portal rick and morty"
      />
      <img className={style.imgRick} src={rickImage} alt="Rick character" />
      <img className={style.imgMorty} src={mortyImage} alt="Morty character" />
    </div>
  );
};
export default Form;
