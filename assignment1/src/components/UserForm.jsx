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
  user: Yup.string().required("Full Name is required")

});

export default function PositionFormComponent({ }) {
    const navigate= useNavigate()
    const [open, setOpen] = useState(true)
    const initialValues ={
        user:'',
        password:''
      };
  const handleSubmit = (values, { setSubmitting }) => {
    axios.post('http://localhost:3031/positions',values)
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
                    name="user"
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



