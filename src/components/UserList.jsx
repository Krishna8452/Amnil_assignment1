import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Table, TableHead, TableBody, TableCell, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const UserList = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      var myList = data;
      setUser(myList);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const generatePassword = async (id) => {
    try {
      const randomPassword = Math.random().toString(36).substring(7);

      const updatedUserList = user.map((item) => {
        if (item.id === id) {
          return { ...item, password: randomPassword };
        }
        return item;
      });

      setUser(updatedUserList);

      const updatedUser = updatedUserList.find((item) => item.id === id);
      await fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });
    } catch (error) {
      console.log("Error generating password:", error);
    }
  };

  return (
    <div style={{ padding: "4rem" }}>
      <NavLink style={{ float: "right" }} to="/createUser">
        <Button variant="outlined" startIcon={<AddIcon />}>
          User
        </Button>
      </NavLink>
      <Table>
        <TableHead>
          <TableCell>Username</TableCell>
          <TableCell>Password</TableCell>
          <TableCell>Action</TableCell>
        </TableHead>
        {user.map((list) => {
          return (
            <>
              <TableBody>
                <TableCell>{list.username}</TableCell>
                <TableCell>{list.password ? list.password : "null"}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => generatePassword(list.id)}
                    disabled={list.password}
                    size="small"
                    variant="outlined"
                  >
                    Generate Password
                  </Button>
                </TableCell>
              </TableBody>
            </>
          );
        })}
      </Table>
    </div>
  );
};

export default UserList;
