import React from 'react'
import { CardHeader,  Card, IconButton, CardContent, Box, Grid, List, ListItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RevenueBreakdownChart from './RevenueBreakdownChart'

export default function RevenueBreakdown() {
    return (
        <div>
            <Card className='visit-card'>
                <CardHeader
                    title="Revenue Breakdown"
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
                            <RevenueBreakdownChart />
                        </Grid>
                        <Grid md={6} sx={{alignSelf:'center'}}>
                            <List sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box className='app-performace-dott-blue' />
                                <ListItem>Integration</ListItem>
                            </List>
                            <List sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box className='app-performace-dott-yellow' />
                                <ListItem>Integration</ListItem>
                            </List>
                            <List sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box className='app-performace-dott-pink' />
                                <ListItem>Integration</ListItem>
                            </List>
                            <List sx={{ display: 'flex', alignItems: 'center' }}>
                                <Box className='app-performace-dott-green' />
                                <ListItem>Integration</ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
