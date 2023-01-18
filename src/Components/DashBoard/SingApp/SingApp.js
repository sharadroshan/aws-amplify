import React from 'react'
import { Grid, Card, Typography, Box, CardHeader, IconButton, CardContent } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SignAppChart from './SingAppChart'


export default function SingApp() {
    return (
        <div>
            <Card className='visit-card'>
                <CardHeader
                    title="Sing App"
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
                                <Typography variant='h2'>27<sub style={{fontSize:'medium',color:'green'}}>+2.5%</sub></Typography>
                            </Grid>
                            <Grid md={6} alignSelf='center'>
                                <SignAppChart />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box >
                        <Grid container spacing={2} marginTop='20px'  >
                            <Grid item md={4}>
                                <Typography>2</Typography>
                                <Typography color='rgb(110, 110, 110)' >Registration</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Typography>4.5%</Typography>
                                <Typography color='rgb(110, 110, 110)'>Bounce Rate</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Typography>20</Typography>
                                <Typography color='rgb(110, 110, 110)'>Views</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}
