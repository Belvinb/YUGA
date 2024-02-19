"use client";
import useSWR from "swr";
import { Grid, useTheme, useMediaQuery } from "@mui/material";
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
  if(isLoading){
    return(
      <PreLoader/>
    )
  }
  return (
    <Grid container>
      <Grid container item xs={12}>
        <Image
          src={data?.main_image}
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "auto",
            transform: "scale(1)",
            cursor: "pointer",
          }}
          sizes="100vw"
          priority
          quality={65}
          alt={`sample1`}
        />
      </Grid>
      {data?.project_images.map((item)=>(

      <Grid item xs={12} p={3} >
      <Image
          src={item}
          width={0}
          height={0}
          style={{
            width: "100%",
            height: "auto",
            transform: "scale(1)",
            cursor: "pointer",
          }}
          sizes="100vw"
         
          quality={65}
          alt={`sample1`}
        />

      </Grid>
      ))}
    </Grid>
  );
}
