import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login/Login";
import Root from "../layouts";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Signup/SignUp";
import NotFound from "../pages/NotFound/NotFound";
// import ListBookings from "../pages/Booking/ListBookings/ListBookings";
// import ListMyBookings from "../pages/Booking/ListMyBookings/ListMyBookings";
// import AddBooking from "../pages/Booking/AddBooking/AddBooking";
// import AddMyBooking from "../pages/Booking/AddMyBooking/AddMyBooking";
// import UpdateBooking from "../pages/Booking/UpdateBooking/UpdateBooking";
// import UpdateMyBooking from "../pages/Booking/UpdateMyBooking/UpdateMyBooking";
// import DeleteBooking from "../pages/Booking/DeleteBooking/DeleteBooking";
// import DeleteMyBooking from "../pages/Booking/DeleteMyBooking/DeleteMyBooking";
import Profile from "../pages/Users/Profile/Profile";
import ListUsersPage from "../pages/Users/ListUsers/ListUsersPage";
import CreateUserPage from "../pages/Users/CreateUser/CreateUserPage";
import UpdateUserPage from "../pages/Users/UpdateUser/UpdateUserPage";
import DeleteUserComponent from "../components/Users/DeleteUser/DeleteUserComponent";
import ListNoticia from "../pages/Noticia/ListNoticias";
import CreateNoticia from "../pages/Noticia/CreateNoticia.jsx";
import UpdateNoticia from "../pages/Noticia/UpdateNoticia/UpdateNoticia.jsx";
import DeleteNoticia from "../components/Noticias/DeleteNoticia/DeleteNoticiaComponent.jsx";
import ListActividad from "../pages/Actividad/ListActividades.jsx";
import CreateActividad from "../pages/Actividad/CreateActividad.jsx";
import UpdateActividad from "../pages/Actividad/UpdateActividad/UpdateActividad.jsx";
// import DeleteActividad from "../components/Actividads/DeleteActividad/DeleteActividadComponent.jsx";
// import ListClassrooms from "../pages/Classroom/ListClassrooms/ListClassrooms";
// import AddClassroom from "../pages/Classroom/AddClassroom/AddClassroom";
// import UpdateClassroom from "../pages/Classroom/UpdateClassroom/UpdateClassroom";
// import DeleteClassroom from "../pages/Classroom/DeleteClassroom/DeleteClassroom";
// import ListBuildings from "../pages/Building/ListBuildings/ListBuildings";
// import AddBuilding from "../pages/Building/AddBuilding/AddBuilding";
// import UpdateBuilding from "../pages/Building/UpdateBuilding/UpdateBuilding";
// import DeleteBuilding from "../pages/Building/DeleteBuilding/DeleteBuilding";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },{
    path: "/dashboard/",
    element: <Root />,
    loader: () => {
      if (!localStorage.getItem("token")) {
        return redirect("/"); //If the user isn't logged in, we redirect to the login page.
      } else {
        return null;
      }
    },
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />
      },
      {
        path: "/dashboard/listUsers",
        element: <ListUsersPage />,
      },
      {
        path: "/dashboard/createUser",
        element: <CreateUserPage />,
      },
      {
        path: "/dashboard/updateUser",
        element: <UpdateUserPage />,
      },
      {
        path: "/dashboard/deleteUser",
        element: <DeleteUserComponent />
      },
      {
        path: "/dashboard/listNoticia",
        element: <ListNoticia />,
      },
      {
        path: "/dashboard/createNoticia",
        element: <CreateNoticia />,
      },
      {
        path: "/dashboard/updateNoticia",
        element: <UpdateNoticia />,
      },
      {
        path: "/dashboard/deleteNoticia",
        element: <DeleteNoticia />
      },
      {
        path: "/dashboard/listActividades",
        element: <ListActividad />,
      },
      {
        path: "/dashboard/addActividad",
        element: <CreateActividad />,
      },
      {
        path: "/dashboard/updateActividad",
        element: <UpdateActividad />,
      },
      // {
      //   path: "/dashboard/deleteActividad",
      //   element: <DeleteActividad />
      // },
    ]
    
  },
    
  
]);
