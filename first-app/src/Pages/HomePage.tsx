import React, {useState} from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import DialogBox from "../Components/DialogBox";


const HomePage = () =>{
    return(
        <div>
            <Cards />
            <br />
            <DialogBox />
        </div>
    )
}

export default HomePage;
