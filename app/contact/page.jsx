"use client"
// import sendEmail from "@/utils/Email";
import { Grid, Typography,TextField,Button,Form } from "@mui/material";
import { useState } from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";

export default function Contact() {
  const [formValues,setFormValues] = useState(
    {
      name:"",
      phone:"",
      email:"",
      message:""
    }
  )

  const handleChange = (e) =>{
  
setFormValues({...formValues,[e.target.name]:e.target.value})
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
   
    const res = await fetch('/api/email/',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(formValues)
    })
    // await sendEmail(formValues)

  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} mb={5}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontFamily: "Lovelo" }}
        >
          Contact
        </Typography>
      </Grid>
      <Grid container  item xs={12} md={6} flex flexWrap={"wrap"} sx={{justifyContent:'center',textAlign:"center"}}>
        <Grid item >

        
        <Typography variant="h5"  >
            Y U G A - Architectural Studio
            
        </Typography>
        <Typography variant="h6" >
            Thazheyangadi, Pulpally
            
        </Typography>
        <Typography variant="h6" >
            Kerala, 673579
            
        </Typography>
        <Typography variant="h6" >
            Phone: 
            
        </Typography>
        <Typography variant="h6" >
            Email: yugaarchitecturalstudio@gmail.com
            
        </Typography>
        <Link href="https://www.instagram.com/yugarchitects/" target="_blank">
        <InstagramIcon sx={{color:"#E4405F",fontSize:"45px",cursor:"pointer"}}/>
        </Link>
        <Link href="https://www.facebook.com/YUGAarchitecturalstudio/" target="_blank">
        <FacebookIcon sx={{color:"#1877F2",fontSize:"45px",cursor:"pointer"}}/>
        </Link>
        </Grid>
      </Grid>
      

      <Grid component={"form"} onSubmit={handleSubmit}  container item xs={12} md={6} p={2}  flex flexDirection={"column"} margin={{xs:3,md:0}} gap={2} >
        
        <Typography variant="h5" textAlign={"center"}>
          Send us a message
        </Typography>
        <Grid  >
        <TextField fullWidth value={formValues.name} onChange={handleChange} required id="name" name="name" label="Name" variant="outlined" />
        </Grid>
        <Grid>
        <TextField  fullWidth value={formValues.phone} onChange={handleChange} required  id="phone" name="phone" label="Phone Number" variant="outlined" />
        </Grid>
        <Grid>
        <TextField fullWidth value={formValues.email} onChange={handleChange} required type="email" name="email" id="email" label="Email" variant="outlined" />
        </Grid>
        <Grid>
        <TextField multiline value={formValues.message} onChange={handleChange} fullWidth minRows={4} name="message" id="message" label="Message" variant="outlined" />
        </Grid>
        <Button type="submit" variant="outlined" sx={{width:"50%"}} >Submit</Button>
      </Grid>
     
      <Grid item xs={12} mt={4}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.6897292134936!2d76.16341237441051!3d11.78688283974505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5e11a136a4f1f%3A0xae8f066df9e9195!2sY%20U%20G%20A%20-%20Architectural%20Studio!5e0!3m2!1sen!2sin!4v1708314917497!5m2!1sen!2sin"
          width="100%"
          height="450"
          
         
          loading="lazy"
          
        ></iframe>
      </Grid>
    </Grid>
  );
}
