import React from "react";
import { useFormik } from "formik";
import Image from "next/image";
import logowiki from "../../public/Images/logowiki.png";
import * as yup from "yup";
import Link from "next/link";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
    },

    validationSchema: yup.object({
      name: yup
        .string()
        .min(3, "Demaciado corto!")
        .max(7, "Demaciado largo!")
        .required(),
      password: yup
        .string()
        .min(3, "Demaciado corto!")
        .max(7, "Demaciado largo!")
        .required(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),
    }),
    onSubmit: (formData, values) => {
      console.log(formData);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-secundary text-white">
      <div className="h-screen w-1/2 bg-black">
        <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
          <div>
            <h2 className="mb-8 text-white font-bold text-5xl pb-0 text-center">
              Login
            </h2>
            <div className="grid place-items-center ">
              <Link href="/Private/HomeDashboard">
                <Image src={logowiki} alt="check"></Image>
              </Link>
            </div>
          </div>
          <div>
            <fieldset className=" border-t mt-10 border-solid border-white">
              <legend className="mx-auto px-2 text-center text-m">
                Inicie Sesión
              </legend>
            </fieldset>
          </div>
          <div className="mt-10">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  className="w-full transform border-b-2 bg-secundary text-lg text-white duration-300 focus-within:border-indigo-500 "
                  type="name"
                  id="name"
                  name="name"
                  placeholder="Usuario"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />

                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="mt-10">
                <input
                  className="w-full transform border-b-2 bg-secundary text-lg  duration-300 focus-within:border-indigo-500 "
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />

                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="mt-10 flex w-full flex-col justify-between sm:flex-row">
                <div>
                  <input type="checkbox" id="remember" />
                  <label className="mx-2 text-sm">Mantenerme conectado</label>
                </div>
              </div>
              <div className="my-10">
                <button
                  className="w-full rounded-lg bg-primary p-2 hover:bg-gray-800 font-bold"
                  type="button"
                  onClick={() => validateField("name, password")}
                >
                  INICIAR SESION
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
