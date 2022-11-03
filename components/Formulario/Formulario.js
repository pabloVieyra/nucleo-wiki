import React from "react";
import emailjs from "@emailjs/browser";

const Formulario = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_4v3mzdc",
        "template_hm84o3b",
        event.target,
        "Wh4SFLQBMgbXalt0H"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <section
        id="contact"
        className="mt-24 relative w-full min-h-screen bg-secundary text-white "
      >
        <div className="relative p-5 lg:px-25 flex flex-col md:flex-row items-center justify-center">
          <form
            onSubmit={sendEmail}
            action="#"
            className="rounded-lg md:w-1/2 border border-inputDark pt-2 px-8 bg-cardDark"
          >
            <h2 className="text-4xl pb-3 font-bold text-white">Contacto</h2>
            <div className="flex flex-col mb-3 ">
              <div className="flex flex-col mb-3">
                <label className="text-white text-sm pb-3">
                  Nombre del local
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="rounded-lg text-sm px-3 py-2 bg-inputDark border border-inputDark focus:border-white-500 focus:outline-none focus:bg-inputDark focus:text-green-500"
                />
              </div>
              <div className="flex flex-col mb-3">
                <label className="text-white text-sm pb-3">Teléfono</label>
                <input
                  type="tel"
                  name="user_number"
                  required
                  className="rounded-lg text-sm px-3 py-2 bg-inputDark border border-inputDark focus:border-white-500 focus:outline-none focus:bg-inputDark focus:text-green-500"
                />
              </div>
              <div className="flex flex-col mb-3">
                <label className="text-white text-sm pb-3">Email</label>
                <input
                  type="text"
                  name="user_email"
                  required
                  className="rounded-lg text-sm px-3 py-2 bg-inputDark border border-inputDark focus:border-white-500 focus:outline-none focus:bg-inputDark focus:text-green-500"
                />
              </div>
              <div className="flex flex-col mb-3">
                <label className="text-white text-sm pb-3">Mensaje</label>
                <textarea
                  rows="4"
                  name="user_message"
                  className="rounded-lg text-sm px-3 py-2 bg-inputDark border border-inputDark focus:border-white-500 focus:outline-none focus:bg-inputDark focus:text-green-500"
                ></textarea>
              </div>
            </div>
            <div className="w-full pt-3 pb-3 grid place-items-center">
              <button className="font-semibold leading-none text-white py-3 px-10  rounded rounded-lg bg-primary p-2 hover:bg-primary font-bold">
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Formulario;
