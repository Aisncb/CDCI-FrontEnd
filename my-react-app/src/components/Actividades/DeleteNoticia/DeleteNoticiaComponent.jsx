import "./DeleteNoticiaComponent.css";
import { useEffect, useState } from "react";
import { deleteNoticia, getAllNoticias } from "../../../services/noticias.js";
import { Button } from "@mui/material";

export default function DeleteNoticiaComponent() {

  const [noticiaSelected, setNoticiaSelected] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [noticias, setNoticias] = useState([]);

  
  const handleSelectChange = (e) => {
    setNoticiaSelected(e.target.value);
  };
  
  async function removeNoticia() {
    const id = parseInt(noticiaSelected);
    await deleteNoticia(id);
    setRefresh(!refresh);
  }
  
  const handleClick = async (e) => {
    e.preventDefault();
    removeNoticia();
  };
  


    async function getNoticias(){
      const data = await getAllNoticias();
      setNoticias(data);
    }
  
  
    useEffect(() => {
      getNoticias();
    },[refresh]);



    const listNoticias = noticias && noticias.map((noticia) => {
      return (
        <>
            <option value={noticia.id} key={noticia.id} onClick={(e) => handleSelectChange(e)}>
            {noticia.id} - {noticia.nombre} 
            </option>
          </>
        );
      });
    
  return (
    <div className="formularioDeleteUser">
      <form className="containerForm" action="#">
        <div className="containerTitulo">
        <label className="titulo">
          Eliminar Noticia
        </label>
        </div>
        <select className="seleccion" name="lenguajes" id="lang" size="4">
          {listNoticias}
        </select>
        <Button className="boton" type="submit" value="Eliminar" variant="contained" sx={{backgroundColor: 'black', marginTop: 7}}onClick={handleClick}>Eliminar</Button>
      </form>
    </div>
  );
}
