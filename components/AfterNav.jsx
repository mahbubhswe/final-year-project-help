import { Box, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TextTransition, { presets } from "react-text-transition";
const TEXTS = ["with latest technology", "with our help", "with our support"];

function AfterNav() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Stack
      className="dynamicAnimation"
      direction={{ xs: "column-reverse", sm: "row", md: "row" }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "50%", md: "50%" },
          height: { xs: "450px", sm: "500px", md: "500px" },
          display: "grid",
          placeContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="bold"
          component="h1"
          sx={{ fontSize: "50px", fontWeight: 900 }}
        >
          Complete your project
          <TextTransition springConfig={presets.slow} className="dynamicText">
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </Typography>
      </Box>
      <Box
        sx={{
          height: { xs: "300px", sm: "500px", md: "500px" },
          width: { xs: "100%", sm: "50%", md: "50%" },
          display: "grid",
          placeContent: "center",
        }}
      >
        <Image
          src="/student.svg"
          alt="student"
          height={300}
          width={300}
          quality={100}
        />
      </Box>
    </Stack>
  );
}

export default dynamic(() => Promise.resolve(AfterNav), {
  ssr: false,
});
