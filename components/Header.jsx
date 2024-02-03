"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import Link from "next/link";

const pages = ["Projects", "About", "Contact"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="sticky" sx={{background:"white"}}   >
      <Container maxWidth="xl"  >
        <Toolbar disableGutters sx={{height:100,alignItems:"center"}}>
          <Link href="/">
          <Image src={"/yuga_dark.png"} alt="brand-logo" width={115} height={115} priority />
          </Link>
          <Typography
            variant="h4"
            noWrap
            
            
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 800,
              letterSpacing: "0.9rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            YUGA
          </Typography>

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: "0.9rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            YUGA
          </Typography>
          <Box mr={5} sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent:"right" }}>
            {pages.map((page) => (
              <Link key={page} href={page.toLowerCase()} style={{textDecoration:"none"}}>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block",textTransform:"none",fontSize:"medium"}}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              
            >
              <MenuIcon sx={{color:"black"}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
               
              }}
            >
              <Paper elevation={0}  sx={{ width: '100vw',height:"auto"}}>
                {pages.map((page,index) => (
                  <Link key={page} href={page.toLowerCase()} style={{textDecoration:"none",color:"black"}}>
                  <MenuItem  onClick={handleCloseNavMenu}  style={{ marginBottom: index < pages.length - 1 ? '50px' : 0}}>
                    <Typography  sx={{width:"100%"}}>{page}</Typography>
                  </MenuItem>
                  </Link>
                ))}
              </Paper>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>
  );
}
export default Header;
