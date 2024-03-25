"use client"
import Image from 'next/image'
import React, { useRef,useEffect } from 'react'




const PreLoader = () => {

    const splashRef = useRef()
    // useEffect(() => {
    //     let timeout = setTimeout(()=>{
    //         splashRef.current.style.display = "none"
    //     },1500)

    //     return(()=>{
    //         clearTimeout(timeout)
    //     })
    
    // }, [])
  return (
    <div ref={splashRef}   style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10000,
        width: "100vw",
        height: "100vh",
        backgroundColor: "white", // Add background color if needed
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Image  alt="loading-icon" src={"/yuga_dark.png"} className='loader-img'   width={150} height={150}/>
        
        </div>
  )
}

export default PreLoader