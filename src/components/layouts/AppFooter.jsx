import Button from '../buttons/Button';
import HeadingLarge from '../typography/HeadingLarge';
import TextPrimary from '../typography/TextPrimary';
import Container from '../ui/Container';
import { NavLink } from 'react-router-dom';

function AppFooter() {
   return (
      <div className="fixed py-5 w-full bg-white z-10 bottom-0 left-0 app-footer md:block hidden">
         <Container>
            <div className="flex items-center justify-between">
               <NavLink to="/">
                  <HeadingLarge className="!text-black heading-brand">
                     Aimbrill Techinfo
                  </HeadingLarge>
                  <TextPrimary className="text-gray">
                     Copyright © 2021 Aimbrill Techinfo | All Rights Reserved
                  </TextPrimary>
               </NavLink>
               <form className="input-block grow max-w-[31.25rem] relative">
                  <input
                     className="form-input "
                     placeholder="Enter your email"
                     type="email"
                     name="email"
                     id="email"
                     required
                  />
                  <Button
                     className="absolute top-1/2 -translate-y-1/2 right-5"
                     size="sm"
                  >
                     Subscribe
                  </Button>
               </form>
            </div>
         </Container>
      </div>
   );
}

export default AppFooter;
