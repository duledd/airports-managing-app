import * as React from 'react';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import styles from './Flights.module.css';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const Item = styled(Paper)(() => ({
    padding: 0,
    margin: 0,
    textAlign: 'center',
  }));

export const Flights = () => {
  return (
    <div className={styles.div}> 
    <Typography variant="h5" align="center" style={{marginTop: "5rem"}}>
        Flights page in progress...
    </Typography>
    <Grid container justifyContent="center" spacing={2} marginTop={1} className={styles.container}>
        <Grid item>
            <Item>
                <form
                    className={styles.container}
                    noValidate
                    autoComplete="off"
                >
                    <FormControl>
                        <InputLabel>From:</InputLabel>
                        <Select className={styles.input} native defaultValue="">
                        <option />
                        <optgroup label="Category 1">
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                        </optgroup>
                        <optgroup label="Category 2">
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                        </optgroup>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel>To:</InputLabel>
                        <Select className={styles.input} native defaultValue="">
                        <option />
                        <optgroup label="Category 1">
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                        </optgroup>
                        <optgroup label="Category 2">
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                        </optgroup>
                        </Select>
                    </FormControl>
                    <Stack noValidate>
                        <TextField
                            className={styles.input}
                            label="Departure Date:"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        <TextField
                            className={styles.input}
                            label="Return Date:"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </Stack>
                    <Button
                        onClick={()=> console.log("SUBMIT")} 
                        className={styles.button}
                        variant="contained">
                        Submit
                    </Button>
                </form>
            </Item>
        </Grid>
        <Grid item>
            <Item><GoogleMap /></Item>
        </Grid>
    </Grid>
    </div> 
  );
}
