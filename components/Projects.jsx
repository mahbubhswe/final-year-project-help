import {
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import projectsPic from "../utils/projectPic.js";
import Image from "next/image";
import CountUp from "react-countup";
import { useRouter } from "next/router.js";
import Marquee from "react-fast-marquee";
export default function AboutUs() {
  const router = useRouter();
  return (
    <Container sx={{ marginY: "100px" }}>
      <Typography
        variant="bold"
        component="h1"
        sx={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: 900,
          my: "30px",
        }}
      >
        <Typewriter
          options={{
            strings: "Projects Done",
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
      <Divider sx={{ my: "10px" }}>
        <Chip
          sx={{ fontSize: "30px", padding: "10px", background: "#071A2F" }}
          label={<CountUp start={0} end={47} duration={1} />}
        ></Chip>
      </Divider>
      <Marquee gradient={false} speed={10}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {projectsPic.map((item) => (
            <Grid
              item
              key={item.id}
              sx={{ margin: "5px" }}
              className="projectItem"
            >
              <Stack spacing={1}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={200}
                  quality={100}
                />
                <Typography align="center">{item.title}</Typography>
                <Button onClick={() => router.push(item.link)}>Live</Button>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Marquee>
    </Container>
  );
}
