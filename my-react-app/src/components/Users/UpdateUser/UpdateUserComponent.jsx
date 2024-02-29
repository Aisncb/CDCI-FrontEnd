// CreateUserComponent.jsx
import "./UpdateUserComponent.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField, Select,MenuItem,InputLabel } from "@mui/material";
import React, { useState } from "react";
import { updateUser } from "../../../services/user.js";

export default function UpdateUserComponent(props) {
  const [errorId, setErrorId] = useState(false)
  const [userSelect, setUserSelect] = useState("")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");


  async function updateUsers() {
    try {
      setError("");
      setMensaje("");
      const updateUserResponse = await updateUser({
        nombre: firstName,
        apellido: lastName,
        fechaNacimiento : birthday,
        id:userSelect.id,
        direccion:direccion,
        telefono:telefono
      });
      setMensaje(updateUserResponse.data);
      props.functRefres()
      setUserSelect("")
      setFirstName("")
      setLastName("")
      setBirthday("")
      setDireccion("")
      setTelefono("")
    } catch (error) {
      setError(error.response.data);
    }
  }

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleBirtday = (event) => {
    setBirthday(event.target.value);
  };

  const handleDireccion = (event) => {
    setDireccion(event.target.value);
  };

  const handleDTelefono = (event) => {
    setTelefono(event.target.value);
  };





    const handleUserSelect = (event) => {
      setUserSelect(event.target.value);
      setFirstName(event.target.value.nombre)
      setLastName(event.target.value.apellido)
      setBirthday(event.target.value.fechaNacimiento)
      setDireccion(event.target.value.direccion)
      setTelefono(event.target.value.telefono)
      
    };
  
  


  const usersList = props.user
    .map((user) => (
      <MenuItem key={user} value={user}>
        {user.id} | DNI:{user.dni} | {user.email}
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
            Actualización de Usuario
          </Typography>

          <CardContent className="containerCard">
          <InputLabel id="demo-simple-select-label" sx={{fontWeight:"bold"}}>
            Selecciona un usuario
          </InputLabel>
          <Select
            sx={{background:"white", marginBottom: "20px"}}
            className="containerTextField"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userSelect}
            label="Referencia Reserva"
            onChange={handleUserSelect}
          >
            {usersList}
          </Select>
            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={firstName}
              sx={{ marginBottom: "20px" }}
              component="form"       
              id="outlined-required-1"
              label="Nombre"
              placeholder="Nombre"
              onChange={handleFirstName}
            />

            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={lastName}
              sx={{ marginBottom: "20px" }}
              component="form"       
              id="outlined-required-1"
              label="Apellido"
              placeholder="Nombre"
              onChange={handleLastName}
            />
            
            <TextField
            type="date"
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={birthday.substr(0,10)}
              sx={{ marginBottom: "20px" }}
              component="form"       
              id="outlined-required-1"
              label="Fecha Nacimiento"
              placeholder="Fecha Nacimiento"
              onChange={handleBirtday}
            />

            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={direccion}
              sx={{ marginBottom: "20px" }}
              component="form"       
              id="outlined-required-1"
              label="Direccion"
              placeholder="Direccion"
              onChange={handleDireccion}
            />

            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={telefono}
              sx={{ marginBottom: "20px" }}
              component="form"       
              id="outlined-required-1"
              label="Telefono"
              placeholder="Telefono"
              onChange={handleDTelefono}
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
