import { NavLink } from 'react-router-dom';
import Button from '../buttons/Button';
import HeadingLarge from '../typography/HeadingLarge';
import Container from '../ui/Container';
import React from 'react';

function AppHeader() {
   const curPath = window.location.pathname;
   console.log(curPath);
   return (
      <div className="fixed py-5 w-full bg-white z-10 top-0 left-0 app-header">
         <Container>
            <div className="flex items-center justify-between">
               <NavLink to="/">
                  <HeadingLarge className="!text-black heading-brand">
                     Aimbrill Techinfo
                  </HeadingLarge>
               </NavLink>
               {curPath.includes('list') ? (
                  <Button
                     isLink
                     linkPath="/employee/add"
                  >
                     Add Employee
                  </Button>
               ) : (
                  <Button
                     isLink
                     linkPath="/employee/list"
                  >
                     Employee List
                  </Button>
               )}
            </div>
         </Container>
      </div>
   );
}

export default AppHeader;
