import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { createActividad } from "../../../services/actividad.js";
import PropTypes from 'prop-types';
import './CreateActividadComponent.css';

function AddActividadComponent() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [plazas, setPlazas] = useState("");
  const [precio, setPrecio] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  // const role = localStorage.getItem("role");

  async function anadirActividad() {
    try {
      setMensaje("");
      setError("");
      const crearActividadResponse = await createActividad({
        titulo: titulo,
        descripcion: descripcion,
        fecha: fecha,
        plazas: plazas,
        precio: precio,
      });
      setMensaje(crearActividadResponse.data.message);
      setTitulo("")
      setDescripcion("")
      setFecha("")
      setPlazas("")
      setPrecio("")
    } catch (error) {
      setError(error.response.data);
    }
  }



  return (
    <div className="containerFragment">
    <Card  sx={{ width: "500px", background: "#DEE7FF", marginTop:"50%" }}>
      <CardHeader title="Crear Actividad" sx={{textAlign:"center"}} />
      <Divider/>
      <CardContent>
          <TextField
            className="containerTextField"
            onChange={(e) => setTitulo(e.target.value)}
            type="text"
            label="Titulo"
            margin="dense"
            value={titulo}
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
          ></TextField>

          <TextField
            className="containerTextField"
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            label="Descripcion"
            margin="dense"
            value={descripcion}
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
          ></TextField>

          <TextField
            className="containerTextField"
            onChange={(e) => setFecha(e.target.value)}
            type="date"
            label="Fecha"
            margin="dense"
            value={fecha}
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
          ></TextField>

          <TextField
            className="containerTextField"
            onChange={(e) => setPlazas(e.target.value)}
            type="text"
            label="Numero de Plazas"
            margin="dense"
            value={plazas}
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
          ></TextField>

          <TextField
            className="containerTextField"
            onChange={(e) => setPrecio(e.target.value)}
            type="text"
            label="Precio"
            margin="dense"
            value={precio}
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
          ></TextField>
      
        
        
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => anadirActividad()} size="large" variant="contained" sx={{background:"black"}}>Crear Actividad</Button>
      </CardActions>

      {mensaje ? (
        <Alert severity="success">{mensaje}</Alert>
      ) : (
        error && <Alert severity="error">{error}</Alert>
      )}
    </Card>
    </div>
  );
}




export default AddActividadComponent;
