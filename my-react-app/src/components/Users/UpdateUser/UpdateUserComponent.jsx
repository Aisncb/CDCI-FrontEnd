// CreateUserComponent.jsx
import "./UpdateUserComponent.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField, Select,MenuItem } from "@mui/material";
import React, { useState } from "react";

export default function UpdateUserComponent({user }) {
  const [errorId, setErrorId] = useState(false),
  [userSelect, setUserSelect] = useState(""),
    [errorFirstName, setErrorFirstName] = useState(false),
    [errorLastName, setErrorLastName] = useState(false),
    [errorAddress, setErrorAddress] = useState(false),
    [errorEmail, setErrorEmail] = useState(false),
    [errorPassword, setErrorPassword] = useState(false),
    [errorRole, setErrorRole] = useState(false)



    const handleUserSelect = (event) => {
      setBookingSelect(event.target.value);
      setUserId(event.target.value.userId)
      setBookingDate(event.target.value.bookingDate)
      setBookingTime(event.target.value.bookingTime)
      setClassroomId(event.target.value.classroomId)
      
    };
  

  function chekData(e) {
    e.preventDefault();
           if (user.id.length < 1) {
      setErrorId(true);
    
    } else {
      handleSubmit(e);
    }
  }

  const usersList = user
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
          <Select
          sx={{background:"white"}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            
            label="Referencia Reserva"
            
          >
            {usersList}
          </Select>
            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={user.firstName}
              sx={{ marginBottom: "20px" }}
              component="form"
              
              id="outlined-required-1"
              label="Nombre"
              placeholder="Nombre"
              error={errorFirstName}
              helperText={errorFirstName ? "El Nombre es obligatorio" : ""}
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
                setErrorFirstName(false)
              }}
            />
            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={user.lastName}
              sx={{ marginBottom: "20px" }}
              component="form"
              
              id="outlined-required-2"
              label="Apellidos"
              placeholder="Apellidos"
              error={errorLastName}
              helperText={errorLastName ? "El Apellido es obligatorio" : ""}
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
                setErrorLastName(false)
              }}
            />
            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={user.address}
              sx={{ marginBottom: "20px" }}
              component="form"
              
              id="outlined-required-3"
              label="Direccion"
              placeholder="Direccion"
              error={errorAddress}
              helperText={errorAddress ? "La Dirección es obligatoria" : ""}
              onChange={(e) => {
                setUser({ ...user, address: e.target.value });
                setErrorAddress(false)
              }}
            />
            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={user.email}
              sx={{ marginBottom: "20px" }}
              component="form"
              
              id="outlined-required-4"
              label="Email"
              placeholder="Email"
              error={errorEmail}
              helperText={errorEmail ? "El Email es obligatorio" : ""}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
                setErrorEmail(false)
              }}
            />
            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={user.password}
              type="password"
              sx={{ marginBottom: "20px" }}
              component="form"
              
              id="outlined-required-5"
              label="Password"
              placeholder="Password"
              error={errorPassword}
              helperText={errorPassword ? "La contraseña es obligatoria" : ""}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
                setErrorPassword(false)
              }}
            />
            <TextField
              className="containerTextField"
              InputLabelProps={{ style: { fontWeight:"bold"} }}
              value={user.role}
              sx={{ marginBottom: "20px" }}
              component="form"
              
              id="outlined-required-6"
              label="role"
              placeholder="role"
              error={errorRole}
              helperText={errorRole ? "El Role es obligatorio" : ""}
              onChange={(e) => {
                setUser({ ...user, role: e.target.value });
                setErrorRole(false)
              }}
            />
          </CardContent>

          <CardActions className="containerButton" >
            <Button
            size="large" variant="contained" sx={{background:"black"}}
            type="submit" onClick={chekData}>
              Actualizar
            </Button>
          </CardActions>
        </React.Fragment>
      </form>
    </div>
  );
}
