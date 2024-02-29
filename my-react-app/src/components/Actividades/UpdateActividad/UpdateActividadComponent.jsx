// CreateUserComponent.jsx
import "./UpdateActividadComponent.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField, Select,MenuItem,InputLabel } from "@mui/material";
import React, { useState } from "react";
import { updateActividad } from "../../../services/actividad.js";

function UpdateUserComponent(props) {
  const [actividadSelect, setActividadSelect] = useState("")
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [plazas, setPlazas] = useState("");
  const [precio, setPrecio] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  async function updateActividades() {
    try {
      setError("");
      setMensaje("");
      const updateActividadResponse = await updateActividad({
        titulo: titulo,
        descripcion: descripcion,
        fecha: fecha.substr(0,10),
        plazas: plazas,
        precio: precio,
        id:actividadSelect.id,
      });
      setMensaje(updateActividadResponse.data);
      props.functRefres()
      setTitulo("")
      setDescripcion("")
      setFecha("")
      setPlazas("")
      setPrecio("")
      setActividadSelect("")

    } catch (error) {
      setError(error.response.data);
    }
  }

  const handleTitulo = (event) => {
    setTitulo(event.target.value);
  };

  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
  };

  const handleFecha = (event) => {
    setFecha(event.target.value);
  };

  const handlePlazas = (event) => {
    setPlazas(event.target.value);
  };

  const handlePrecio = (event) => {
    setPrecio(event.target.value);
  };





    const handleActividadSelect = (event) => {
      setActividadSelect(event.target.value);
      setTitulo(event.target.value.titulo)
      setDescripcion(event.target.value.descripcion) 
      setFecha(event.target.value.fecha) 
      setPlazas(event.target.value.plazas) 
      setPrecio(event.target.value.precio) 
    };
  
  


  const actividadesList = props.actividades
    .map((actividad) => (
      <MenuItem key={actividad} value={actividad}>
        {actividad.id} | {actividad.titulo}
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
            Actualización de Actividades
          </Typography>

          <CardContent className="containerCard">
          <InputLabel id="demo-simple-select-label" sx={{fontWeight:"bold"}}>
            Selecciona un actividad
          </InputLabel>
          <Select
            sx={{background:"white", marginBottom: "20px"}}
            className="containerTextField"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={actividadSelect}
            label="Referencia Actividad"
            onChange={handleActividadSelect}
          >
            {actividadesList}
          </Select>
            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={titulo}
              sx={{ marginBottom: "20px" }}
              component="form"       
              id="outlined-required-1"
              label="Titulo"
              placeholder="Titulo"
              onChange={handleTitulo}
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

            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={fecha.substr(0,10)}
              sx={{ marginBottom: "20px" }}
              component="form"       
              id="outlined-required-1"
              label="Fecha"
              placeholder="Fecha"
              onChange={handleFecha}
            />

            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={plazas}
              sx={{ marginBottom: "20px" }}
              component="form"       
              id="outlined-required-1"
              label="Plazas"
              placeholder="Plazas"
              onChange={handlePlazas}
            />

            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={precio}
              sx={{ marginBottom: "20px" }}
              component="form"       
              id="outlined-required-1"
              label="Precio"
              placeholder="Precio"
              onChange={handlePrecio}
            />
                       
          </CardContent>

          <CardActions className="containerButton" >
            <Button
            size="large" variant="contained" sx={{background:"black"}}
            type="submit" onClick={() => updateActividades()}>
              Actualizar
            </Button>
          </CardActions>
        </React.Fragment>
      </form>
    </div>
  );
}

export default UpdateUserComponent
