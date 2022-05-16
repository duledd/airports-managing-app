import * as React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AirportCard } from "../../components/AirportCard/AirportCard";
import { toast } from 'react-toastify';


export const Airports = () => {

    //setting up the items to be rendered
    const [airporstList, setAirportsList] = useState([]);

    const loadData = async () => {
        const response = await Axios.get("http://localhost:3001/api/get");
        setAirportsList(response.data)
    }
    
    useEffect( () => {
        loadData();
    }, [])

    const deleteAirport = (id) => {
        if (window.confirm("Delete this item?")) {
            Axios.delete(`http://localhost:3001/api/delete/${id}`, );
            toast.success("Airport deleted successuflly!");
            setTimeout(()=> loadData(), 500);
        }
    };
    
    return (
        <>
        <Container style={{marginTop: "5rem", marginBottom: "3rem"}}>
            <Typography variant="h5" align="center">
                Airports
            </Typography>
            <Grid container spacing={2} paddingTop={3}>
                {
                    !!airporstList.length ? (
                        airporstList.map((airport) => (
                            <Grid item key={airport.id} xs={12} md={6}>
                                <AirportCard airport={airport} deleteAirport={deleteAirport} />
                            </Grid>
                        )
                    )) : (
                        <Typography variant="h3">
                            No Airports in the list
                        </Typography>
                    )
                }
            </Grid>
        </Container>
        </>
    );
}