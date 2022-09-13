import * as React from "react";
import TimelineContent from "@mui/lab/TimelineContent";
import { Box, Typography } from "@mui/material";
import Fade from "react-reveal/Fade";
export default function WhyChoiceUsMobile() {
  return (
    <Box sx={{ backgroundColor: "#0A1929", paddingY: "50px" }}>
      {/* <Typography
        variant="bold"
        component="h1"
        sx={{ textAlign: "center", fontSize: "50px", fontWeight: 900 }}
      >
        Why Choice Us
      </Typography> */}
      <Box sx={{ backgroundColor: "#0A1929", paddingY: "50px" }}>
        <Typography
          variant="bold"
          component="h1"
          sx={{ textAlign: "center", fontSize: "50px", fontWeight: 900 }}
        >
          Why Choice Us
        </Typography>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Beginner Friendly
          </Typography>
          <Fade bottom delay={300} duration={2000}>
            <Typography className="WhyUsItemLeft">
              We provide beginner friendly service in professional way.We try to
              keep simple everything as much as possible.
            </Typography>
          </Fade>
        </TimelineContent>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Budget Friendly
          </Typography>
          <Fade bottom delay={300} duration={2000}>
            <Typography className="WhyUsItemLeft">
              {`Budget is a main topic when it’s paid.But you don’t need to
                think much more about that.We have chief rate range that's start
                from 5000 tk only.Basically it’s totally dopants on your project
                requirment`}
            </Typography>
          </Fade>
        </TimelineContent>

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

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Faster Way
          </Typography>
          <Fade bottom delay={300} duration={2000}>
            <Typography className="WhyUsItemLeft">
              Faster project delivery within project shedule.Don’t need to wait
              and wary about that.Try to be ready alway.
            </Typography>
          </Fade>
        </TimelineContent>

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

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Responsive Design
          </Typography>
          <Fade bottom delay={300} duration={2000}>
            <Typography className="WhyUsItemLeft">
              We are heighly focus on responsive design for best user experience
              in desktop, tab and mobile device. Optimizing your app for large
              screens improves the overall experience for your users. Responsive
              design allows your website content to flow freely across all
              screen resolutions and sizes, and renders it to look great on all
              devices.
            </Typography>
          </Fade>
        </TimelineContent>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Professional Development
          </Typography>
          <Fade bottom delay={300} duration={2000}>
            <Typography className="WhyUsItemLeft">
              We complete project professionaly with beautiful design what you
              want. We have highly skilled engineers with excellent technical
              knowledge and experience
            </Typography>
          </Fade>
        </TimelineContent>

        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Latest Technology
          </Typography>
          <Fade bottom delay={300} duration={2000}>
            <Typography className="WhyUsItemLeft">
              We used latest technology for your project. We have highly skilled
              engineers with excellent technical knowledge and experience in
              using latest software standards, tools, platforms, frameworks and
              technologies.
            </Typography>
          </Fade>
        </TimelineContent>
      </Box>
    </Box>
  );
}
