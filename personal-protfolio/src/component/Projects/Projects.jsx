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
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  

const projects = [
    {
        label: "BrainForce",
        imgPath: "brainforce.png",
        github: "https://github.com/ojakanbi/BrainForceFrontEnd",
        website: " https://brainforce-ui.onrender.com/ "
    },
    {
        label: "LifeTracker",
        imgPath: "lifetracker.png",
        github: "https://github.com/ojakanbi/LifetrackerSalesforce",
        website: "https://lifetracker-frontend-oj.onrender.com"
    },
    {
        label: "Flixster",
        imgPath: "flixster.png",
        github: "https://github.com/ojakanbi/ojakanbi.github.io",
        website: "https://ojakanbi.github.io"
    },
    {
      label: "StoreFront",
      imgPath: "storefront.png",
      github: "https://github.com/ojakanbi/Slack-store-Salesforce?tab=readme-ov-file",
      website: "https://ojakanbi.github.io"
  },
    {
        label: "Personal Website",
        imgPath: "personalweb.png",
        github: "https://github.com/ojakanbi/Personal-protfolio",
        website: "https://ojakanbi-ojakanbi.vercel.app/"
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
      <div className="section-heading " id="projects">
        <h3>
                  <span className="span">My</span> Projects{" "}
                  
              </h3>
              
              
      </div>
      <div className="projects-section">
        <Box sx={{ maxWidth: 900, flexGrow: 1 , display:"flex", alignContent:"center", flexDirection: "column", justifyContent:"center"}}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              background: "Transparent",
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
                      
                      <Typography
                          
                          sx={{
                              color: "whitee",
                              fontWeight: "bold",
                              fontSize: "30px",
                                textAlign: "center",
                          }}
                      >
                          <Link
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "30px",
                                  textAlign: "center",
                                    marginRight: "10px",

                                }}
                          
                              href={projects[activeStep].github}><GitHubIcon></GitHubIcon></Link>
                        
                          <Link
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "30px",
                                  textAlign: "center",


                                }}
                          
                              href={projects[activeStep].website}><OpenInBrowserIcon></OpenInBrowserIcon></Link>
                          
                    
                           </Typography>
                  </Paper>
                  
                  

          <MobileStepper
            sx={{
              background: "#121111",
              borderRadius: "30px",
              marginTop: "10px",
              color: "white",
              fontWeight: "bold",
              marginBottom: "100px",
              background: "#444",
              width: "100%"
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
