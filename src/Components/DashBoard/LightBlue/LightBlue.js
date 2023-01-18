import { Typography, CardContent, CardHeader, Grid, Card, Box, IconButton } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LightBlueChart from './LightBlueChart'

export default function LightBlue() {
    return (
        <div>
            <Card className='visit-card'>
                <CardHeader
                    title="Light Blue"
                    sx={{ color: 'rgb(110, 110, 110)' }}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Box >
                        <Grid container>
                            <Grid md={6}>
                                <Typography variant='h2'>199<sub style={{fontSize:'medium',color:'red'}}>-3.7%</sub></Typography>
                            </Grid>
                            <Grid md={6} alignSelf='center'>
                                <LightBlueChart />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box >
                        <Grid container spacing={2} marginTop='20px'  >
                            <Grid item md={4}>
                                <Typography>33</Typography>
                                <Typography color='rgb(110, 110, 110)' >Registration</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Typography>3.25%</Typography>
                                <Typography color='rgb(110, 110, 110)'>Bounce Rate</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Typography>330</Typography>
                                <Typography color='rgb(110, 110, 110)'>Views</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}
