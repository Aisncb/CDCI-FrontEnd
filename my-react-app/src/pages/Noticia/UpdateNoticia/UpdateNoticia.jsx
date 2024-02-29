// CreateUserPage.jsx
import UpdateNoticiaComponent from '../../../components/Noticias/UpdateNoticias/UpdateNoticiaComponent.jsx'
import { useEffect, useState } from "react";
import { getAllNoticias } from "../../../services/noticias";

function UpdateUserPage() {

  const [noticia, setNoticia] = useState([]);
  const [refres, setRefres] = useState(false)

  function handleRefres() {
    setRefres(!refres)
  }

  async function getNoticias() {
    const data = await getAllNoticias();
    setNoticia(data); //data.users accede a users que es el array de usuarios y lo almacena en user(singular) variable de estado
  }

  useEffect(() => {
    getNoticias();
  }, [refres]);

  return (
    <UpdateNoticiaComponent
      noticias={noticia}
      functRefres={handleRefres}
    />
  );
}

export default UpdateUserPage;
