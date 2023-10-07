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

export default function Distributors() { // Renamed to start with an uppercase letter
    const [selected, setSelected] = React.useState('Select');
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);

    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <div>
            <h1 style={{ color: '#017840' }}>Distributors</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>Personal Info</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>First Name</h4>
                        <TextField id="filled-basic" label="Enter First Name" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Middle Name</h4>
                        <TextField id="filled-basic" label="Enter Middle Name" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Last Name</h4>
                        <TextField id="filled-basic" label="Enter Last Name" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    {/* <Grid item xs={4}>
            <h4>Season</h4> */}
                    {/* <FormControl variant="outlined" style={{ width: '60%' }}>
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
            </FormControl> */}
                    {/* </Grid> */}
                    <Grid item xs={4}>
                        <h4>Email Address</h4>
                        <TextField id="filled-basic" label="Enter Email Address" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Phone Number</h4>
                        <TextField id="filled-basic" label="Enter Phone No" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px', marginTop: '20px' }}>Address Info</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Address Line 1</h4>
                        <TextField id="filled-basic" label="Enter Address Line 1" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Address Line 2</h4>
                        <TextField id="filled-basic" label="Enter Address Line 2" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>City</h4>
                        <TextField id="filled-basic" label="Enter City" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Region</h4>
                        <TextField id="filled-basic" label="Enter Region" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>District</h4>
                        <TextField id="filled-basic" label="Enter District" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Province</h4>
                        <TextField id="filled-basic" label="Enter Province" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Postal Code</h4>
                        <TextField id="filled-basic" label="Enter Postal Code" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                </Grid>
            </Box>


            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Item style={{ textAlign: 'left', backgroundColor: '#017840', color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>Vehicle Info</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Season</h4>
                        <FormControl variant="outlined" style={{ width: '60%' }}>
                            <Select
                                value={selected}
                            // onChange={handleSeasonChange}
                            >
                                <MenuItem value="Select">Select Vehicle Item</MenuItem>
                                <MenuItem value="Select1">Select Vehicle Item 1</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Vehicle Capacity</h4>
                        <TextField id="filled-basic" label="Enter Vehicle Capacity" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                    <Grid item xs={4}>
                        <h4>Vehicle No</h4>
                        <TextField id="filled-basic" label="Enter Vehicle No" variant="filled" style={{ width: '60%', height: '43%' }} />
                    </Grid>
                </Grid>
            </Box>
            <button style={{ width: '20%', marginTop: '20px', cursor: 'pointer', color: '#fff', backgroundColor: '#017840', height: '40px', fontSize: '15px', border: ' none', borderRadius: '5px' }}>Save</button>
        </div>
    )
}
