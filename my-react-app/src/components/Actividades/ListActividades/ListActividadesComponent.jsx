import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

function ListActividadesComponent(props) {
 
    
  // console.log(props) 
  //const dataColumns = Object.keys(data[0]); crea los campos que tendrá la cabecera dinamicamente
  const dataColumns = ["Id", "Titulo", "Descripcion", "fecha", "plazas", "precio"] // crea los campos que tendrá la cabecera manualmente
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };


  const styles = {
    paper: {
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#cad5f3',
    },
    tableContainer: {
      maxHeight: 440,
      backgroundColor: '#DEE7FF',
    },
    tableCell: {
      fontWeight: 'bold',
      backgroundColor: '#4E7FFF',
    },
  };
  
  return (
    <Paper sx={styles.paper}>
      <TableContainer sx={styles.tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                {dataColumns.map((column) => (
                <TableCell key={column} sx={styles.tableCell}>
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.actividades
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)//muestra que las paginas se vean de 10 en 10 o de 25 en 25  segun lo queramos en el select, partiendo de que la primera pagina empieza en 1 y termina en 9 y la segunda pagina empieza en 10 y termina en 19
              .map((actividad) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={actividad.id}>
                    <TableCell >{actividad.id}</TableCell>
                    <TableCell >{actividad.titulo}</TableCell>
                    <TableCell >{actividad.descripcion}</TableCell>
                    <TableCell >{actividad.fecha.substr(0,10)}</TableCell>
                    <TableCell >{actividad.plazas}</TableCell>
                    <TableCell >{actividad.precio}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[2, 10, 25]}
        component="div"
        count={props.actividades.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default ListActividadesComponent;