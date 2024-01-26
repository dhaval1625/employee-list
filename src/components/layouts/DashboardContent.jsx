import TextSmall from '../typography/TextSmall';
import TextPrimary from '../typography/TextPrimary';
import HeadingExtraLarge from '../typography/HeadingExtraLarge';
import Button from '../buttons/Button';
import TickIcon from '../icons/Tick';
import Container from '../ui/Container';

function DashboardContent() {
   return (
      <div className="md:mt-8 mt-5 relative">
         <Container>
            <div className="text-center max-w-[680px] mx-auto">
               <div className="space-y-4 mb-8">
                  <TextSmall className="text-primary tracking-[3.84px] uppercase font-medium">
                     Cloneables FOR WEBFLOW
                  </TextSmall>
                  <HeadingExtraLarge>Multi-step Form Webflow Cloneable Template</HeadingExtraLarge>
                  <TextPrimary className="text-gray leading-[1.66]">
                     Want to receive a monthly email in your inbox with awesome free Webflow
                     cloneables, resources and more? Please submit your email below.
                  </TextPrimary>
               </div>
               <form className="space-y-6">
                  <div className="input-block max-w-[600px] relative mx-auto">
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
                  </div>
                  <div className="flex items-start md:items-center justify-center space-x-2 md:space-x-3.5">
                     <TickIcon />
                     <TextSmall className="text-gray">
                        It's <span className="text-primary">100% free</span> and we will never send
                        more than one email per month
                     </TextSmall>
                  </div>
               </form>
            </div>
         </Container>
      </div>
   );
}

export default DashboardContent;
