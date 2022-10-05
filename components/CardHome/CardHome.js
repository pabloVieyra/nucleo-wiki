import React from "react";

const CardHome = ({ nombre }) => {
  return (
    <div>
      <div className="flex-col border rounded-lg overflow-hidden bg-white my-12 mx-6 ">
        <div className="p-10 text-gray-600">
          {/* Texto */}
          <div className="flex flex-row text-xl items-center justify-center">
            <h1 className="">{nombre}</h1>
          </div>
        </div>
        {/* Botones */}
        <div className="grid grid-cols-2 border-t divide-x py-3">
          <a className=" cursor-pointer text-xs flex flex-row items-center justify-center">
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 0 24 24"
                width="20px"
                fill="#64748b"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
            </div>
          </a>
          <a className="cursor-pointer text-xs flex flex-row items-center justify-center">
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 0 24 24"
                width="20px"
                fill="#64748b"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
              </svg>
            </div>
          </a>
        </div>
        {/* Fin Botones */}
      </div>
    </div>
  );
};

export default CardHome;
