// CreateUserComponent.jsx
import "./UpdateNoticiaComponent.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField, Select,MenuItem,InputLabel } from "@mui/material";
import React, { useState } from "react";
import { updateNoticia } from "../../../services/noticias.js";

export default function UpdateUserComponent(props) {
  const [errorId, setErrorId] = useState(false)
  const [noticiaSelect, setNoticiaSelect] = useState("")
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");


  async function updateUsers() {
    try {
      setError("");
      setMensaje("");
      const updateNoticiaResponse = await updateNoticia({
        nombre: nombre,
        descripcion: descripcion,
        id:noticiaSelect.id,
      });
      setMensaje(updateNoticiaResponse.data);
      props.functRefres()
      setNombre("")
      setDescripcion("")
    } catch (error) {
      setError(error.response.data);
    }
  }

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
  };





    const handleNoticiaSelect = (event) => {
      setNoticiaSelect(event.target.value);
      setNombre(event.target.value.nombre)
      setDescripcion(event.target.value.descripcion) 
    };
  
  


  const usersList = props.noticias
    .map((noticia) => (
      <MenuItem key={noticia} value={noticia}>
        {noticia.id} | {noticia.nombre}
      </MenuItem>
    ))

  return (
    <div className="containerFragment">
      <form className="containerFormUpdateUser">
        <React.Fragment>
          <Typography
            gutterBottom
            variant="h5"
            component="form"
            className="tituloForm"
          >
            Actualización de Noticias
          </Typography>

          <CardContent className="containerCard">
          <InputLabel id="demo-simple-select-label" sx={{fontWeight:"bold"}}>
            Selecciona un noticia
          </InputLabel>
          <Select
            sx={{background:"white", marginBottom: "20px"}}
            className="containerTextField"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={noticiaSelect}
            label="Referencia Reserva"
            onChange={handleNoticiaSelect}
          >
            {usersList}
          </Select>
            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={nombre}
              sx={{ marginBottom: "20px" }}
              component="form"       
              id="outlined-required-1"
              label="Titulo"
              placeholder="Titulo"
              onChange={handleNombre}
            />

            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={descripcion}
              sx={{ marginBottom: "20px" }}
              component="form"       
              id="outlined-required-1"
              label="Cuerpo"
              placeholder="Cuerpo"
              onChange={handleDescripcion}
            />
                       
          </CardContent>

          <CardActions className="containerButton" >
            <Button
            size="large" variant="contained" sx={{background:"black"}}
            type="submit" onClick={() => updateUsers()}>
              Actualizar
            </Button>
          </CardActions>
        </React.Fragment>
      </form>
    </div>
  );
}
