import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import CardHome from "../CardHome/CardHome";
import AbmCategoria from "../Popup/AbmCategoria";
import Link from "next/link";
import { getPostPorSistema } from "../../services/PostService";
import logocol from "../../public/Images/col.png";
import logong from "../../public/Images/ng.png";
import logog1 from "../../public/Images/g1.png";
import logocheck from "../../public/Images/check.png";
import logofce from "../../public/Images/fce.png";

const Homedash = ({ system }) => {
  const [posts, setPosts] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [id, setId] = useState(0);

  const clicked = () => {
    setModalOn(true);
  };

  const getPostPorSystem = async (id) => {
    const resp = await getPostPorSistema(id);

    return resp;
  };

  useEffect(() => {
    if (system === "NG") {
      setId(1);
    }
    if (system === "G1") {
      setId(2);
    }
    if (system === "CHECK") {
      setId(3);
    }
    if (system === "COL") {
      setId(4);
    }
    if (system === "FCE") {
      setId(5);
    }

    getPostPorSystem(id).then((res) => {
      setPosts(res);
    });
  }, [system, id]);

  return (
    <>
      {(() => {
        switch (system) {
          case "NG":
            return (
              <div className=" flex justify-center">
                <Image src={logong} alt="Ng" width={150} height={150} />
              </div>
            );
          case "G1":
            return (
              <div className=" flex justify-center">
                <Image src={logog1} alt="G1" width={150} height={150} />
              </div>
            );
          case "CHECK":
            return (
              <div className=" flex justify-center">
                <Image src={logocheck} alt="CHECK" width={150} height={150} />
              </div>
            );
          case "COL":
            return (
              <div className=" flex justify-center">
                <Image src={logocol} alt="COL" width={150} height={150} />
              </div>
            );
          case "FCE":
            return (
              <div className=" flex justify-center">
                <Image src={logofce} alt="FCE" width={150} height={150} />
              </div>
            );
          default:
            return null;
        }
      })()}

      <div className="flex justify-between">
        <div className="w-60 mt-10  ml-40 flex flex-col   ">
          <h1 className="text-white"> Categorias</h1>
          <form className=" mt-2 flex items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative ">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </form>
          {/* Aca termina la busqueda */}
          <label
            htmlFor="countries"
            className="block mb-1 text-sm font-medium text-white dark:text-gray-400"
          >
            Select an option
          </label>
          <select
            id="countries"
            className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Categoria</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <div className="flex-col-reverse mt-10  ml-40 mr-10    ">
          <div className="flex justify-end  ">
            <Link href="/Private/Posts/NewPost">
              <button
                htmlFor="choose-me"
                className="select-none cursor-pointer rounded-lg border-2 border-primary
            py-2 px-6 font-bold text-primary transition-colors duration-200 ease-in-out peer-checked:bg-primary peer-checked:text-primary peer-checked:border-primary "
              >
                Crear Post
              </button>
            </Link>
          </div>

          <div className="flex justify-end mt-4 ">
            <button
              htmlFor="choose-me"
              className="select-none cursor-pointer rounded-lg border-2 border-primary
             py-2  px-6 font-bold text-primary transition-colors duration-200 ease-in-out peer-checked:bg-primary peer-checked:text-primary peer-checked:border-primary "
              onClick={clicked}
            >
              Crear Categoria
            </button>
          </div>
        </div>
      </div>
      <div className="ml-20 md:ml-10 xl:ml-20  ">
        <div className=" flex justify-center grid grid-cols-3 gap-4  md:grid-cols-3 md:ml-10 xl:grid-cols-4 xl:ml-10  ">
          {posts.map((post) => {
            console.log(post.id);
            return (
              <>
                <CardHome nombre={post.nombre} id={post.id}></CardHome>
              </>
            );
          })}
        </div>
        {/* ---> Modales */}
        {modalOn && (
          <AbmCategoria
            setModalOn={setModalOn}
            setChoice={setChoice}
          ></AbmCategoria>
        )}
      </div>
    </>
  );
};

export default Homedash;
