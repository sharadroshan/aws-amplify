import React from 'react'
import { Grid, Card, Typography, Box, CardHeader, IconButton, CardContent } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RNSChart from './RNSChart'

export default function RNS() {
    return (
        <div>
            <Card className='visit-card'>
                <CardHeader
                    title="RNS"
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
                                <Typography variant='h2'>44<sub style={{fontSize:'medium',color:'green  '}}>-3.1%</sub></Typography>
                            </Grid>
                            <Grid md={6} alignSelf='center'>
                                <RNSChart />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box >
                        <Grid container spacing={2} marginTop='20px'  >
                            <Grid item md={4}>
                                <Typography>15</Typography>
                                <Typography color='rgb(110, 110, 110)' >Registration</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Typography>10.1%</Typography>
                                <Typography color='rgb(110, 110, 110)'>Bounce Rate</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <Typography>150</Typography>
                                <Typography color='rgb(110, 110, 110)'>Views</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </CardContent>
            </Card>
        </div>
    )
}
