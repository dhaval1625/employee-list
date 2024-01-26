import React, { useState } from 'react';
import AppLayout from '../components/ui/AppLayout';
import AppFooter from '../components/layouts/AppFooter';
import Container from '../components/ui/Container';
import HeadingLarge from '../components/typography/HeadingLarge';
import TextPrimary from '../components/typography/TextPrimary';
import Button from '../components/buttons/Button';
import ButtonOutline from '../components/buttons/ButtonOutline';
import StepNumbers from '../components/layouts/StepNumbers';
import StepForm from '../components/StepForm';
import { TOTAL_STEPS } from '../config';

function MultiStepForm() {

   const [currentStep, setCurrentStep] = useState(1);

   function nextStepHandler() {
      setCurrentStep(prev => prev + 1);
   }

   return (
      <AppLayout>
         <Container>
            <div className='mx-auto max-w-[700px] space-y-7'>

               {/* form heading and description */}
               <div className='space-y-4 text-center'>
                  <HeadingLarge>Get a project quote</HeadingLarge>
                  <TextPrimary className="max-w-[566px] mx-auto">Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.</TextPrimary>
               </div>

               {/* main form container */}
               <div className='stepper-form-box space-y-7 border border-white-100 pt-7 px-8 pb-8'>
                  <StepNumbers totalSteps={TOTAL_STEPS} currentStep={currentStep} />
                  <StepForm currentStep={currentStep} />
               </div>

               {/* nav buttons */}
               <div className='flex items-center justify-between'>
                  <ButtonOutline onClick={() => setCurrentStep(prev => prev - 1)}>Previous step</ButtonOutline>
                  <Button onClick={nextStepHandler}>Next step</Button>
               </div>
            </div>
         </Container>
         <AppFooter />
      </AppLayout>
   );
}

export default MultiStepForm;
