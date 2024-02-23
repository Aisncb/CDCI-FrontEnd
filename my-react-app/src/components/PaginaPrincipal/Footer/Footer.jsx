import Typography from '@mui/material/Typography';
import './Footer.css'
import { Paper } from '@mui/material';

function Footer() {
  return (
    <Paper className='footer' sx={{backgroundColor: '#4E7FFF'}}>
      <Typography variant="body2" sx={{color:"white", fontWeight:"bold"}}>© 2024 Club Deportivo Senderistas Caminando Con Ingenio.</Typography>
      <Typography variant="body2" sx={{color:"white", fontWeight:"bold"}}>35250 Ingenio – Urb La Longuera</Typography>
      <Typography variant="body2" sx={{color:"white", fontWeight:"bold"}}>info@cdsci.es</Typography>
    </Paper>
  
  )
}

export default Footer