import ImagenPost from "../../components/Post/Imagen";
import ParrafoPost from "../../components/Post/Parrafo";
import VideoPost from "../../components/Post/Video";
import H1Post from "../../components/Post/H1";
import H2Post from "../../components/Post/H2";
import H3Post from "../../components/Post/H3";
import Separador from "../../components/Post/Separador";
import Componentes from "../../components/Post/Utilities/Components";
import estilos from "../../components/Post/Post.module.css";
import AppLayout from "../../components/AppLayout/AppLayout";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/Post");
  const data = await res.json();

  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:3000/api/post/" + id);
  const data = await res.json();

  return {
    props: { post: data },
  };
};

export default function Post({ post }) {
  const filtracion = () => {
    Componentes.sort(function (a, b) {
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

  return (
    <div className={estilos.container}>
      <div className={`${estilos.Ruta} ${estilos.componentPost}`}>
        Gastronomico - Producto
      </div>
      {Componentes.map((Component) => {
        return (
          <>
            {(() => {
              switch (Component.tipo) {
                case 1:
                  return <H1Post values={Component.valor} />;
                case 2:
                  return <ImagenPost values={Component.valor} />;
                case 3:
                  return <VideoPost values={Component.valor} />;
                case 4:
                  return <ParrafoPost values={Component.valor} />;
                case 5:
                  return <H2Post values={Component.valor} />;
                case 6:
                  return <H3Post values={Component.valor} />;
                case 7:
                  return <Separador values={Component.valor} />;
                default:
                  return null;
              }
            })()}
          </>
        );
      })}
    </div>
  );
}

Post.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
