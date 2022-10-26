import Dashboard from "../../../../components/Dashboard/Dashboard";

export async function getServerSideProps(context) {
  const id = context.query;

  const res = await fetch(`http://localhost:3000/api/post/${id.id}`);
  const data = await res.json();

  const res2 = await fetch(`http://localhost:3000/api/components/${id.id}`);
  const data2 = await res2.json();

  return {
    props: { post: data, components: data2 },
  };
}

export default function Post({ post, components }) {
  let sistema = "";

  const Sistema = () => {
    switch (post.sistema) {
      case 1:
        sistema = "Gastronomico";
        break;
      case 2:
        sistema = "G1";
        break;
      case 3:
        sistema = "Check";
        break;
      case 4:
        sistema = "Fce";
        break;
      case 5:
        sistema = "Col";
        break;
    }
  };

  const filtracion = () => {
    components.sort(function (a, b) {
      if (a.orden > b.orden) {
        return 1;
      }
      if (a.orden < b.orden) {
        return -1;
      }
      return 0;
    });
  };

  filtracion();
  Sistema();
  return (
    <div>
      <h1 className="flex justify-center text-black text-2xl title-font font-bold mb-2 ">
        {sistema}-Categoria = {post.categoria_id}
      </h1>

      <>
        <section className="antialiased bg-gray-100 text-gray-600 h-screen px-2">
          <div className="flex flex-col justify-center h-full">
            <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">
                  post {post.nombre}
                </h2>
              </header>
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Tipo</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Id Post</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-left">Valor</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">Orden</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">Edit</div>
                        </th>
                        <th className="p-2 whitespace-nowrap">
                          <div className="font-semibold text-center">
                            Delete
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {components.map((Component) => {
                        return (
                          <tr key={Component.id}>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="font-medium text-gray-800">
                                  {Component.tipo}
                                </div>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left">
                                {Component.post_id}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left font-medium text-green-500">
                                {Component.valor}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-lg text-center">
                                {Component.orden}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  />
                                </svg>
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

Post.getLayout = function getLayout(page) {
  return <Dashboard>{page}</Dashboard>;
};
