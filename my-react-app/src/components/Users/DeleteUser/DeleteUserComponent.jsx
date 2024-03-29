import "./DeleteUserComponent.css";
import { useEffect, useState } from "react";
import { deleteUser, getListUsers } from "../../../services/user";
import { Button } from "@mui/material";

export default function DeleteUserComponent() {

  const [userSelected, setUserSelected] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [users, setUsers] = useState([]);

  
  const handleSelectChange = (e) => {
    setUserSelected(e.target.value);
  };
  
  async function removeUser() {
    const id = parseInt(userSelected);
    await deleteUser(id);
    setRefresh(!refresh);
  }
  
  const handleClick = async (e) => {
    e.preventDefault();
    removeUser();
  };
  
  //user.users && user.users.map((user) =>{  comprueba que dentro de la varible user tenga users, en la primera vez no los carga porque es un array vacio en el useState
  //si esto existe o tiene ese campo, va a traer los users.
  //user.users?.map((user) =>{ es lo mismo
  const listUser = users && users.map((user) => {
      return (
        <>
            <option value={user.id} key={user.id} onClick={(e) => handleSelectChange(e)}>
            {user.id} - {user.nombre}  {user.apellido} - {user.email} - {user.dni}
            </option>
          </>
        );
      });
/*       console.log(result); */
    
    
    async function getUsers(){
      const data = await getListUsers();
      setUsers(data.usuarios);
    }
  
  
    useEffect(() => {
      getUsers();
    },[refresh]);
    
  return (
    <div className="formularioDeleteUser">
      <form className="containerForm" action="#">
        <div className="containerTitulo">
        <label className="titulo">
          Eliminar Usuario
        </label>
        </div>
        <select className="seleccion" name="lenguajes" id="lang" size="4">
          {listUser}
        </select>
        <Button className="boton" type="submit" value="Eliminar" variant="contained" sx={{backgroundColor: 'black', marginTop: 7}}onClick={handleClick}>Eliminar</Button>
       {/*  <input className="boton" type="submit" value="Eliminar" onClick={handleClick} /> */}
      </form>
    </div>
  );
}
