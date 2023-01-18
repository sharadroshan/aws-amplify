import { Card } from '@mui/material'
import React from 'react'
import DailyLineChart from './DailyLineChart'

export default function DailyLine() {
    return (
        <div >
            <Card sx={{padding:'20px' ,width:'100%'}}>
                <DailyLineChart />
            </Card>
        </div>
    )
}
