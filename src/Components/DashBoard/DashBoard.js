import React from 'react'
import { Grid, Box, Card, Button, Typography } from '@mui/material'
import VisitPage from './VisitPage.js/VisitPage'
import AppPerformance from './AppPerformance.js/AppPerformance'
import ServerOverview from './ServerOverview/ServerOverview'
import RevenueBreakdown from './RevenueBreakdown/RevenueBreakdown'
import './DashBoard.css'
import DailyLine from './DailyLIneChart/DailyLine'
import LightBlue from './LightBlue/LightBlue'
import SingApp from './SingApp/SingApp'
import RNS from './RNS/RNS'
import SupportRequest from './SupportRequest/SupportRequest'
import Footer from './Footer/Footer'

export default function DashBoardData() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <div className='dashboard'>
        <Grid container>
          <Grid  item xs={6}>
            <Typography variant='h4'>Dashboard</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'end' }}>
            <Button variant='contained'>LATEST REPORTS</Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop='20px' >
          <Grid item xs={3} >
            <VisitPage />
          </Grid>
          <Grid item xs={3} >
            <AppPerformance />
          </Grid>
          <Grid item xs={3} >
            <ServerOverview />
          </Grid>
          <Grid item xs={3} >
            <RevenueBreakdown />
          </Grid>
        </Grid>
        <Grid container marginTop='20px' position='relative'>
          <Grid item xs={12}>
            <DailyLine />
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop='20px'>
          <Grid item xs={4}>
            <LightBlue />
          </Grid>
          <Grid item xs={4}>
            <SingApp />
          </Grid>
          <Grid item xs={4}>
            <RNS />
          </Grid>
        </Grid>
        <Box marginTop='20px'>
          <SupportRequest />
        </Box>
        <Box>
          <Footer />
        </Box>
      </div>
    </Box>
  )
}
