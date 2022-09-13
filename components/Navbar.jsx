import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <AppBar
        position="sticky"
        color="navBg"
        sx={{ boxShadow: "none",  }}
      >
        <Toolbar>
          <Typography sx={{cursor: "pointer"}} onClick={() => router.push("/")} >
            <Image
              src="/logo.png"
              alt="logo"
              height={40}
              width={50}
              quality={100}
            />
          </Typography>
          <Typography flexGrow={1}>
         
          </Typography>
          <Stack
            direction="row"
            flexGrow={1}
            sx={{ display: { xs: "none", sm: "block", md: "block" } }}
          >
            <Link href="/" passHref>
              <Button component="a" variant="none">
                Home
              </Button>
            </Link>
            <Link href="/projects" passHref>
              <Button component="a" variant="none">
                Projects
              </Button>
            </Link>
            <Link href="/about-us" passHref>
              <Button component="a" variant="none">
                About Us
              </Button>
            </Link>
            <Link href="/contact-us" passHref>
              <Button component="a" variant="none">
                Contact Us
              </Button>
            </Link>
          </Stack>
          <IconButton
            sx={{ display: { xs: "block", sm: "none", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={() => setOpen(!open)}>
        <Stack
          sx={{
            background: "#071A2F",
            padding: "20px",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Button
            onClick={() => setOpen(false)}
            type="button"
            sx={{
              width: "5px",
              marginLeft: "auto",
              color: "#ffffff",
              border: "1px dotted #ccc",
            }}
          >
            <CloseIcon></CloseIcon>
          </Button>
          <List>
            <ListItem>
              <Link href="/" passHref>
                <Button
                  component="a"
                  variant="none"
                  onClick={() => setOpen(!open)}
                >
                  Home
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/projects" passHref>
                <Button
                  component="a"
                  variant="none"
                  onClick={() => setOpen(!open)}
                >
                  Projects
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/about-us" passHref>
                <Button
                  component="a"
                  variant="none"
                  onClick={() => setOpen(!open)}
                >
                  About Us
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/contact-us" passHref>
                <Button
                  component="a"
                  variant="none"
                  onClick={() => setOpen(!open)}
                >
                  Contact Us
                </Button>
              </Link>
            </ListItem>
          </List>
        </Stack>
      </Drawer>
    </>
  );
}
