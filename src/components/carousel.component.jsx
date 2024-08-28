import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { hero, rock, spider, ass } from './imageData';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco Oakland Bay Bridge, United States',
    imgPath: spider,
  },
  {
    label: 'Bird',
    imgPath: hero,
  },
  {
    label: 'Bali, Indonesia',
    imgPath: ass,
  },
  {
    label: 'Goč, Serbia',
    imgPath: rock,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
        //   height: 50,
          pl: 2,
          bgcolor: 'teal',
        }}
      >
        {/* <Typography sx={{ textAlign: 'center' }}>
          {images[activeStep].label}
        </Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 400,
                  width: '100%',
                  background: `url(${step.imgPath}) no-repeat center center`,
                  backgroundSize: 'cover',
                }}
              >
                {/* <Typography
                  variant="h5"
                  component="div"
                  sx={{ color: 'white', textAlign: 'center', padding: '1rem' }}
                >
                  {step.label}
                </Typography> */}
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      style={{backgroundColor:"teal"}}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            style={{color:"white"}}
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            style={{color:"white"}}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
        sx={{
            '& .MuiMobileStepper-dot': {
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
            },
            '& .MuiMobileStepper-dotActive': {
              backgroundColor: 'white',
            },
          }}
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;