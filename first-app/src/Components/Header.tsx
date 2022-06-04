import React, {useState} from "react";
import { AppBar, Box, Theme, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";





const Header = () =>{
    return(
        <AppBar position="static"> 
        <nav>
            <Toolbar>
                <Box m={2} >
                    <Typography variant="button">
                        <NavLink to='/home'>
                            HomePage
                        </NavLink>
                    </Typography>
                </Box>
                <Box m={2} >
                    <Typography variant="button">
                        <NavLink to='/contact'>
                            Contact Us
                        </NavLink>
                    </Typography>
                </Box>
            </Toolbar>
            </nav>
        </AppBar>
    )
}

export default Header;


