import axios from "axios";

export const Post_URL = "http://localhost:3000/api/post/porCategoria";

const getPostPorCategoria = async (categoriaId) => {
  try {
    const res = await axios.get(`${Post_URL}/${categoriaId}`);

    return res.data;
  } catch (err) {
    return err.data || err;
  }
};

export { getPostPorCategoria };
