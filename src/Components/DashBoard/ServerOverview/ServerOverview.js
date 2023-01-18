import React from 'react'
import './ServerOverview.css'
import { CardHeader, Typography, Card, IconButton, CardContent, Grid} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ServerOverviewChartOne from './ServerOverviewChartOne'


export default function ServerOverview() {
    return (
        <div>
            <Card className='visit-card' >
                <CardHeader
                    title="Server Overview"
                    sx={{ color: 'rgb(110, 110, 110)' }}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Grid>
                        <Grid container>
                            <Grid md={6} className='server-overview-chart-detail-one'>
                                <Typography>60% / 37°С / 3.3 Ghz...</Typography>
                            </Grid>
                            <Grid md={6}>
                                <ServerOverviewChartOne />
                            </Grid>
                        </Grid>
                        <Grid container marginTop='20px'>
                            <Grid md={6} className='server-overview-chart-detail-one'>
                                <Typography>40% / 37°С / 3.3 Ghz...</Typography>
                            </Grid>
                            <Grid md={6}>
                                <ServerOverviewChartOne />
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    )
}
