import { createBrowserRouter, redirect } from "react-router-dom";
// import Login from "../pages/Login/Login";
// import Root from "../layouts";
import Home from "../pages/Home/Home";
//import SignUp from "../pages/Signup/SignUp";
import NotFound from "../pages/NotFound/NotFound";
// import ListBookings from "../pages/Booking/ListBookings/ListBookings";
// import ListMyBookings from "../pages/Booking/ListMyBookings/ListMyBookings";
// import AddBooking from "../pages/Booking/AddBooking/AddBooking";
// import AddMyBooking from "../pages/Booking/AddMyBooking/AddMyBooking";
// import UpdateBooking from "../pages/Booking/UpdateBooking/UpdateBooking";
// import UpdateMyBooking from "../pages/Booking/UpdateMyBooking/UpdateMyBooking";
// import DeleteBooking from "../pages/Booking/DeleteBooking/DeleteBooking";
// import DeleteMyBooking from "../pages/Booking/DeleteMyBooking/DeleteMyBooking";
// import Profile from "../pages/Users/Profile/Profile";
// import ListUsersPage from "../pages/Users/ListUsers/ListUsersPage";
// import CreateUserPage from "../pages/Users/CreateUser/CreateUserPage";
// import UpdateUserPage from "../pages/Users/UpdateUser/UpdateUserPage";
// import DeleteUserComponent from "../components/Users/DeleteUser/DeleteUserComponent";
// import ListEquipment from "../pages/Equipment/ListEquipment/ListEquipment";
// import AddEquipment from "../pages/Equipment/AddEquipment/AddEquipment";
// import UpdateEquipment from "../pages/Equipment/UpdateEquipment/UpdateEquipment";
// import DeleteEquipment from "../pages/Equipment/DeleteEquipment/DeleteEquipment";
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
  }
    
  
]);
