import * as React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory, useParams, NavLink, useLocation } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from './AirportDetails.module.css';


export const AirportDetails = () => {
    const [airport, setAirport] = useState({
        id: "",
        airportName: "",
        country: "",
        location: "",
        associatedAirline: ""
    });

    const {id} = useParams();

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/get/${id}`)
        .then((resp) => setAirport({...resp.data[0]}))
      }, [id])

    const slika = "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    return(
        <div className={styles.div}>
            <Typography variant="h5" component="div" marginTop="7rem">
                Airport Details
            </Typography>
            <Card className={styles.container}>
                <CardMedia
                    component="img"
                    height="140"
                    image={slika}
                    alt="green iguana"
                />
                <CardContent className={styles.card}>
                <Typography gutterBottom variant="body1" component="div">
                    {"Id: " + id}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                    {"Name: " + airport.airportName}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                    {"Country: " + airport.country}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                    {"Location: " + airport.location}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                    {"Associated airline: " + airport.associatedAirline}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <NavLink to={"/Airports/"}>
                        <Button size="small">Go back</Button>
                    </NavLink>
                </CardActions>
            </Card>
        </ div>
    );
};