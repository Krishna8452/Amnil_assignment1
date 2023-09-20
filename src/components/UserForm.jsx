import React from "react";
import {
  TextField,
  Grid,
  Button,
  Typography,
  Box,
  Dialog,
  IconButton
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import CancelIcon from "@mui/icons-material/Cancel";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("username is required"),
  password: Yup.password
});

export default function PositionFormComponent({ }) {
    const navigate= useNavigate()
    const [open, setOpen] = useState(true)
    const initialValues ={
        username:'',
        password:''
      };
  const handleSubmit = (values, { setSubmitting }) => {
    axios.post('http://localhost:3000/users',values)
    navigate('/')
  
  };


  return (
    <>  
       
        <Dialog open={open}>
        <Box sx={{display:'flex'}}>   
            <Typography sx={{ fontSize:50, marginLeft:'3rem'}}>Create user</Typography>
            <Box sx={{flexGrow:1}}/>
            <Box
                style={{
                  border: "2px",
                  justifyContent: "right",
                }}
            >
                <IconButton color={"red"} onClick={()=>navigate('/')} title="Cancel">
                  <CancelIcon />
                </IconButton>
            </Box>
        </Box>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}

      >
        {({
          errors,
          touched,
          isSubmitting,
        }) => (
            <Form style={{
              marginTop: "1rem",
              width:'20rem',
              marginLeft:'5rem',
              height:'10rem'
            }}>  
              <Grid>               
                  <Field
                    as={TextField}
                    width={"5rem"}
                    name="username"
                    label="user"
                    variant="outlined"
                    sx={{marginBottom:'1rem'}}
                    error={touched.user && !!errors.user}
                    helperText={touched.user && errors.user}           
                  />
              </Grid>
                  <Button style={{float:'right', marginRight:'6rem'}} variant="contained" size="large" type="submit" disabled={isSubmitting}>
                    Add
                  </Button>          
            </Form>
        )}
      </Formik>
      </Dialog>
            
    </>
  );
}



