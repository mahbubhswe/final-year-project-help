import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import StartIcon from "@mui/icons-material/Start";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import MoneyIcon from "@mui/icons-material/Money";
import AbcIcon from "@mui/icons-material/Abc";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
export default function WhyChoiceUsDesktop() {
  return (
    <Box

      sx={{ backgroundColor: "#0A1929", paddingY: "50px" }}
    >
      <Typography
        variant="bold"
        component="h1"
        sx={{
          textAlign: "center",
          fontSize: "50px",
          fontWeight: 900,
        }}
      >
        <Typewriter
          options={{
            strings: "Why Choice Us",
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ background: "#001E3C" }}>
              <StartIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Beginner Friendly
            </Typography>
            <Fade bottom delay={300} duration={2000}>
              <Typography className="WhyUsItemLeft">
                We provide beginner friendly service in professional way.We try
                to keep simple everything as much as possible.
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ background: "#001E3C" }}>
              <MoneyIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Budget Friendly
            </Typography>
            <Fade bottom delay={300} duration={2000}>
              <Typography className="WhyUsItemRight">
                {`Budget is a main topic when it’s paid.But you don’t need to
                think much more about that.We have chief rate range that's start
                from 5000 tk only.Basically it’s totally dopants on your project
                requirment`}
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ background: "#001E3C" }}>
              <AbcIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Easy Way
            </Typography>
            <Fade bottom delay={300} duration={2000}>
              <Typography className="WhyUsItemLeft">
                Our skilled developer team develop you project in easy way.Keep
                code much more understandable.
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ background: "#001E3C" }}>
              <ElectricBoltIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Faster Way
            </Typography>
            <Fade bottom delay={300} duration={2000}>
              <Typography className="WhyUsItemRight">
                Faster project delivery within project shedule.Don’t need to
                wait and wary about that.Try to be ready alway.
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ background: "#001E3C" }}>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Clean Code
            </Typography>
            <Fade bottom delay={300} duration={2000}>
              <Typography className="WhyUsItemLeft">
                We try to keep source code is clean as much as possible. Skilled
                developer work with us.They are responsible for this.
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ background: "#001E3C" }}>
              <MobileFriendlyIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Responsive Design
            </Typography>
            <Fade bottom delay={300} duration={2000}>
              <Typography className="WhyUsItemRight">
                We are heighly focus on responsive design for best user
                experience in desktop, tab and mobile device. Optimizing your
                app for large screens improves the overall experience for your
                users. Responsive design allows your website content to flow
                freely across all screen resolutions and sizes, and renders it
                to look great on all devices.
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ background: "#001E3C" }}>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Professional
            </Typography>
            <Fade bottom delay={300} duration={2000}>
              <Typography className="WhyUsItemLeft">
                We complete project professionaly with beautiful design what you
                want. We have highly skilled engineers with excellent technical
                knowledge and experience
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ background: "#001E3C" }}>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Latest Technology
            </Typography>
            <Fade bottom delay={300} duration={2000}>
              <Typography className="WhyUsItemRight">
                We used latest technology for your project. We have highly
                skilled engineers with excellent technical knowledge and
                experience in using latest software standards, tools, platforms,
                frameworks and technologies.
              </Typography>
            </Fade>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
