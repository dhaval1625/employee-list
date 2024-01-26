import React from 'react';
import HeadingMedium from './typography/HeadingMedium';
import TextPrimary from './typography/TextPrimary';
import TextSmall from './typography/TextSmall';
import { STEP_DETAILS } from '../config';
import LastStepContent from './layouts/LastStepContent';

function StepForm({ currentStep }) {
   const curForm = STEP_DETAILS[currentStep - 1] || null;

   // helper component to render form group of current step
   function RenderFormGroup({ element }) {
      switch (element.groupType) {
         case 'withLabel':
            return (
               <div className="space-y-5">
                  <label htmlFor={element.id}>
                     <TextPrimary className="!text-dark !font-medium">{element.label}</TextPrimary>
                  </label>
                  <div className="relative">
                     <input
                        type={element.inputType}
                        name={element.name}
                        id={element.id}
                        className="form-input"
                        placeholder={element.placeholder}
                     />
                     <div className="absolute top-1/2 -translate-y-1/2 right-5.5 max-w-5.5">
                        <element.inputIcon />
                     </div>
                  </div>
                  <TextSmall className="text-danger">{element.errorMessage}</TextSmall>
               </div>
            );
         case 'radio':
            return (
               <div>
                  <input
                     type={element.inputType}
                     name={element.name}
                     id={element.id}
                     hidden
                     value={element.label}
                     defaultChecked={element.isChecked}
                  />
                  <label
                     className="form-radio"
                     htmlFor={element.id}
                  >
                     {element.inputIcon !== undefined ? (
                        <element.inputIcon />
                     ) : (
                        <div className="radio-circle"></div>
                     )}
                     <TextPrimary className="!text-dark !font-medium">{element.label}</TextPrimary>
                  </label>
               </div>
            );
         default:
            return <></>;
      }
   }

   return (
      <div className="space-y-7">
         {curForm ? (
            <>
               <div className="space-y-3">
                  <HeadingMedium>{curForm.title}</HeadingMedium>
                  <TextPrimary>{curForm.desc}</TextPrimary>
               </div>
               <form className="grid grid-cols-2 gap-x-6 gap-y-7">
                  {curForm.formElements.map((element, idx) => (
                     <RenderFormGroup
                        key={element.id}
                        element={element}
                     />
                  ))}
               </form>
            </>
         ) : (
            <LastStepContent />
         )}
      </div>
   );
}

export default StepForm;
