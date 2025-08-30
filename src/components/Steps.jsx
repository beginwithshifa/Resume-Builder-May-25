import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const steps = ['Basic Informations', 'Contact Details', 'Education details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];


function Steps() {
  const skillSuggestionArray =['NODE JS','EXPRESS','MONGODB','REACT','ANGULAR','NEXT JS','BOOTSTRAP','TAILWIND','CSS','GIT']
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
   //state for storing user input data
   const [userInput,setUserInput]=React.useState({
    personalData:{
      name:'',
      jobTitle:'',
      location:'',
      email:'',
      phone:'',
      github:'',
      linkedin:'',
      portfolio:''
    },
    education:{
      course:'',
      college:'',
      university:'',
      year:''
    },
    experience:{
      jobRole:'',
      company:'',
      jobLocation:'',
      duration:''
    },
    skills:[],
    summary:''
   })

   console.log(userInput);
   
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };


  //Render the content corresponding to array index
  const renderStepArrayContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h3>Personal Details</h3>
          <div className="d-flex row p-3">
          <TextField id="standard-basic-name" label="Full Name" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,name:e.target.value}})} />
          <TextField id="standard-basic-job" label="Job Title" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,jobTitle:e.target.value}})} />
          <TextField id="standard-basic-location" label="Location" variant="standard"  onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,location:e.target.value}})}/>
          
          </div>
        </div>
      )
      case 1: return (
        <div>
          <h3>Contact Details</h3>
          <div className="d-flex row p-3">
          <TextField id="standard-basic-mail" label="Email" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,email:e.target.value}})} />
          <TextField id="standard-basic-phone" label="Phone Number" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,phone:e.target.value}})} />
          <TextField id="standard-basic-github" label="Github Profile Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,github:e.target.value}})} />
          <TextField id="standard-basic-Linkedin" label="Linkedin Profile Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,linkedin:e.target.value}})}/>
          <TextField id="standard-Portfolio" label="Portfolio Link" variant="standard" onChange={e=>setUserInput({...userInput,personalData:{...userInput.personalData,portfolio:e.target.value}})} />
          </div>
        </div>
      )
      case 2: return (
        <div>
          <h3>Education Details</h3>
          <div className="d-flex row p-3">
          <TextField id="standard-basic-course" label="CourseName" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,course:e.target.value}})} />
          <TextField id="standard-college" label="College Name" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,college:e.target.value}})} />
          <TextField id="standard-basic-University" label="University" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,university:e.target.value}})} />
          <TextField id="standard-basic-Year" label="Year of Passout" variant="standard" onChange={e=>setUserInput({...userInput,education:{...userInput.education,year:e.target.value}})} />
          </div>
        </div>
      )
      case 3: return (
        <div>
          <h3>Professional Details</h3>
          <div className="d-flex row p-3">
          <TextField id="standard-basic-role" label="Job or Intership" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,jobRole:e.target.value}})} />
          <TextField id="standard-basic-Company" label="Company Name" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,company:e.target.value}})} />
          <TextField id="standard-basic-clocation" label="Company Location" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,jobLocation:e.target.value}})}/>
            <TextField id="standard-basic-duration" label="Duration" variant="standard" onChange={e=>setUserInput({...userInput,experience:{...userInput.experience,duration:e.target.value}})}/>
          </div>
        </div>
      )
      case 4: return (
        <div>
          <h3>Skills</h3>
          <div className="d-flex align-items-center justify-content-between p-3">
          <TextField sx={{width:'400px'}}id="standard-basic-skill" label="Add Skills" variant="standard" />
          <Button variant="text">ADD</Button>
          </div>
          <h5>Suggestions :</h5>
          <div className="d-flex  flex-wrap justify-content-between my-3">
            {
              skillSuggestionArray.map(userSkill =>(
                <Button className='m-1' key={userSkill} variant="outlined">{userSkill}</Button>
              ))
              
            }
          </div>
          <h5>Added Skills</h5>
          <div className="d-flex  flex-wrap justify-content-between my-3">
           {/*span must duplicate according to the user added skill*/}
           <span className='btn btn-primary d-flex align-items-center justify-content-center'>REACT <button className="text-light btn  ">X</button></span>
          </div>
        </div>
      )
      case 5: return (
        <div>
          <h3>Professional Summary</h3>
          <div className="d-flex row p-3">
          <TextField id="standard-basic-summary" label="Write a short summary of yourself" multiline rows={4} defaultValue={'Motivated Full Stack Web Developer with hands-on experience in developing web applications using React, Angular, Node.js, and MongoDB. Strong problem-solving skills with a focus on writing clean, efficient code. Eager to apply knowledge in real-world projects and grow within a dynamic software development team'}variant="standard" onChange={e=>setUserInput({...userInput,summary:e.target.value})} />
           
          </div>
        </div>
      )
      default:return null
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          {/* View of each step*/}
          <Box>
            {renderStepArrayContent(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}

export default Steps
