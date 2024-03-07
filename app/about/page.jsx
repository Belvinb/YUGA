"use client";
import Image from "next/image";
import { Grid, useMediaQuery, useTheme, Typography } from "@mui/material";
// import { useEffect } from "react";
import Banner from "@/models/bannerModel";
import connectDB from "@/lib/db";
// import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { PreLoader } from "@/components";

export default function About() {
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
        <Grid container item xs={12} md={6} padding={4} flex justifyContent={"center"} alignItems={"center"}>
        <Typography variant="h4" sx={{fontFamily:"Optima"}} >About </Typography>

      </Grid>
      <Grid item xs={12} md={6} padding={3} sx={{ display: "flex" }}>
        <Image
          src= "https://res.cloudinary.com/dttpvfcz1/image/upload/v1708922902/yuga/about/zd70blk6y4zebkccdue8.jpg"
          alt="about"
          width={0}
          height={0}
          style={{ height: "100%", width: isSmallScreen ? "100%" : "100%" }}
          sizes="(max-width: 768px) 75vw, (max-width: 1200px) 80vw, 90vw"
          
          quality={65}
        />
      </Grid>
      <Grid item xs={12} md={6} padding={3} flex>
        <Image
          src="https://res.cloudinary.com/dttpvfcz1/image/upload/v1708922902/yuga/about/jev5cqskgtlijhhxbds9.jpg"
          alt="about"
          width={0}
          height={0}
          style={{ height: "100%", width: isSmallScreen ? "100%" : "100%" }}
          sizes="(max-width: 768px) 75vw, (max-width: 1200px) 80vw, 90vw"
        
        />
      </Grid>

    
        <Grid
          item
          xs={12}
          md={6}
          padding={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Horizontal centering
            flexWrap:"wrap"

        
          }}
        >
          <Typography sx={{fontFamily:"Optima",fontSize:"large",fontWeight:"bold",textAlign:"justify",textJustify:"inter-character",}}>
            Y U G A started in 2019 back in the days when the founders started
            practicing independently, as a small office at home, which gave the
            comfort of home space with the flexibility of work space. When the
            firm expanded in 2020, the small home office perception stuck and is
            hence augmented to Y U G A. <br/> We believe in the simplicity and
            humbleness of a design which shapes the project into a sensible work
            of art. We approaches the design as a process which beautifully
            unfolds into a series of ideas and relentlessly we work up on it to
            nurture the project. We believe the designs evolve with time, which
            naturally weaves itself, often astonished by the ultimate outcome
            evolving from our distinct ideas. We encourage our clients to do
            what they do the best, to dream without inhibitions. Then we get to
            work doing what we do the best, transforming them into designs that
            house their bigger dreams
          </Typography>
        </Grid>
    </Grid>
  );
}
