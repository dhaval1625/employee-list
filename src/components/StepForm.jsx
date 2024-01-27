import React from 'react';
import HeadingMedium from './typography/HeadingMedium';
import TextPrimary from './typography/TextPrimary';
import TextSmall from './typography/TextSmall';
import { STEP_DETAILS } from '../config';
import LastStepContent from './layouts/LastStepContent';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { employeeActions } from '../store/index';
import { useNavigate } from 'react-router';

function StepForm({ currentStep, submitRef, onValid }) {
   const curForm = STEP_DETAILS[currentStep - 1] || null;
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      getValues,
      formState: { errors },
   } = useForm();

   function submitHandler(data) {
      onValid(data);
   }

   function finalSubmitHandler() {
      const data = getValues();
      dispatch(employeeActions.addMember(data));
      navigate('/employee/list');
   }

   // helper function to render form group of current step
   function RenderFormGroup(element) {
      switch (element.groupType) {
         case 'withLabel':
            return (
               <div className="space-y-5">
                  <label htmlFor={element.id}>
                     <TextPrimary className="!text-dark !font-medium">{element.label}</TextPrimary>
                  </label>
                  <div className="relative">
                     <input
                        {...register(element.name, {
                           required: element.isRequired,
                           ...element.validationCriteria,
                        })}
                        type={element.inputType}
                        id={element.id}
                        className="form-input"
                        placeholder={element.placeholder}
                     />
                     <div className="absolute top-1/2 -translate-y-1/2 right-5.5 max-w-4 md:max-w-5.5">
                        <element.inputIcon />
                     </div>
                  </div>
                  {errors[element.name] && (
                     <TextSmall className="text-danger">{element.errorMessage}</TextSmall>
                  )}
               </div>
            );
         case 'radio':
            return (
               <div>
                  <input
                     type={element.inputType}
                     {...register(element.name, { required: element.isRequired })}
                     id={element.id}
                     hidden
                     value={element.label}
                  />
                  <label
                     className="form-radio"
                     htmlFor={element.id}
                  >
                     {element.inputIcon !== undefined ? (
                        <div className='flex md:max-w-none max-w-9'>
                           <element.inputIcon />
                        </div>
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
               <form
                  onSubmit={handleSubmit(submitHandler)}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-6 md:gap-y-7"
               >
                  {curForm.formElements.map((element, idx) => (
                     <React.Fragment key={element.id}>{RenderFormGroup(element)}</React.Fragment>
                  ))}
                  {curForm.groupValidation && errors[curForm.groupName] && (
                     <TextSmall className="text-danger">{curForm.groupErrorMessage}</TextSmall>
                  )}
                  <button
                     ref={submitRef}
                     type="submit"
                     style={{ display: 'none' }}
                  >
                     Submit
                  </button>
               </form>
            </>
         ) : (
            <LastStepContent
               details={getValues()}
               onSubmit={finalSubmitHandler}
            />
         )}
      </div>
   );
}

export default StepForm;
