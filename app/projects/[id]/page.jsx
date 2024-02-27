"use client";
import useSWR from "swr";
import { Grid, useTheme, useMediaQuery,Typography } from "@mui/material";
import Image from "next/image";
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

export default function SingleProject({ params }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { data, error, isLoading } = useSWR(
    `/api/get-singleproduct/${params.id}`,
    fetcher,
    parameters
  );
  console.log(data);
  if (isLoading) {
    return <PreLoader />;
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ position: "relative", paddingBottom: "65%" }}>
        <Image
          src={data?.main_image}
          // width={0}
          // height={0}
          // style={{
          //   width: "100%",
          //   height: "auto",
          //   transform: "scale(1)",
          //   cursor: "pointer",
          // }}
          // sizes="100vw"
          // priority
          // quality={65}

          fill
          loading="lazy"
          sizes="(max-width: 768px) 75vw, (max-width: 1200px) 80vw, 90vw"
          alt={`sample1`}
        />
      </Grid>
      <Grid container p={{xs:4,md:10}} rowGap={5}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{fontFamily:"Optima",fontWeight:"bolder"}}>{data?.project_name}</Typography>
          <Typography>Location: {data?.location}</Typography>
        </Grid>
        <Grid item xs={12} md={6} flex flexWrap={"wrap"}>
          <Typography>{data?.details}</Typography>
        </Grid>
      </Grid>

      {data?.project_images.map((item) => (
        <Grid
          key={item}
          item
          xs={12}
          mt={2}
          sx={{ position: "relative", paddingBottom: "65%" }}
        >
          <Image
            src={item}
            fill
            // width={0}
            // height={0}
            // style={{
            //   width: "100%",
            //   height: "auto",
            //   transform: "scale(1)",
            //   cursor: "pointer",
            // }}
            sizes="(max-width: 768px) 75vw, (max-width: 1200px) 80vw, 90vw"
            // quality={65}
            alt={`sample1`}
            loading="lazy"
          />
        </Grid>
      ))}
    </Grid>
  );
}
