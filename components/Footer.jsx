import React from "react";
import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <Grid container p={1.5} justifyContent={"space-between"} sx={{background:"#ffc300"}} >
      <Grid item sx={{fontFamily:"Optima"}} >
        &copy; Yuga Architectural Studio 2024
      </Grid>

      {/* <Grid item>
        Facebook
      </Grid> */}
    </Grid>
  );
};

export default Footer;
