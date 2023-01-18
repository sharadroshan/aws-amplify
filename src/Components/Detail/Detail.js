import { Typography, Table, TableCell, TableHead, TableRow, CssBaseline, Container, TableContainer, TableBody, Toolbar } from '@mui/material'
import React from 'react'
import './Detail.css'

export default function Detail() {

  const userData = [
    {
      id: '1',
      name: 'Sharad',
      email: 'Sharadroshan@gmail.com',
      city: 'indore',
      state: 'mp',
      country: 'india'
    },
    {
      id: '2',
      name: 'Roshan',
      email: 'Roshan@gmail.com',
      city: 'indore',
      state: 'mp',
      country: 'india'
    },
    {
      id: '3',
      name: 'Mayur',
      email: 'Mayur@gmail.com',
      city: 'indore',
      state: 'mp',
      country: 'india'
    },
    {
      id: '4',
      name: 'Sonu',
      email: 'Sonu@gmail.com',
      city: 'indore',
      state: 'mp',
      country: 'india'
    },
    {
      id: '5',
      name: 'Monu',
      email: 'Monu@gmail.com',
      city: 'indore',
      state: 'mp',
      country: 'india'
    }
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className='user-detail'>
          <Typography variant='h3'> User Details</Typography>
          <TableContainer>
            <Table sx={{ border: 'solid 1px' }}>
              <TableHead sx={{ backgroundColor: "lightgreen" }}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Country</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  userData.map((item) => (
                    <TableRow>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.city}</TableCell>
                      <TableCell>{item.state}</TableCell>
                      <TableCell>{item.country}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Container>
    </React.Fragment>
  )
}
