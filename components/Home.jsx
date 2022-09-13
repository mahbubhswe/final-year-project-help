import { Box } from "@mui/material";
import React from "react";
import AfterNav from "./AfterNav";
import Support from "./Support";
import WhyChoiceUsDesktop from "./WhyChoiceUsDesktop";
import WhyChoiceUsMobile from "./WhyChoiceUsMobile";
import Technology from "./Technology";
export default function Home() {
  return (
    <Box>
      <AfterNav />
      <Technology />
      <Box sx={{ display: { xs: "none", sm: "block", md: "block" } }}>
        <WhyChoiceUsDesktop />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none", md: "none" } }}>
        <WhyChoiceUsMobile />
      </Box>
      <Support />
    </Box>
  );
}
