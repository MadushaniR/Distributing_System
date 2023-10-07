import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#DCDCDC' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

export default function Crop() { // Renamed to start with an uppercase letter
    const [selectedSeason, setSelectedSeason] = React.useState('Select');
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);

    const handleSeasonChange = (event) => {
        setSelectedSeason(event.target.value);
    };

    return (
        <div>
            <h1 style={{ color: '#017840' }}>Crop</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>Start Season</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Season</h4>
                        <FormControl variant="outlined" style={{ width: '60%' }}>
                            <Select
                                value={selectedSeason}
                            // onChange={handleSeasonChange}
                            >
                                <MenuItem value="Select">Select Season</MenuItem>
                                <MenuItem value="Winter">Winter</MenuItem>
                                <MenuItem value="Spring">Spring</MenuItem>
                                <MenuItem value="Summer">Summer</MenuItem>
                                <MenuItem value="Autumn">Autumn</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Start Date</h4>
                        <input type="date" id="startDate" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>End Date</h4>
                        <input type="date" id="endDate" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Create Crop Record</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Farmer Registration Code</h4>
                        <TextField id="filled-basic" label="Enter Farmer Registration Code" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Crop Name</h4>
                        <TextField id="filled-basic" label="Enter Crop Name" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Quantity Received</h4>
                        <TextField id="filled-basic" label="Enter Quantity Received" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <h4>Quantity Loss</h4>
                        <TextField id="filled-basic" label="Enter Quantity Loss" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Quantity Sold</h4>
                        <TextField id="filled-basic" label="Enter Quantity Sold" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Price per kg (sold)</h4>
                        <TextField id="filled-basic" label="Enter per Price " variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                </Grid>
            </Box>
            <button style={{ width: '20%', marginTop: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#017840', height: '40px', fontSize: '15px', border: ' none', borderRadius: '5px' }}>Save</button>
        </div>
    )
}
