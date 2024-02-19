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
import localFont from "next/font/local";
import styles from "../app/page.module.css";
import { Grid,useLocation } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { useRouter,usePathname } from "next/navigation";

const pages = ["Projects", "About", "Contact"];

// const myFont = localFont({ src: '../public/font/Lovelo-Black.woff2' })
function Header() {
  const router = useRouter();
  const pathname = usePathname()
 
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(!drawerOpen);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ background: "#ffffff",boxShadow:"none"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: 100, alignItems: "center" }}>
          <Link href="/">
            <Image
              src={"/yuga_dark.png"}
              alt="brand-logo"
              width={115}
              height={115}
              priority
            />
          </Link>
          <Grid>
            <Typography
              variant="h4"
              noWrap
              // className={styles.testFont}

              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Lovelo",
                // fontWeight: 200,
                letterSpacing: "0.9rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              YUGA
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "black",
                fontFamily: "Lovelo", // Use any font family you prefer
                fontSize: "0.8rem",
                textTransform: "none",
              }}
            >
              Architectural Studio
            </Typography>
          </Grid>

          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Grid container direction="column">
            <Typography
              variant="h5"
              noWrap
              component="a"
              // className={myFont.className}
              // href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Lovelo",
                // fontWeight: 700,
                letterSpacing: "0.9rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              YUGA
            </Typography>
            <Typography
              noWrap
              variant="subtitle2"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                color: "black",
                fontFamily: "Lovelo", // Use any font family you prefer
                fontSize: "0.6rem",
              }}
            >
              Architectural Studio
            </Typography>
          </Grid>

          <Box
            mr={5}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "right",
            }}
          >
            {pages.map((page) => (
              // <Link
              //   key={page}
              //   href={page.toLowerCase()}
              //   style={{ textDecoration: "none" }}
              //   shallow
              // >
              <Button
                key={page}
                onClick={() => router.replace(`/${page.toLowerCase()}`)}
                sx={{
                  my: 2,
                  color: pathname == `/${page.toLowerCase()}` ? '#ffc300':'black',
                  display: "block",
                  textTransform: "none",
                  fontSize: "medium",
                  fontFamily: "Lovelo",
                }}
              >
                {page}
              </Button>
              // </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer}
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            {/* <Menu
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
              <Paper elevation={0} sx={{ width: "100vw", height: "auto" }}>
                {pages.map((page, index) => (
                  <Link
                    key={page}
                    href={page.toLowerCase()}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      style={{
                        marginBottom: index < pages.length - 1 ? "50px" : 0,
                      }}
                    >
                      <Typography sx={{ width: "100%", fontFamily: "Lovelo" }}>
                        {page}
                      </Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Paper>
            </Menu> */}
            <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer}>
              <Paper
                elevation={0}
                sx={{ width: "80vw", height: "100vh", background: "#ffc300" }}
              >
                {pages.map((page, index) => (
                  // <Link
                  //   key={page}
                  //   href={page.toLowerCase()}
                  //   style={{ textDecoration: "none", color: "black" }}
                  // >
                  <MenuItem
                    onClick={(e) => {
                      toggleDrawer(e)
                      router.replace(`/${page.toLowerCase()}`);
                    }}
                    key={page}
                    style={{
                      marginBottom: index < pages.length - 1 ? "50px" : 0,
                    }}
                  >
                    <Typography sx={{ width: "100%", fontFamily: "Lovelo" }}>
                      {page}
                    </Typography>
                  </MenuItem>
                  // </Link>
                ))}
              </Paper>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
