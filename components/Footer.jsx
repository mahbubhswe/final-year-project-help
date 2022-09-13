import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  List,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";
export default function Support() {
  const [mess, seMess] = useState(null);

  const submitMail = (e) => {
    e.preventDefault();
    e.target.reset();
    seMess("Mail has been submited.");
  };
  return (
    <Box sx={{ backgroundColor: "#292522", paddingY: "50px" }}>
      <Stack direction={{ xs: "column", sm: "row", md: "row" }} bgcolor="">
        <Box
          sx={{
            height: "300px",
            width: { xs: "100%", sm: "50%", md: "50%" },
            display: "grid",
            placeContent: "center",
            paddingLeft: "10px",
          }}
        >
          <Typography mb={2} variant="bold" component="h2">
            Submit your email to get regular update
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            component="form"
            onSubmit={submitMail}
          >
            <TextField
              type="email"
              size="small"
              required
              placeholder="Enter your email address"
              sx={{ background: "#242527" }}
            />
            <Button
              type="submit"
              variant="contained"
              size="small"
              color="secondary"
            >
              Submit now
            </Button>
          </Stack>
          <Typography color="secondary">{mess ? mess : null}</Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "50%" },
            height: "300px",
            display: "grid",
            placeContent: "center",
            textAlign: "center",
          }}
        >
          <List dense={true}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CallIcon sx={{ color: "#FFFFFF" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Phone"
                  secondary={
                    <Typography
                      href="tel:+8801623218618"
                      component="a"
                      style={{ color: "#A19F90" }}
                    >
                      +8801623218618
                    </Typography>
                  }
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EmailIcon sx={{ color: "#FFFFFF" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography style={{ color: "#FFFFFF" }}>Email</Typography>
                  }
                  secondary={
                    <Typography
                      href="mailto:finalyearprojecthelp@gmail.com"
                      component="a"
                      style={{ color: "#A19F90" }}
                    >
                      finalyearprojecthelp@gmail.com
                    </Typography>
                  }
                ></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <WhatsAppIcon sx={{ color: "#FFFFFF" }} />
                </ListItemIcon>
                <ListItemText
                  primary="WhatsApp"
                  secondary={
                    <Typography
                      href="https://wa.me/+8801623218618"
                      component="a"
                      style={{ color: "#A19F90" }}
                    >
                      +8801623218618
                    </Typography>
                  }
                ></ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Stack>
      <Divider sx={{ width: "95%", margin: "auto", marginY: "50px" }}></Divider>
      <Typography sx={{ textAlign: "center" }}>
        Copyright © {new Date().getFullYear()} Final Year Project Help
      </Typography>
    </Box>
  );
}
