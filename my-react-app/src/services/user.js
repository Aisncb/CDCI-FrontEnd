import api from ".";

export async function getMyProfile() {
  const { data } = await api.get("/usuario/getProfile", {
    headers: {
      authorization: localStorage.token,
    },
  });
  return data;
}
export const getListUsers = async () => {

  const { data } = await api.get("/usuario", {
    headers: {
      "Authorization": localStorage.getItem("token"),
    },
  });
  return data; // trae todos los datos de los usuarios
};

export async function createUser(user) {
  const response = await api.post("/auth/signup", user, {
    headers: {
      "Authorization": localStorage.getItem("token"),
    },
  });
  return response;
}

export async function updateUser(user) {
  console.log(user)
 
  const response  = await api.put(`/usuario/${user.id}`,{//ruta del backend dinamica y pasamos el resto de datos como objeto json
    
      nombre: user.firstName,
      apellido: user.lastName,
      direccion: user.address,
      email: user.email,
      password: user.password,
      rol: user.role,
    
  },
  {
    headers: {
      Authorization: localStorage.getItem("token"), 
    },
  });

  return response
}

export async function deleteUser(id) {
  const response = await api.delete(`/usuario/${id}`, 
  {
    headers: {
      "Authorization": localStorage.token,//tambien se puede llamar asi
    },
  });
  return response;
}

export async function updatePassword(password) {
  console.log("cambiando contraseña")
  const response = await api.put("/usuario/updatePassword",password , {
    headers: {
      "Authorization": localStorage.getItem("token"),
    },
  });
  return response;
}