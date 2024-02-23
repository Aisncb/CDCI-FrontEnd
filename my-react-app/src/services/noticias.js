import api from ".";


export const getAllNoticias = async () => {

    const { data } = await api.get("/noticia");
    return data; // trae todos los datos de las noticias
  };