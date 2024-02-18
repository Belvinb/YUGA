"use client";
import useSWR from "swr";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const parameters = {
  revalidateOnFocus: true,
  revalidateOnMount: true,
  revalidateOnReconnect: true,
  refreshWhenOffline: false,
  refreshWhenHidden: false,
  refreshInterval: 0,
  staleTime: 300000,
};

export default function Project() {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { data, error, isLoading } = useSWR(
    "/api/get-allproducts",
    fetcher,
    parameters
  );

  return (
    <Grid container   paddingLeft={{xs:2,md:7}} paddingRight={{xs:2,md:7}} spacing={3}>
      {data?.map((item) => (
        <Grid key={item._id} item xs={12} md={6}>
            <Link href={`/projects/${item._id}`}
                style={{ textDecoration: "none" }}>
          <Image
            src={item.main_image}
            width={0}
            height={0}
            style={{
              width: "100%",
              height: isSmallScreen ? "35vh" : "55vh",
              transform: "scale(1)",
              cursor: "pointer",
            }}
            sizes="100vw"
            loading="lazy"
            quality={65}
            alt={`sample1`}
            className="project-image"
            
          />
            </Link>
          <p>{item.project_name}</p>
        </Grid>
      ))}
    </Grid>
  );
}
