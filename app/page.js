"use client";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import Grid from "@mui/material/Grid";
import useSWR from 'swr'

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
const fetcher = (...args) => fetch(...args).then(res => res.json())
const parameters = {
  revalidateOnFocus: true,
  revalidateOnMount: true,
  revalidateOnReconnect: true,
  refreshWhenOffline: false,
  refreshWhenHidden: false,
  refreshInterval: 0,
  staleTime : 300000
};

export default function Home() {
//   const banner = await getBanners();
//   console.log(banner)

//  console.log(final)
const { data, error, isLoading } = useSWR('yugaarchitecturalstudio.vercel.app/api/bannerimage', fetcher,parameters)
let carouseldata
if(data){

  carouseldata = data[0].images 
}
console.log(carouseldata)

  return (
    <Grid>
      <Carousel>
        {carouseldata?.map((item, index) => (
          <Grid container key={index}>
            <Image
              src={item}
              width={0}
              height={0}
              style={{ width: "100%", height:"auto",maxHeight:"86vh",transform: "scale(0.96)"}}
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
            style={{ width: "100%", maxHeight: "85vh", height: "auto" }}
            sizes="100vw"
            loading="lazy"
            quality={65}
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
            quality={65}
            alt={`sample1`}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
