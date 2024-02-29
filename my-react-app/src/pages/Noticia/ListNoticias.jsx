
import { useEffect, useState } from "react";
import ListNoticiasComponent from "../../../src/components/Noticias/ListNoticias/ListNoticiasComponent.jsx";
import { getAllNoticias } from "../../../src/services/noticias.js";

function ListNoticiasPage() {
  const [noticia, setNoticia] = useState([]);

  async function getNoticias() {
    const data = await getAllNoticias();
    setNoticia(data); //data.users accede a users que es el array de usuarios y lo almacena en user(singular) variable de estado
  }

  useEffect(() => {
    getNoticias();
  }, []);

  return (
    <>
      <ListNoticiasComponent noticias={noticia} />
    </>
  );
}

export default ListNoticiasPage;