import { Link } from "react-router-dom";
import "./SideMenu.css";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import ListIcon from '@mui/icons-material/List';
import AddIcon from '@mui/icons-material/Add';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import DeleteIcon from '@mui/icons-material/Delete';


function SideMenu() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (index) => {
    setSelectedIndex(index === selectedIndex ? null : index);
  };


  const role = localStorage.getItem("role")

  





  // const menuItemsReserva = [
  //   { icon: <ListIcon />, text: 'Ver Reservas', link: role==="administrador" ?'/dashboard/listbookings':'/dashboard/listmybookings' , index:1},
  //   { icon: <AddIcon />, text: 'Crear Reserva', link: role==="administrador" ?'/dashboard/addbooking':'/dashboard/addmybooking', index:2 },
  //   { icon: <ChangeCircleIcon />, text: 'Modificar Reserva', link:role==="administrador" ?'/dashboard/updateBooking':'/dashboard/updatemybooking', index:3 },
  //   { icon: <DeleteIcon />, text: 'Eliminar Reserva', link:role==="administrador" ?'/dashboard/deletebooking':'/dashboard/deletemybooking', index:4 },
  //   // Agrega más elementos si es necesario
  // ];



  const menuItemsUsuario = [
    (role==="administrador") && { icon: <ListIcon />, text: 'Ver Usuarios', link: '/dashboard/listUsers', index: 1 },
    (role==="administrador") &&{ icon: <AddIcon />, text: 'Crear Usuario', link: '/dashboard/createUser', index: 2 },
    (role==="administrador") &&{ icon: <ChangeCircleIcon />, text: 'Modificar Usuario', link: '/dashboard/updateUser', index: 3 },
    (role==="administrador") &&{ icon: <DeleteIcon />, text: 'Eliminar Usuario', link: '/dashboard/deleteUser', index: 4 },
    // Agrega más elementos si es necesario
  ];

  const menuItemsNoticias = [
    { icon: <ListIcon />, text: 'Ver Noticias', link: '/dashboard/listNoticia', index: 5 },
    (role==="administrador") &&{ icon: <AddIcon />, text: 'Crear Noticias', link: '/dashboard/createNoticia', index: 6 },
    (role==="administrador") &&{ icon: <ChangeCircleIcon />, text: 'Modificar Noticias', link: '/dashboard/updateNoticia', index: 7 },
    (role==="administrador") &&{ icon: <DeleteIcon />, text: 'Eliminar Noticias', link: '/dashboard/deleteNoticia', index: 8 },
  ];

  const menuItemsActividades = [
    { icon: <ListIcon />, text: 'Ver Actividades', link: '/dashboard/listEquipment', index: 9 },
    { icon: <AddIcon />, text: 'Crear Actividades', link: '/dashboard/addEquipment', index: 10 },
    { icon: <ChangeCircleIcon />, text: 'Modificar Actividades', link: '/dashboard/updateEquipment', index: 11 },
    { icon: <DeleteIcon />, text: 'Eliminar Actividades', link: '/dashboard/deleteEquipment', index: 12 },
  ];

  const menuItemsRutas = [
    (role==="administrador") &&{ icon: <ListIcon />, text: 'Ver Rutas', link: '/dashboard/listClassrooms', index: 13 },
    (role==="administrador") &&{ icon: <AddIcon />, text: 'Crear Rutas', link: '/dashboard/addClassroom', index: 14 },
    (role==="administrador") &&{ icon: <ChangeCircleIcon />, text: 'Modificar Rutas', link: '/dashboard/updateClassroom', index: 15 },
    (role==="administrador") &&{ icon: <DeleteIcon />, text: 'Eliminar Rutas', link: '/dashboard/deleteClassroom', index: 16 },
  ];

  const menuItemsPagos = [
    { icon: <ListIcon />, text: 'Ver Pagos', link: '/dashboard/listBuildings', index: 17 },
    { icon: <AddIcon />, text: 'Crear Pagos', link: '/dashboard/addBuilding', index: 18 },
    { icon: <ChangeCircleIcon />, text: 'Modificar Pagos', link: '/dashboard/updateBuilding', index: 19 },
    { icon: <DeleteIcon />, text: 'Eliminar Pagos', link: '/dashboard/deleteBuilding', index: 20 },
  ];

  return (
    <Box position="absolute" className="menuDashboard">
      
      <List className="btnMenu">
        {menuItemsUsuario.map((item) => (
          <Link key={item.index} to={item.link} className="linkMenu">
            <ListItem
              key={item.text}
              disablePadding
              selected={selectedIndex === item.index}
              onClick={() => handleListItemClick(item.index)}
              className="listItem"
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
          
        ))}
      </List>
      <Divider />
      
      <Divider />
      <List className="btnMenu">
        {menuItemsNoticias.map((item) => (
          <Link key={item.index} to={item.link} className="linkMenu">
            <ListItem
              key={item.text}
              disablePadding
              selected={selectedIndex === item.index}
              onClick={() => handleListItemClick(item.index)}
              className="listItem"
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List className="btnMenu">
        {menuItemsActividades.map((item) => (
          <Link key={item.index} to={item.link} className="linkMenu">
            <ListItem
              key={item.text}
              disablePadding
              selected={selectedIndex === item.index}
              onClick={() => handleListItemClick(item.index)}
              className="listItem"
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List className="btnMenu">
        {menuItemsRutas.map((item) => (
          <Link key={item.index} to={item.link} className="linkMenu">
            <ListItem
              key={item.text}
              disablePadding
              selected={selectedIndex === item.index}
              onClick={() => handleListItemClick(item.index)}
              className="listItem"
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List className="btnMenu">
        {menuItemsPagos.map((item) => (
          <Link key={item.index} to={item.link} className="linkMenu">
            <ListItem
              key={item.text}
              disablePadding
              selected={selectedIndex === item.index}
              onClick={() => handleListItemClick(item.index)}
              className="listItem"
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>

      
  
    </Box>
  );
}
export default SideMenu;
