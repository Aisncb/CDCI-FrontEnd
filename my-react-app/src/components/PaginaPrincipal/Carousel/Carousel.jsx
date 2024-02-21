import "./Carousel.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function CarrouselComponent() {
  var items = [
    {
      name: "Club Deportivo Senderismo Caminando con Ingenio",
      description:
        "Únete a nuestro club y disfruta de la naturaleza",
      img: "./src/assets/carousel/carousel1.webp",
    },
    {
      name: "Descubriendo Senderos",
      description:
        "Club deportivo creado a finales de 2020, nuestra principal actividad es el Senderismo y el respeto al medio ambiente, con cerca de 300 socios y con mas de 200 licencias federativas en activo.",
      img: "./src/assets/carousel/carousel2.webp",
    },
    {
      name: "Licencia/seguro federativo ",
      description:
        "Desde nuestro club te facilitamos la gestión de la licencia/seguro federativo con la federación Canaria de Montaña «FECAMON«.",
      img: "./src/assets/carousel/carousel3.webp",
    },
    {
      name: "19 deportes asegurados",
      description:
        "xcursionismo, campamentos, marchas, senderismo, montaña, marcha nórdica, BTT, rocódromo, canicross, alpinismo, escalada, barrancos, carreras por montaña, espeleología, raquetas, esquí, snow, vías ferratas y splitboard.",
      img: "./src/assets/carousel/carousel4.webp",
    },
    {
      name: "Disfrutas de los mejores paisajes",
      description:
        "Con el senderismo discubriras lugares unicos que no podrias disfrutar de otra forma",
      img: "./src/assets/carousel/carousel5.webp",
    }
  ];
  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );

  function Item(props) {
    return (
      <div className="container-background-carousel">
        <Paper className="container-carousel">
          <h2 className="h2header">{props.item.name}</h2>
          <p>{props.item.description}</p>
          <div className="container-image">
            <img className="image" src={props.item.img} alt="img" />
          </div>
        </Paper>
      </div>
    );
  }
}

export default CarrouselComponent;
