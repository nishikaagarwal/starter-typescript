import React from "react";
import Card from '@mui/material/Card';
import { CardContent, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';


const Cards = () =>{
    return(
        <Grid container spacing={2} direction="row" alignItems="center" justifyContent="center">
        <Grid item lg={3}>
          <Card>
            <CardHeader title="Property listings" subheader="Find a property"/>
            <CardMedia component="img" height="300" image={image1} alt="First image" />
            <CardContent>
              <Typography gutterBottom variant='subtitle1'>
                  Find proprty listings in ProperTree
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card>
          <CardHeader title="Atomic impact" subheader="Atomic API"/>
            <CardMedia component="img" height="300" image={image2} alt="Second image" />
            <CardContent>
              <Typography gutterBottom variant='subtitle1'>
                  Unlock the power of the paycheck
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card>
          <CardHeader title="Financial security" subheader="Security management"/>
            <CardMedia component="img" height="300" image={image3} alt="Third image" />
            <CardContent>
              <Typography gutterBottom variant='subtitle1'>
                  An easier responsisble banking system
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        </Grid>
    )
}

export default Cards;