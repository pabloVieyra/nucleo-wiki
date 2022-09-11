import React from 'react';
import emailjs from '@emailjs/browser';




const Formulario = () => {

    const sendEmail = (event) => {
      event.preventDefault();

        emailjs.sendForm('service_4v3mzdc', 'template_hm84o3b', event.target, 'Wh4SFLQBMgbXalt0H')
        .then(response => console.log(response))
        .catch(error => console.log(error))
        
    }

  return (
    <div className="w-full bg-gray-800 h-screen">
    <div className="bg-gradient-to-b from-black-800 to-black-600 h-96"></div>
    <div className="mx-auto">
        <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72 h-screen">
            <p className="text-3xl font-bold leading-7 text-center text-white">SUGERENCIAS</p>
            <form onSubmit={sendEmail} action="" method="post">
                <div className="md:flex items-center mt-12">
                    <div className="w-full md:w-1/2 flex flex-col">
                        <label className="font-semibold leading-none text-gray-300">Nombre del local</label>
                        <input type="text" name="user_name" className="border border-green-500 text-white leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" required />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="font-semibold leading-none text-gray-300">Teléfono</label>
                        <input type="tel" name="user_number" className="border border-green-500 text-white leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" required />
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="w-full flex flex-col">
                        <label className="font-semibold leading-none text-gray-300">Email</label>
                        <input type="email" name="user_email" className=" border border-green-500 text-white leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" required />
                    </div>
                    
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="font-semibold leading-none text-gray-300">Mensaje</label>
                        <textarea type="text" name="user_message" className="border border-green-500 text-white h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full">
                    <button className="mt-20 font-semibold leading-none text-white py-5 px-20 bg-gradient-to-r from-green-500 to-blue-500 rounded rounded-full">
                        ENVIAR
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
    
  )
}

export default Formulario