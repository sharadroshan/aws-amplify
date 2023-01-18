import React from 'react'
import { CardHeader,Card, IconButton, CardContent, Box, Grid, List, ListItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './AppPerformance.css'
import AppPerformanceChart from './AppPerformanceChart'



export default function AppPerformance() {
    return (
        <div>
            <Card sx={{minHeight:'330px'}}>
                <CardHeader
                    title="App Performance"
                    sx={{ color: 'rgb(110, 110, 110)' }}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Grid container>
                        <Grid md={6}>
                            <List sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box className='app-performace-dott-yellow' />
                                <ListItem>Integration</ListItem>
                            </List>
                        </Grid>
                        <Grid md={6}>
                            <List sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box className='app-performace-dott-blue' />
                                <ListItem>SDK</ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <AppPerformanceChart />
                </CardContent>
            </Card>
        </div>
    )
}