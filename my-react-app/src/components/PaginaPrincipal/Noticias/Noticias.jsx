import React from "react";
import "./Noticias.css";

function Noticias({noticias}) {

  console.log(noticias)
  return (
    <>
      <div className="cointainer-Noticias">

        <h1 className="titulo-Noticias">Noticias</h1>
        

        {noticias.map((noticia)=>{return(
          <article className="articulo">
          <h2>{noticia.nombre}</h2>
          <p>{noticia.descripcion}</p>
        </article>
        )})}

        


      </div>
    </>
  );
}

export default Noticias;
