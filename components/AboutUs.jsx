import { Container, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
export default function AboutUs() {
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
            strings: "About Us",
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
      <Typography className="WhyUsItemLeft">
        {`Our mission is very simple. Our main target is help you to complete you project.
Many student don’t know how start thir final year project and to complete.In this case we are here to help you.`}
      </Typography>
    </Container>
  );
}
