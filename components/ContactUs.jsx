import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import Typewriter from "typewriter-effect";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
export default function AboutUs() {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const router = useRouter();
  const sendEmail = async (e) => {
    e.preventDefault();
    e.target.reset();
    setOpen(true);
    try {
      const { data } = await axios.post("/api/sendEmail", {
        subject: subject,
        email: email,
        message: message,
      });
      setOpen(false);
      if (data == "Mail has been sent successfully") {
        Swal.fire("Success", data, "success");
      } else {
        Swal.fire("Opps...!", data, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container sx={{ marginY: "100px", paddingX: { md: "200px" } }}>
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
            strings: "Send E-mail",
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
      <Stack
        spacing={1}
        component="form"
        onSubmit={sendEmail}
        className="contactUsForm"
      >
        <TextField
          className="styleTextField"
          size="large"
          variant="standard"
          type="email"
          placeholder="Email address"
          required
          InputProps={{ disableUnderline: true }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          className="styleTextField"
          size="large"
          variant="standard"
          type="text"
          placeholder="Subject"
          required
          InputProps={{ disableUnderline: true }}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          className="styleTextField"
          size="large"
          variant="standard"
          type="text"
          placeholder="Write your message"
          required
          multiline
          rows={6}
          InputProps={{ disableUnderline: true }}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            type="button"
            variant="contained"
            color="error"
            size="small"
            onClick={() => router.push("/")}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => sendEmail}
          >
            Send mail
          </Button>
        </div>
      </Stack>
      <Backdrop open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
