import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { IconButton, Typography } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import styles from './AirportCard.module.css';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export const AirportCard = ({ airport, deleteAirport}) => {
    return (
        <div>
            <Card className={styles.card}>
                <CardHeader 
                    action={
                        <div className={styles.cardHeaderIcons}>
                            <NavLink to={`/Update/${airport.id}`}>
                                <Button 
                                    variant="text" 
                                    color="success"
                                >
                                    Edit
                                </Button>
                            </NavLink>
                            <IconButton color='secondary' onClick={() => {deleteAirport(airport.id)}}>
                                <DeleteOutlinedIcon />
                            </IconButton>
                        </div>
                    }
                    title={airport.airportName}
                />
                <CardContent>
                    <Typography className={styles.p}>
                        Country: {airport.country}
                    </Typography>
                    <Typography className={styles.p}>
                        Location: {airport.location}
                    </Typography>
                    <Typography className={styles.p}>
                        Associated airlines: {airport.associatedAirline}
                    </Typography>
                    <NavLink to={`/Details/${airport.id}`}>
                        <Button
                            style={{
                                backgroundColor: "rgb(119, 127, 212)",
                                color: "white",
                                marginTop: 15
                              }}
                            >
                            Details
                        </Button>
                    </NavLink>
                </CardContent>
            </Card>
        </div>
    )
}