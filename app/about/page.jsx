"use client";
import Image from "next/image";
import { Button, Container, Grid, useMediaQuery, useTheme} from "@mui/material"
// import { useEffect } from "react";
import Banner from "@/models/bannerModel";
import connectDB from "@/lib/db";
// import Image from "next/image";
import Carousel from "react-material-ui-carousel";


export default function  About() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // await connectDB()
  // const data = await Banner.find()
  // console.log(data[0].images)
  // const final = await data[0].images
  // useEffect(() => {
  //   fetchBanners();
  // }, []);

  // async function fetchBanners() {
  //   const data = await fetch("http://localhost:3000/api/bannerimage");
  //   const final = await data.json();
  //   console.log(final, "data");
  // }

  return (
    <Grid container>
      
   
      <Grid item xs={12}   sx={{ display: "flex", justifyContent: "center" }}>
        <Image
          src={"/sample2.webp"}
          alt="about"
          width={0}
          height={0}
          style={{height:"auto",width: isSmallScreen ? "100%" : "50%"}}
          sizes="100vw"
        />
      </Grid>
     
      <Grid item xs={12} padding={3}>
        Y U G A started in 2019 back in the days when the founders' started
        practicing independently, as a small office at home, which gave the
        comfort of home space with the flexibility of work space. When the firm
        expanded in 2020, the small home office perception stuck and is hence
        augmented to Y U G A Y U G A believe in the simplicity and humbleness of
        a design which shapes the project into a sensible work of art. We
        approaches the design as a process which beautifully unfolds into a
        series of ideas and relentlessly we work up on it to nurture the
        project. We believe the designs evolve with time, which naturally weaves
        itself, often astonished b y the ultimate outcome evolving from our
        distinct ideas. We encourage our clients to do what they do the best, to
        dream without inhibitions. Then we get to work doing what we do the
        best, transforming them into designs that house their bigger dreams
      </Grid>
    </Grid>
  );
}
