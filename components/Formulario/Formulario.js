import React from 'react';
import emailjs from '@emailjs/browser';
import estilos from "./Formulario.module.css";

const Formulario = () => {

    const sendEmail = (event) => {
      event.preventDefault();

        emailjs.sendForm('service_4v3mzdc', 'template_hm84o3b', event.target, 'Wh4SFLQBMgbXalt0H')
        .then(response => console.log(response))
        .catch(error => console.log(error))
        
    }

  return (
    <div>
        <h1 className={estilos.title}>Sugerencias!</h1>
        <form onSubmit={sendEmail} className={estilos.contenedor}>
            <label className={estilos.label}></label>
            <input type="text" name="user_name" required placeholder='Nombre de local' className={estilos.form} />

            <label className={estilos.label}></label>
            <input type="email" name="user_email" required placeholder='example@hotmail.com' className={estilos.form} />

            <label className={estilos.label}></label>
            <input type="tel" name="user_number" required placeholder='Telefono' className={estilos.form} />

            <label className={estilos.label}></label>
            <textarea name="user_message" placeholder='Mensaje' id="" cols="100" rows="10" className={estilos.textarea} ></textarea>

            <button type="submit" id="btnEnviar" name="btnEnviar" className={estilos.button}>ENVIAR</button>
        </form>
    </div>
  )
}

export default Formulario