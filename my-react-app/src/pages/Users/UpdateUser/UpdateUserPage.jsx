// CreateUserPage.jsx
import UpdateUserComponent from '../../../components/Users/UpdateUser/UpdateUserComponent'
import { useEffect, useState } from "react";
import { getListUsers } from "../../../services/user";

function UpdateUserPage() {

  const [user, setUSer] = useState([]);

  async function getUsers() {
    const data = await getListUsers();
    setUSer(data.usuarios); //data.users accede a users que es el array de usuarios y lo almacena en user(singular) variable de estado
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UpdateUserComponent
      user={user}
    />
  );
}

export default UpdateUserPage;
