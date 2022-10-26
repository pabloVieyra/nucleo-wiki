import axios from "axios";

export const Post_URL = "/api/post/porCategoria";
export const Post_URLS = "/api/post/porSistema";

const getPostPorCategoria = async (categoriaId) => {
  try {
    const res = await axios.get(`${Post_URL}/${categoriaId}`);

    return res.data;
  } catch (err) {
    return err.data || err;
  }
};

const getPostPorSistema = async (sistemaId) => {
  try {
    const res = await axios.get(`${Post_URLS}/${sistemaId}`);

    return res.data;
  } catch (err) {
    return err.data || err;
  }
};

export { getPostPorCategoria, getPostPorSistema };
