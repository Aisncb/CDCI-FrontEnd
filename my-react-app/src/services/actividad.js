import api from ".";


export const getAllActividades = async () => {

    const { data } = await api.get("/actividad", {
      headers: {
        "Authorization": localStorage.getItem("token"),
      },
    });
    return data; // trae todos los datos de los usuarios
  };


export async function createActividad(actividad) {
  const response = await api.post("/actividad", actividad, {
    headers: {
      "Authorization": localStorage.getItem("token"),
    },
  });
  return response;
}
  
  export async function updateActividad(actividad) {
  
    const response  = await api.put(`/actividad/${actividad.id}`,{//ruta del backend dinamica y pasamos el resto de datos como objeto json
        titulo: actividad.titulo,
        descripcion: actividad.descripcion,
        fecha: actividad.fecha,
        plazas: actividad.plazas,
        precio: actividad.precio
    },
    {
      headers: {
        Authorization: localStorage.getItem("token"), 
      },
    });
  
    return response
  }
  
  export async function deleteActividad(id) {
    const response = await api.delete(`/actividad/${id}`, 
    {
      headers: {
        "Authorization": localStorage.token,//tambien se puede llamar asi
      },
    });
    return response;
  }
  