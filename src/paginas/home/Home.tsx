<<<<<<< HEAD
import React from "react";
import './Home.css';


function Home(){
    return(
        <>
<<<<<<< Updated upstream
            <h1 className="titulo">Home</h1>
            <img src="https://i.imgur.com/7kuTKym.jpeg" alt="Imagem Tela Inicial" className="img"/>
=======
           
>>>>>>> Stashed changes
=======
import React from 'react';
import {Grid, Paper} from '@material-ui/core';
import './Home.css';

function Home(){
    return(
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={8}>
                    <Paper style={{height:"100vh", background: "lightgrey"}} />
                </Grid>
                 <Grid item container direction="column" xs={12} sm={4} spacing={2}>
                     <Grid item>
                     <Paper style={{height:"49vh", background: "orange"}} />
                        <Paper />
                     </Grid>

                     <Grid item>
                        <Paper />
                        <Paper style={{height:"49vh", background: "green"}} />
                     </Grid>

                </Grid>
            </Grid>
>>>>>>> flexBox
        </>
    );
}
export default Home;