import React from 'react'
import { Typography, Box, Paper, TableContainer, Table, TableBody, TableRow, TableCell, Chip } from '@mui/material'

export default function SupportRequest() {

    const detail = [
        {
            id: "1",
            name: "MArk Otto",
            email: "otto@gmail.com",
            product: "On the Road",
            price: "$25,456",
            date: "11 May 2017",
            city: "ostega",
            status: "sent",
        },
        {
            id: "2",
            name: "MArk Otto",
            email: "otto@gmail.com",
            product: "On the Road",
            price: "$25,456",
            date: "11 May 2017",
            city: "ostega",
            status: "sent"
        },
        {
            id: "3",
            name: "MArk Otto",
            email: "otto@gmail.com",
            product: "On the Road",
            price: "$25,456",
            date: "11 May 2017",
            city: "ostega",
            status: "panding"
        },
        {
            id: "4",
            name: "MArk Otto",
            email: "otto@gmail.com",
            product: "On the Road",
            price: "$25,456",
            date: "11 May 2017",
            city: "ostega",
            status: "Declined"
        },
        {
            id: "5",
            name: "MArk Otto",
            email: "otto@gmail.com",
            product: "On the Road",
            price: "$25,456",
            date: "11 May 2017",
            city: "ostega",
            status: "sent"
        }
    ]
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <Typography variant='h4' padding='15px'>Support Requests</Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>NAME</TableCell>
                                    <TableCell>EMAIL</TableCell>
                                    <TableCell>PRODUCT</TableCell>
                                    <TableCell>PRICE</TableCell>
                                    <TableCell>DATE</TableCell>
                                    <TableCell>CITY</TableCell>
                                    <TableCell>STATUS</TableCell>
                                </TableRow>
                                {
                                    detail.map((item) => (
                                        <TableRow sx={{verticalAlign:'baseline'}}>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell>{item.product}</TableCell>
                                            <TableCell>{item.price}</TableCell>
                                            <TableCell>{item.date}</TableCell>
                                            <TableCell>{item.city}</TableCell>
                                            <TableCell><Chip label={item.status}/></TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </div>
    )
}


// {
//     deatil.map((item) => {
//         <TableCell>{item.name}</TableCell>
//     })}