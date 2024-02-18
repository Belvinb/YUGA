"use client";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import useSWR from "swr";
import bannerData from "../data/banner.json";
import Link from "next/link";
// const getBanners = async () => {
//   try {
//     const res = await fetch("http://localhost:3000/api/bannerimage");
//     const data = await res.json()
//     console.log(res,"pages")
//     if(!res.ok){
//       throw new Error("Failed to fetch banners")
//     }
//     return data
//   } catch (error) {
//     console.log(error);
//   }
// };
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

export default function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { data, error, isLoading } = useSWR(
    "/api/get-featured-product",
    fetcher,
    parameters
  );
  console.log(data);

  return (
    <Grid>
      <Carousel>
        {bannerData.images?.map((item, index) => (
          <Grid container key={index}>
            <Image
              src={item.url}
              width={0}
              height={0}
              style={{
                width: "100%",
                height: isSmallScreen ? "35vh" : "auto",
                maxHeight: "86vh",
                // minHeight: isSmallScreen ? "40vh" : "86vh",
                transform: "scale(0.93)",
              }}
              sizes="100vw"
              priority
              quality={65}
              alt={`sample${index + 1}`}
              placeholder="blur"
              blurDataURL="/sample1.webp"
            />
          </Grid>
        ))}
      </Carousel>
      <Grid container padding={{xs:2,md:7}} spacing={2}>
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
              alt={item.project_name}
              className="project-image"
            />

            </Link>
            <p>{item.project_name}</p>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
