import React from 'react'
import { NavLink } from 'react-router-dom'
import {Table , TableHead, TableBody, TableCell, Button} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

const UserList = () => {
  return (
    <div style={{padding:'4rem'}}>
        <NavLink style={{float:'right'}} to='/createUser'><Button variant='outlined'  startIcon={<AddIcon/>}>User</Button></NavLink>
        <Table>
            <TableHead>
                <TableCell>Username</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Action</TableCell>
            </TableHead>
            <TableBody>
                <TableCell>Krishna</TableCell>
                <TableCell>null</TableCell>
                <TableCell>
                    <Button variant='outlined'>Generate Password</Button>
                </TableCell>    
            </TableBody>
        </Table>
    </div>
  )
}

export default UserList
