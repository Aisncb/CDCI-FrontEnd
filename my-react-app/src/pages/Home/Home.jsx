import Header from '../../components/PaginaPrincipal/Header/Header'
import CarrouselComponent from '../../components/PaginaPrincipal/Carousel/Carousel'
import Noticias from '../../components/PaginaPrincipal/Noticias/Noticias'
import Footer from '../../components/PaginaPrincipal/Footer/Footer'

import { useEffect, useState } from "react";
import { getAllNoticias } from "../../../src/services/noticias.js";



function Home() {

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
      <Header />
      <CarrouselComponent />
      <Noticias noticias={noticia} />
      <Footer />
    </>
  )
}

export default Home