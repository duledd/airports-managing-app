import * as React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory, useParams, NavLink, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import styles from './Home.module.css';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

export const Home = () => {

  //Setting up an object to write to the database
  const [airport, setAirport] = useState({
    id: "",
    airportName: "",
    country: "",
    location: "",
    associatedAirline: ""
});

  //Setting up country select object
  const [country, setSelectedCountryName] = useState("");
  const [countryNames, setCountryNames] = useState([]);

  //const { airportName, country, location, associatedAirline} = airport;

  //Get country for the select options input
  const loadCountryNames = async () => {
    const response = await Axios.get("http://localhost:3001/api/get_country");
    setCountryNames(response.data);
  }

  useEffect(() => {
    loadCountryNames();
  }, []);

  const handleAirportName = (e) => {
    const value = e.target.value;
    setAirport({
      ...airport,
      airportName: value,
    })
  }

  const handleAirportLocation = (e) => {
    const value = e.target.value;
    setAirport({
      ...airport,
      location: value,
    })
  }

  const handleAAssociatedAirlines = (e) => {
    const value = e.target.value;
    setAirport({
      ...airport,
      associatedAirline: value,
    })
  }

  const {id} = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/get/${id}`)
    .then((resp) => setAirport({...resp.data[0]}))
  }, [id])

  //Method to write data in database
  const createAirport = (e) => {
    e.preventDefault();
    if (!airport.airportName || !airport.country || !airport.location || !airport.associatedAirline) {
      toast.error("Some value is missing!")
    } else {
      if(!id) {
        Axios.post("http://localhost:3001/api/insert",
        {
          airport: airport,
        }).then(() => {
          setAirport({ airportName: "", country: "", location: "", associatedAirline: "" })
        }).catch(err => {
          toast.error(err.response.data);
        });
      toast.success("New Airport Added!")
      } else {
        Axios.put(`http://localhost:3001/api/update/${id}`,
        {
          airport: airport,
        }).then(() => {
          setAirport({ airportName: "", country: "", location: "", associatedAirline: "" })
        }).catch(err => {
          toast.error(err.response.data);
        });
      toast.success("Airport Updated Successufully!")
      }
    }
  };

  const theme = useTheme();

  // Material-UI method amended with setAirport action
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCountryName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setAirport({
      ...airport,
      country: value,
    })
  };
  const location = useLocation();
  const isPathNameNotUpdate = location.pathname == "/";

  return (
    <div className={styles.main}>
      <Typography variant="h5" align="center" style={{marginTop: "5rem"}}>
        {isPathNameNotUpdate ? "Create Aerport" : "Edit Airport"}
      </Typography>
      <form
        className={styles.container}
        noValidate
        autoComplete="off"
      >
        <TextField
          className={styles.input}
          name="airportName"
          onChange={handleAirportName}
          label="Name"
          variant="outlined"
          value={airport.airportName || ""}
        />
        <FormControl className={styles.input}>
          <InputLabel id="demo-multiple-name-label">Country</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={country || ""}
            onChange={handleChange}
            input={<OutlinedInput label="Country Name" />}
            MenuProps={MenuProps}
          >
            {countryNames.map((name) => (
              <MenuItem
                key={name.id}
                value={name.country_code_iso + " " + name.country_name}
                style={getStyles(name, country, theme)}
              >
                {name.country_code_iso + " " + name.country_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          className={styles.input}
          onChange={handleAirportLocation}
          label="Location"
          variant="outlined"
          value={airport.location || ""}
        />
        <TextField
          className={styles.input}
          onChange={handleAAssociatedAirlines}
          label="Airlines"
          variant="outlined"
          value={airport.associatedAirline || ""}
        />
        <Button
          onClick={createAirport}
          className={styles.button}
          variant="contained"
        >
          {isPathNameNotUpdate ? "Create Aerport" : "Save"}
        </Button>
      </form>
    </div>
  );
}