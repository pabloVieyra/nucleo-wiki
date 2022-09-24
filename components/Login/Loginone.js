import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login (){
  const formik = useFormik({
    initialValues:{
      email:"",
      name:"",
      password:"",
    },
    validationSchema: Yup.object({
      email: Yup.string().required(),
      name: Yup.string().required(),
      password: Yup.string().required(),
    }),
    onSubmit: (formData, values) => {
      console.log(formData);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[30rem] flex-col space-y-10">
          <h2 className="text-gray-800 font-bold text-4xl pb-6 text-center">
            Núcleo<span className="text-green-600">Wiki</span>
          </h2>
          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          <button className="transform rounded-sm bg-green-600 py-2 font-bold duration-300 hover:bg-gray-400">
            INICIAR SESIÓN
          </button>

          <a
            href="#"
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
          >
            HAS OLVIDADO TU CONTRASEÑA?
          </a>

          <p className="text-center text-lg">
            ¿Sin cuenta?
            <a
              href="#"
              className="font-medium text-green-500 underline-offset-4 hover:underline"
            >
              Crear tu cuenta
            </a>
          </p>
        </section>
      </main>
    </form>
  );
};

export default Login;
