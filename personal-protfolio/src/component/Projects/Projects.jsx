"use client";
import "./Projects.css";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  

const projects = [
  {
    label: "BrainForce",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "LifeTracker",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function Projects() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = projects.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <section>
      <div className="headingTitle " id="right">
        <h3>
                  <span id="blue-span">My</span> Projects{" "}
                  
              </h3>
              
              
      </div>
      <div className="projects-section">
        <Box sx={{ maxWidth: 900, flexGrow: 1 ,maxHeight:"50%"}}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              background: "#121111",
              borderRadius: "30px",
              marginBottom: "0px",
              color: "white",
              fontWeight: "bold",
              padding: "5px",
            }}
          >
                      <Typography
                          
                          sx={{
                              color: "whitee",
                              fontWeight: "bold",
                              fontSize: "30px",
                                textAlign: "center",
                          }}
                      >{projects[activeStep].label}</Typography>

            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {projects.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 155,
                        display: "block",
                        maxWidth: 800,
                        objectFit: "cover",
                          margin: "auto",
                        marginTop: "10px",
                        borderRadius: "15px",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                          />
                          
                          
                      ) : null}
                      
                </div>
              ))}
            </AutoPlaySwipeableViews>
          </Paper>

          <MobileStepper
            sx={{
              background: "#121111",
              borderRadius: "30px",
              marginTop: "10px",
              color: "white",
              fontWeight: "bold",
            }}
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </div>
    </section>
  );
}

export default Projects;
