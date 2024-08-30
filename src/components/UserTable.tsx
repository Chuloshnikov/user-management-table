"use client";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../store'; // Import AppDispatch
import {
  fetchUsers,
  selectFilteredUsers,
  setNameSearchTerm,
  setUsernameSearchTerm,
  setEmailSearchTerm,
  setPhoneSearchTerm,
} from '../store/userSlice';
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Container,
} from '@mui/material';

const UserTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); 
  const users = useSelector(selectFilteredUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleNameSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameSearchTerm(event.target.value));
  };

  const handleUsernameSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsernameSearchTerm(event.target.value));
  };

  const handleEmailSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmailSearchTerm(event.target.value));
  };

  const handlePhoneSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPhoneSearchTerm(event.target.value));
  };

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TextField
                label="Name"
                variant="outlined"
                size="small"
                onChange={handleNameSearch}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Username"
                variant="outlined"
                size="small"
                onChange={handleUsernameSearch}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                onChange={handleEmailSearch}
              />
            </TableCell>
            <TableCell>
              <TextField
                label="Phone"
                variant="outlined"
                size="small"
                onChange={handlePhoneSearch}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: any) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default UserTable;