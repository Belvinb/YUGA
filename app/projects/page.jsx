"use client";
import useSWR from "swr";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { PreLoader } from "@/components";

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
  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <Grid
      container
      paddingLeft={{ xs: 2, md: 7 }}
      paddingRight={{ xs: 2, md: 7 }}
      spacing={3}
    >
      {data?.map((item) => (
      <Grid key={item._id} item xs={12} sm={6} >
      <Link href={`/projects/${item._id}`} passHref>
        
          <div style={{ position: "relative", paddingBottom: "60%" /* Aspect ratio 4:3 */ }}>
            <Image
              src={item.main_image}
              fill
              style={{cursor:"pointer"}}
            
              // quality={65}
              alt={`sample1`}
              className="project-image"
              sizes="(max-width: 768px) 65vw, (max-width: 1200px) 75vw, 100vw"
            />
          </div>
        
      </Link>
      <p>{item.project_name}</p>
    </Grid>
      ))}
    </Grid>
  );
}
