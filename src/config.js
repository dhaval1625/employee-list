import UserIcon from "./components/icons/User";
import EmailIcon from "./components/icons/Email";
import PhoneIcon from "./components/icons/Phone";
import CompanyIcon from "./components/icons/Company";
import DevelopmentIcon from "./components/icons/Development";
import DesignIcon from "./components/icons/Design";
import MarketingIcon from "./components/icons/Marketing";
import OtherIcon from "./components/icons/Other";

export const STEP_DETAILS = [
   {
      title: 'Contact details',
      desc: 'Please fill your information so we can get in touch with you.',
      formElements: [
         {
            id: 'contact-f1',
            name: 'name',
            label: 'Name',
            inputType: 'text',
            placeholder: 'John Carter',
            inputIcon: UserIcon,
            isRequired: true,
            errorMessage: 'Name is Required!',
            groupType: 'withLabel',
         },
         {
            id: 'contact-f2',
            name: 'email',
            label: 'Email',
            inputType: 'email',
            placeholder: 'Email address',
            inputIcon: EmailIcon,
            isRequired: true,
            errorMessage: 'Please enter a valid email!',
            groupType: 'withLabel',
         },
         {
            id: 'contact-f3',
            name: 'phoneNumber',
            label: 'Phone Number',
            inputType: 'number',
            placeholder: '(123) 456 - 7890',
            inputIcon: PhoneIcon,
            isRequired: true,
            errorMessage: 'Phone Number is Required!',
            groupType: 'withLabel',
         },
         {
            id: 'contact-f4',
            name: 'company',
            label: 'Company',
            inputType: 'text',
            placeholder: 'Company name',
            inputIcon: CompanyIcon,
            isRequired: true,
            errorMessage: 'Company is Required!',
            groupType: 'withLabel',
         },
      ]
   },
   {
      title: 'Our services',
      desc: 'Please select which service you are interested in.',
      formElements: [
         {
            id: 'service-f1',
            name: 'service',
            label: 'Development',
            inputType: 'radio',
            inputIcon: DevelopmentIcon,
            groupType: 'radio',
            isChecked: true,
         },
         {
            id: 'service-f2',
            name: 'service',
            label: 'Web Design',
            inputType: 'radio',
            inputIcon: DesignIcon,
            groupType: 'radio',
         },
         {
            id: 'service-f3',
            name: 'service',
            label: 'Marketing',
            inputType: 'radio',
            inputIcon: MarketingIcon,
            groupType: 'radio',
         },
         {
            id: 'service-f4',
            name: 'service',
            label: 'Other',
            inputType: 'radio',
            inputIcon: OtherIcon,
            groupType: 'radio',
         },
      ]
   },
   {
      title: 'What\'s your project budget?',
      desc: 'Please select the project budget range you have in mind.',
      formElements: [
         {
            id: 'budget-f1',
            name: 'budget',
            label: '$5.000 - $10.000',
            inputType: 'radio',
            groupType: 'radio',
            isChecked: true,
         },
         {
            id: 'budget-f2',
            name: 'budget',
            label: '$10.000 - $20.000',
            inputType: 'radio',
            groupType: 'radio',
         },
         {
            id: 'budget-f3',
            name: 'budget',
            label: '$20.000 - $50.000',
            inputType: 'radio',
            groupType: 'radio',
         },
         {
            id: 'budget-f4',
            name: 'budget',
            label: '$50.000 +',
            inputType: 'radio',
            groupType: 'radio',
         },
      ]
   },


]

export const TOTAL_STEPS = STEP_DETAILS.length + 1;