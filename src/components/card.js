

import * as React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';



const Caard =(props)=>{

    
  
    return(
        <div  style={{padding: "100px 300px "}}>
        <Card sx={{ display: 'flex' ,width: 900 ,height: 400 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' ,width: 450 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <CardMedia
          component="img"
          sx={{ width: 200 , height :250}}
          image= {props.img}
          alt="Live from space album cover"
        />
            <Box sx={{ display: 'flex', flexDirection: 'column' ,width: 350}}>
                <Stack spacing={5}>
            <Typography component="div" variant="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color = "primary.main"component="div">
                    {props.subtitle}
            </Typography>
            <Stack direction="row" spacing={1}>
      <Chip label="117 min" />
      <Typography>
      {props.cast}

      </Typography>
    </Stack>
  </Stack>

            </Box>
          </Box> 
          <CardContent sx={{ flex: '1 0 auto' }}>
         
            <Typography >
            {props.desc}
            </Typography>
          </CardContent>
         
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 450 ,height : 500 }}
          image= {props.img}
          alt="Live from space album cover"
        />
      </Card>
        </div>
    );
}

export default Caard;




