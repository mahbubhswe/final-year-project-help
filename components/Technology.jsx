import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import technologyItems from "../utils/technologyIcons.js";
import Marquee from "react-fast-marquee";

export default function Support() {
  return (
    <Box sx={{ height: "500px", backgroundColor: "#111C2E", paddingY: "60px" }}>
      <Typography
        variant="bold"
        component="h1"
        sx={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: 900,
          my: "50px",
        }}
      >
        Technology Used
      </Typography>

      <Marquee gradient={false}>
        {technologyItems.map((item) => (
          <Image
            key={item.id}
            src={item.img}
            alt={item.title}
            quality={100}
            height={100}
            width={200}
            style={{ margin: "10px" }}
          />
        ))}
      </Marquee>
    </Box>
  );
}
