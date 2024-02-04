"use client";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import Grid from "@mui/material/Grid";

export default function Home() {
  const items = ["/sample1.webp", "/sample2.webp"];

  return (
    <Grid >
      <Carousel>
        {items?.map((item, index) => (
          <Grid container key={index}>
            <Image
              src={item}
              width={0}
              height={0}
              style={{ width: "100%", maxHeight: "86vh", height: "auto" }}
              sizes="100vw"
              priority
              quality={65 }
              alt={`sample${index + 1}`}
              placeholder="blur"
              blurDataURL="/sample1.webp"
            />
          </Grid>
        ))}
      </Carousel>
      <Grid container padding={3} spacing={2}>
        <Grid item xs={12} md={6}>
        <Image
              src="/sample1.webp"
              width={0}
              height={0}
              style={{ width: "100%", maxHeight: "86vh", height: "auto" }}
              sizes="100vw"
              loading="lazy"
              quality={65 }
              alt={`sample1`}
            />

        </Grid>
        <Grid item xs={12} md={6}>
        <Image
              src="/sample2.webp"
              width={0}
              height={0}
              style={{ width: "100%", maxHeight: "86vh", height: "auto" }}
              sizes="65vw"
              loading="lazy"
              quality={65 }
              alt={`sample1`}
            />

        </Grid>


      </Grid>
      
    </Grid>
  );
}
