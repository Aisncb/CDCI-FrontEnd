import api from ".";


export const getAllNoticias = async () => {

    const { data } = await api.get("/noticia");
    return data; // trae todos los datos de las noticias
  };


export async function createNoticia(noticia) {
  const response = await api.post("/noticia", noticia, {
    headers: {
      "Authorization": localStorage.getItem("token"),
    },
  });
  return response;
}
  
  export async function updateNoticia(noticia) {
  
    const response  = await api.put(`/noticia/${noticia.id}`,{//ruta del backend dinamica y pasamos el resto de datos como objeto json
        nombre: noticia.nombre,
        descripcion: noticia.descripcion,
    },
    {
      headers: {
        Authorization: localStorage.getItem("token"), 
      },
    });
  
    return response
  }
  
  export async function deleteNoticia(id) {
    const response = await api.delete(`/noticia/${id}`, 
    {
      headers: {
        "Authorization": localStorage.token,//tambien se puede llamar asi
      },
    });
    return response;
  }
  