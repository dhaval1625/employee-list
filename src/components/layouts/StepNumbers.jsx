import React from 'react';

function StepNumbers({ totalSteps, currentStep }) {
   return (
      <div className="pb-6.5 border-b border-gray-200">
         <div className="flex items-center space-x-5">
            {Array.from({ length: totalSteps }, (_, i) => i + 1).map((num, idx) => (
               <React.Fragment key={num}>
                  <div className={`step-num ${num <= currentStep ? 'filled' : ''}`}>{num}</div>
                  {num !== totalSteps && (
                     <div className="bg-white-100 rounded-2xl h-[6px] grow max-w-[98px]">
                        <div
                           style={{
                              width: num < currentStep ? '100%' : num === currentStep ? '50%' : '0',
                           }}
                           className={`h-full bg-primary rounded-2xl transition-all duration-300 ${
                              num === currentStep ? 'delay-300' : ''
                           }`}
                        ></div>
                     </div>
                  )}
               </React.Fragment>
            ))}
         </div>
      </div>
   );
}

export default StepNumbers;
