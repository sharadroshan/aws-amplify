import React from 'react'
import { CardHeader, Typography, Card, IconButton, CardContent, Box, Grid } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './VisitPage.css'
import VisitPageChart from './VisitPageChart'



export default function VisitPage() {
    return (
        <div>
            <Card className='visit-card'>
                <CardHeader
                    title="Visits Today"
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
                                <Typography variant='h4'>12,678</Typography>
                            </Grid>
                            <Grid md={6}>
                                <VisitPageChart />
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <Typography color='rgb(110, 110, 110)'>Registration</Typography>
                            <Typography>860</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography color='rgb(110, 110, 110)'>Sign Out</Typography>
                            <Typography>32</Typography>
                        </Grid>
                        <Grid item md={4}>
                            <Typography color='rgb(110, 110, 110)'>Rate</Typography>
                            <Typography>3.25%</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
