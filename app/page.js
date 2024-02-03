"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Button from '@mui/material/Button'
import Carousel from 'react-material-ui-carousel'

export default function Home() {

  const items = [
    "/sample.webp",
    "/sample2.webp",
    "/sample3.webp"

  ]

  return (
    <main  >

      <Carousel>
      {items.map((item, index) => (
          <div key={index} style={{ width: "100%", height: "100vh", position: "relative" }}>
            <Image src={item} fill sizes="100vw" quality={80}  alt={`sample${index + 1}`} />
          </div>
        ))}
      </Carousel>
dfg

    
    </main>
  );
}
