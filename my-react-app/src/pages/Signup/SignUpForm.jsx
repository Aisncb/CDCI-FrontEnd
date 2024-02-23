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
import './SignUpForm.css';
import { signup } from "../../services/signup";
import sideImg from '../../assets/carousel/carousel4.webp';
import Logo from "../../components/Logo/Logo";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [firstNameMsg, setFirstNameMsg] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
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

  const handleNavigate = () => {
    navigate("/dashboard/listmybookings");
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
    if (firstName === '') {
      setFirstNameMsg('Error. +Info: El campo «Nombre» es de obligada cumplimentación.');
    } else {
      // Resetting state variable to make the message disappear in case the user keys in a valid input:
      setFirstNameMsg('');
      // Checking whether the email has the proper format:
      if (!validateEmail(email)) {
        setEmailMsg('Error. +Info: El campo «Correo electrónico» no cumple el formato solicitado (user@email.com).');
      } else {
        // Resetting state variable to make the message disappear in case the user keys in a valid input:
        setEmailMsg('');
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
              const { data } = await signup({ firstName, lastName, address, email, password });
              localStorage.setItem('token', data.token);
              localStorage.setItem('role', data.user.role);
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

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        raised={true}
        sx={{ backgroundColor: '#4E7FFF', height: '100vh', width: '50vw' }}
      >

        <Logo />
        <CardHeader title="Registro de usuario" sx={{ color: 'white', textAlign: 'center' }}></CardHeader>
        <CardContent>
          <TextField
            className="textfield"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            label="Nombre"
            margin="dense"
            required
            fullWidth={true}
            // Using the InputLabelProps property to modify the appearance of the input label:
            InputLabelProps={{ style: { color: 'black', fontWeight: 'bolder', fontSize: 20 } }}
            variant="filled"
          ></TextField>

          {firstNameMsg.includes('Error') && <Alert severity="error">{firstNameMsg}</Alert>}

          <TextField
            className="textfield"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            label="Apellidos"
            margin="dense"
            fullWidth={true}
            InputLabelProps={{ style: { color: 'black', fontWeight: 'bolder', fontSize: 20 } }}
            variant="filled"
          ></TextField>

          <TextField
            className="textfield"
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            label="Dirección"
            margin="dense"
            fullWidth={true}
            InputLabelProps={{ style: { color: 'black', fontWeight: 'bolder', fontSize: 20 } }}
            variant="filled"
          ></TextField>

          <TextField
            className="textfield"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            label="Correo electrónico"
            margin="dense"
            required
            fullWidth={true}
            InputLabelProps={{ style: { color: 'black', fontWeight: 'bolder', fontSize: 20 } }}
            placeholder="El correo electrónico ha de cumplir el siguiente formato de ejemplo: user@email.com"
            variant="filled"
          ></TextField>

          {emailMsg.includes('Error') && <Alert severity="error">{emailMsg}</Alert>}

          <TextField
            className="textfield"
            onChange={(e) => setPassword(e.target.value)}
            type={passwordIsVisible ? "text" : "password"}
            label="Contraseña"
            margin="dense"
            required
            placeholder="Ocho caracteres, incluyendo una letra y un número (caracteres especiales, mayúsculas y minúsculas, admitidos)"
            fullWidth={true}
            InputLabelProps={{ style: { color: 'black', fontWeight: 'bolder', fontSize: 20 } }}
            variant="filled"
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
            InputLabelProps={{ style: { color: 'black', fontWeight: 'bolder', fontSize: 20 } }}
            variant="filled"
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
        <CardContent>

          <Typography
            variant="body1"
            color="white"
            fontSize={20}
            display="flex"
            justifyContent="center"
          >
            Si ya está registrado, haga clic&nbsp;<Link className="link" to={`/login`}>aquí.</Link>
          </Typography>
        </CardContent>

        {inputError && <Alert severity="error">Error. +Info: {errorMsg.response.data.msg}</Alert>}
        {userRegistered && <Alert severity="success">Formulario cumplimentado correctamente.</Alert>}

        {userRegistered && <Dialog
          open={userRegistered}
          onClose={handleNavigate}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Registro de usuario"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Usuario correctamente registrado.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleNavigate}>Acceder</Button>
          </DialogActions>
        </Dialog>}
      </Card>

      <Box component={'img'} src={sideImg} sx={{ height: '100vh', width: '50vw', objectFit: 'cover' }} />

    </Box>


  );
}

export default SignUpForm;
