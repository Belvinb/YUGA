import { Grid, Typography } from "@mui/material";

export default async function Contact() {
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
      <Grid container item xs={12} md={6} flex sx={{justifyContent:'center',alignItems:"center"}}>
        <Grid item>

        
        <Typography variant="h5"  >
            Y U G A - Architectural Studio
            
        </Typography>
        <Typography variant="h5" >
            Thazheyangadi, Pulpally
            
        </Typography>
        <Typography variant="h5" >
            Kerala, 673579
            
        </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        contact form
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
