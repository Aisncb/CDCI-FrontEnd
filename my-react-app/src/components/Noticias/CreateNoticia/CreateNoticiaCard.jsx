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
import { createNoticia } from "../../../services/noticias.js";
import PropTypes from 'prop-types';
import '../CreateNoticia/CreateNoticiaCard.css';

function AddBookingCard({user,classroom}) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  // const role = localStorage.getItem("role");

  async function anadirNoticia() {
    try {
      setMensaje("");
      setError("");
      const crearNoticiaResponse = await createNoticia({
        nombre: nombre,
        descripcion: descripcion,
      });
      setMensaje(crearNoticiaResponse.data.message);
    } catch (error) {
      setError(error.response.data);
    }
  }



  return (
    <div className="containerFragment">
    <Card  sx={{ width: "500px", background: "#DEE7FF", marginTop:"50%" }}>
      <CardHeader title="Crear Noticia" sx={{textAlign:"center"}} />
      <Divider/>
      <CardContent>
          <TextField
            className="containerTextField"
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            label="Titulo"
            margin="dense"
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
          ></TextField>

          <TextField
            className="containerTextField"
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            label="Cuerpo"
            margin="dense"
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
          ></TextField>
      
        
        
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => anadirNoticia()} size="large" variant="contained" sx={{background:"black"}}>Crear Noticia</Button>
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

AddBookingCard.propTypes = {
  user: PropTypes.object,
  classroom:PropTypes.object
}


export default AddBookingCard;
