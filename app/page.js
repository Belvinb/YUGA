"use client"
import React from 'react';
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { Grid, useMediaQuery, useTheme, Typography } from "@mui/material";
import useSWR from "swr";
import bannerData from "../data/banner.json";
import Link from "next/link";
import { PreLoader } from "@/components";
import { Fade } from "react-awesome-reveal";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const parameters = {
  revalidateOnFocus: true,
  revalidateOnMount: true,
  revalidateOnReconnect: true,
  refreshWhenOffline: false,
  refreshWhenHidden: false,
};

export default function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { data, error, isLoading } = useSWR(
    "/api/get-featured-product",
    fetcher,
    parameters
  );

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <Grid>
      <Carousel>
        {bannerData.images?.map((item, index) => (
          <Grid container key={index}>
            <Grid
              item
              xs={12}
              sx={{ position: "relative", paddingBottom: "65%" }}
            >
              <Image
                src={item.url}
                fill
                priority
                style={{
                  cursor: "pointer",
                }}
                sizes="(max-width: 768px) 75vw, (max-width: 1200px) 80vw, 90vw"
                alt={`sample${index + 1}`}
              />
            </Grid>
          </Grid>
        ))}
      </Carousel>

      <Grid container padding={{ xs: 2, md: 7 }} spacing={4} rowGap={2}>
        {data ? data.map((item) => (
          <Grid key={item._id} item xs={12} md={6}>
            <Fade  triggerOnce>
              <Link
                href={`/projects/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    position: "relative",
                    paddingBottom: "65%" /* Aspect ratio 4:3 */,
                  }}
                  className="project-image"
                >
                  <Image
                    src={item.main_image}
                    fill
                    style={{
                      cursor: "pointer",
                    }}
                    sizes="(max-width: 768px) 75vw, (max-width: 1200px) 80vw, 90vw"
                    priority
                    alt={item.project_name}
                  />
                </div>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Optima",
                    fontWeight: "bolder",
                    paddingTop: "1rem",
                    color:"black"
                  }}
                >
                  {item.project_name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Optima",
                    fontWeight: "bolder",
                    color:"gray"
                  }}
                >
                  {item.location}
                </Typography>
              </Link>
            </Fade>
          </Grid>
        )):<PreLoader/>}
      </Grid>
    </Grid>
  );
}
