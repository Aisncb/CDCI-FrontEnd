
import { useEffect, useState } from "react";
import ListActividadesComponent from "../../components/Actividades/ListActividades/ListActividadesComponent.jsx";
import { getAllActividades } from "../../services/actividad.js";

function ListActividadesPage() {
  const [actividad, setActividad] = useState([]);

  async function getActividades() {
    const data = await getAllActividades();
    setActividad(data); //data.users accede a users que es el array de usuarios y lo almacena en user(singular) variable de estado
  }

  useEffect(() => {
    getActividades();
  }, []);

  return (
    <>
      <ListActividadesComponent actividades={actividad} />
    </>
  );
}

export default ListActividadesPage;