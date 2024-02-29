// CreateUserPage.jsx
import UpdateActividadComponent from '../../../components/Actividades/UpdateActividad/UpdateActividadComponent.jsx'
import { useEffect, useState } from "react";
import { getAllActividades } from "../../../services/actividad.js";

function UpdateActividadPage() {

  const [actividad, setActividad] = useState([]);
  const [refres, setRefres] = useState(false)

  function handleRefres() {
    setRefres(!refres)
  }

  async function getActividades() {
    const data = await getAllActividades();
    setActividad(data); //data.users accede a users que es el array de usuarios y lo almacena en user(singular) variable de estado
  }

  useEffect(() => {
    getActividades();
  }, [refres]);

  return (
    <UpdateActividadComponent
      actividades={actividad}
      functRefres={handleRefres}
    />
  );
}

export default UpdateActividadPage;
