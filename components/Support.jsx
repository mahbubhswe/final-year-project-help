import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
} from "@mui/material";
import Image from "next/image";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import React from "react";
import Fade from "react-reveal/Fade";
export default function Support() {
  return (
    <Box sx={{ backgroundColor: "#001E3C", paddingY: "50px" }}>
      <Container>
        <Typography
          variant="bold"
          component="h1"
          sx={{ textAlign: "center", fontSize: "50px", fontWeight: 900 }}
        >
          Our Support
        </Typography>
      </Container>
      <Stack direction={{ xs: "column", sm: "row", md: "row" }} bgcolor="">
        <Box
          sx={{
            height: { xs: "400px", sm: "500px", md: "500px" },
            width: { xs: "100%", sm: "50%", md: "50%" },
            display: "grid",
            placeContent: "center",
          }}
        >
          <Image
            src="/support.png"
            alt="support"
            height={350}
            width={350}
            quality={100}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "50%" },
            height: { xs: "400px", sm: "500px", md: "500px" },
            display: "grid",
            placeContent: "center",
            textAlign: "center",
          }}
        >
          <List dense={true} sx={{margin:"0px 20px"}}>
            <Fade bottom delay={300} duration={2000}>
              <ListItem disablePadding>
                <ListItemIcon>
                  <SupportAgentIcon sx={{ color: "#1ED660" }} />
                </ListItemIcon>
                <ListItemText
                  className="supportText"
                  primary="Friendly Support"
                  secondary={
                    <Typography
                      href="tel:+8801623218618"
                      style={{ color: "#A19F90" }}
                    >
                      We are very friendly to support you.From starting to
                      finish your project you can discuss with us and get
                      support any time. Our mission is to help you to complete
                      your project successfully. Feel free to contact us through
                      the contact from or messenger.
                    </Typography>
                  }
                ></ListItemText>
              </ListItem>
            </Fade>
          </List>
        </Box>
      </Stack>
    </Box>
  );
}
