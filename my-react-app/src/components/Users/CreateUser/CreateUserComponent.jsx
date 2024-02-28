import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import './CreateUserComponent.css';
import { signup } from "../../../services/signup.js";


function CreateUserComponent() {
  const [nombre, setnombre] = useState("");
  const [nombreMsg, setnombreMsg] = useState("");
  const [apellido, setapellido] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccion, setdireccion] = useState("");
  const [telefono, settelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [dni, setDni] = useState("");
  const [dniMsg, setDniMsg] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [retypedPasswordMsg, setRetypedPasswordMsg] = useState("");
  const [inputError, setInputError] = useState(false);
  const [errorMsg, setErrorMsg] = useState({});
  const [userRegistered, setUserRegistered] = useState(false);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [passwordRetypedIsVisible, setPasswordRetypedIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleClean = () => {
    setnombre("")
  }

  function validateEmail(userEmail) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(userEmail);
  }

  function validatePassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\S]{8,}$/;
    return regex.test(password);
  }

  function validateDni(dni) {
    const regex = /^[0-9]{8}[A-Za-z]$/;
    return regex.test(dni);
  }

  async function handleClick(e) {
    e.preventDefault();

    // Checking if first name field has been filled (it is required):
    if (nombre === '') {
      setnombreMsg('Error. +Info: El campo «Nombre» es de obligada cumplimentación.');
    } else {
      // Resetting state variable to make the message disappear in case the user keys in a valid input:
      setnombreMsg('');
      // Checking whether the email has the proper format:
      if (!validateEmail(email)) {
        setEmailMsg('Error. +Info: El campo «Correo electrónico» no cumple el formato solicitado (user@email.com).');
      } else {
        // Resetting state variable to make the message disappear in case the user keys in a valid input:
        setEmailMsg('');
        // Checking whether the password has the proper format:
        if (!validateDni(dni)) {
          setDniMsg('Error. +Info: El campo «Dni» no cumple el formato solicitado (12345678x).');
        } else {
          // Resetting state variable to make the message disappear in case the user keys in a valid input:
          setDniMsg('');
          // Checking whether the password has the proper format:
        if (!validatePassword(password)) {
          if (retypedPasswordMsg.length > 0) {
            // Resetting state variable to make the message disappear:
            setRetypedPasswordMsg('');
          }

          setPasswordMsg('Error. +Info: El campo «Contraseña» no cumple el formato solicitado (ocho caracteres, incluyendo una letra y un número).');

        } else {
          // Resetting state variable to make the message disappear in case the user keys in a valid input:
          setPasswordMsg('');

          // Checking if both passwords match:
          if (retypedPassword !== password) {
            setRetypedPasswordMsg('Error. +Info: Ambas contraseñas han de coincidir.');
          } else {
            // Data will only be sent after having validated all the required fields pointed out above: 
            try {
              const signupResponse = await signup({ nombre, apellido, fechaNacimiento, direccion, telefono, email, dni, password });
              setUserRegistered(true);
              // Setting inputError variable to false in order to make the Alert message disappear (in case it is being shown
              // on the screen)
              setInputError(false);
            } catch (error) {
              setInputError(true);
              setErrorMsg(error);
            }
            if (retypedPassword !== '') {
              if (retypedPassword.length > 7) {
                setRetypedPasswordMsg('Ambas contraseñas coinciden y cumplen el requisito establecido.');



              } else {
                setRetypedPasswordMsg('Error. +Info: Aunque las contraseñas coinciden, estas no cumplen el requisito establecido (ocho caracteres, incluyendo una letra y un número).');
              }
            } else {
              setRetypedPasswordMsg('Error. +Info: Los campos de contraseña son de obligada cumplimentación.')
            }
          }
        }

      }
    }
    }
  }

  return (
    <div className="containerFragment">
    <Box sx={{ display: 'flex', justifyContent: 'center'}}>
      <Card
        raised={true}
        sx={{ backgroundColor: '#DEE7FF', height: '100%', width: '50vw' }}
      >

          <Typography
            gutterBottom
            variant="h5"
            component="form"
            className="tituloForm"
          >
            Crear Usuario
          </Typography>
        <CardContent>
          <TextField
            className="containerTextField"
            onChange={(e) => setnombre(e.target.value)}
            type="text"
            label="Nombre"
            margin="dense"
            required
            fullWidth={true}
            // Using the InputLabelProps property to modify the appearance of the input label:
            InputLabelProps={{ style: { fontWeight:"bold"} }}
    
          ></TextField>

          {nombreMsg.includes('Error') && <Alert severity="error">{nombreMsg}</Alert>}

          <TextField
            className="textfield"
            onChange={(e) => setapellido(e.target.value)}
            type="text"
            label="Apellidos"
            margin="dense"
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
          ></TextField>

          <TextField
            className="textfield"
            onChange={(e) => setFechaNacimiento(e.target.value)}
            type="date"
            label="Fecha de Nacimiento"
            margin="dense"
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
        
          ></TextField>

          <TextField
            className="textfield"
            onChange={(e) => setdireccion(e.target.value)}
            type="text"
            label="Dirección"
            margin="dense"
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
          ></TextField>

          <TextField
            className="textfield"
            onChange={(e) => settelefono(e.target.value)}
            type="text"
            label="Telefono"
            margin="dense"
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
          ></TextField>

          <TextField
            className="textfield"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            label="Correo electrónico"
            margin="dense"
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
            placeholder="El correo electrónico ha de cumplir el siguiente formato de ejemplo: user@email.com"

          ></TextField>

          {emailMsg.includes('Error') && <Alert severity="error">{emailMsg}</Alert>}

          <TextField
            className="textfield"
            onChange={(e) => setDni(e.target.value)}
            type="text"
            label="DNI"
            margin="dense"
            required
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
            placeholder="El DNI ha de cumplir el siguiente formato de ejemplo: 12345678x"
          
          ></TextField>

          {dniMsg.includes('Error') && <Alert severity="error">{dniMsg}</Alert>}

          <TextField
            className="textfield"
            onChange={(e) => setPassword(e.target.value)}
            type={passwordIsVisible ? "text" : "password"}
            label="Contraseña"
            margin="dense"
            required
            placeholder="Ocho caracteres, incluyendo una letra y un número (caracteres especiales, mayúsculas y minúsculas, admitidos)"
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
                    {passwordIsVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>

          {passwordMsg.includes('Error') && <Alert severity="error">{passwordMsg}</Alert>}

          <TextField
            className="textfield"
            onChange={(e) => setRetypedPassword(e.target.value)}
            // If the state variable «passwordRetypedIsVisible» is set to true, the property
            // «type» will be set to text, which means that the password will be shown on the 
            // screen (decodified), whereas when it is set to password, characters will be
            // codified (black dots):
            type={passwordRetypedIsVisible ? "text" : "password"}
            label="Repita contraseña"
            margin="dense"
            required
            placeholder="La contraseña ha de coincidir con la establecida en el campo anterior."
            fullWidth={true}
            InputLabelProps={{ style: { fontWeight:"bold"} }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setPasswordRetypedIsVisible(!passwordRetypedIsVisible)}>
                    {passwordRetypedIsVisible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>

          {retypedPasswordMsg !== '' && (retypedPasswordMsg.includes('Error') ? <Alert severity="error">{retypedPasswordMsg}</Alert> : <Alert severity="success">{retypedPasswordMsg}</Alert>)}

        </CardContent>

        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleClick}
            size="large"
            variant="contained"
            sx={{ backgroundColor: 'black' }}
          >
            Acceder
          </Button>
        </CardActions>
        

        {inputError && <Alert severity="error">Error. +Info: {errorMsg.response.data.msg}</Alert>}
        {userRegistered && <Alert severity="success">Formulario cumplimentado correctamente.</Alert>}

        
      </Card>

    </Box>
    </div>


  );
}

export default CreateUserComponent;
