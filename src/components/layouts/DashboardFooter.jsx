import Container from '../ui/Container';
import React from 'react';
import HeadingMedium from '../typography/HeadingMedium';
import ButtonLight from '../buttons/ButtonLight';

function DashboardFooter() {
   return (
      <div className="mt-8">
         <Container>
            <div className="bg-white rounded-[18px] p-5 md:px-7 md:py-6 flex md:flex-row flex-col space-y-3 md:space-y-0 items-center justify-between relative home-footer-wrapper">
               <HeadingMedium>Multi Step Form - Step 1</HeadingMedium>
               <ButtonLight
                  isLink
                  linkPath="/employee/add"
                  size="sm"
               >
                  Preview Cloneable
               </ButtonLight>
            </div>
         </Container>
      </div>
   );
}

export default DashboardFooter;
