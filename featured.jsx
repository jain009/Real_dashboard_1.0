import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';


const Featured = ({ PlaceName, address }) => {
  return (
    <Box sx={{ padding: '10px' }}>
      <h1>Featured Listing</h1>
      <Paper sx={{ width: '350px', height: '250px', borderRadius: '15px 15px 15px 15px', position: 'relative',background: 'rgb(173, 216, 230)', backgroundImage:'url()',
          backgroundSize:"cover",
          backgroundRepeate:"no-repeate", }}>
             <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px', borderRadius: '0px 0px 15px 15px',background: 'rgba(0, 0, 0, 0.6)', color: 'white' ,textAlign:"center"}}>
          <Typography variant='h4' sx={{ fontWeight: 500 }}>
            {PlaceName} ATLAS PALACE
          </Typography>
          <Typography variant='caption'>BANGALORE, KARNATAKA {address}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Featured;
