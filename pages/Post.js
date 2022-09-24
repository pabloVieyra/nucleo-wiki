import ImagenPost from "../components/Post/Imagen";
import ParrafoPost from "../components/Post/Parrafo";
import VideoPost from "../components/Post/Video";
import H1Post from "../components/Post/H1";
import H2Post from "../components/Post/H2";
import H3Post from "../components/Post/H3";
import Ruta from "../components/Post/Ruta";
import NavBar from "../components/NavBar/NavBar";

const Post = () => {
  return (
    <div>
      <NavBar />
      <Ruta></Ruta>
      <H1Post></H1Post>
      <H2Post></H2Post>
      <VideoPost></VideoPost>
      <H3Post></H3Post>
      <ParrafoPost> </ParrafoPost>
      <H3Post></H3Post>
      <ParrafoPost> </ParrafoPost>
      <ImagenPost></ImagenPost>
    </div>
  );
};

export default Post;
