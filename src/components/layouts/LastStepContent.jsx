import React from 'react'
import SubmitIcon from '../icons/Submit'
import HeadingMedium from '../typography/HeadingMedium'
import TextPrimary from '../typography/TextPrimary'
import Button from '../buttons/Button'
import { TITLE_ENUM } from '../../config'

function LastStepContent({onSubmit, details}) {
  return (
    <div className='flex items-center flex-col space-y-5'>
      <SubmitIcon />
      <HeadingMedium>Submit your quote request</HeadingMedium>
      <TextPrimary className="text-center max-w-[30.93rem]">Please review all the information you previously typed as following, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.</TextPrimary> 
      <div className='space-y-3 w-fit'>
        {Object.keys(details).map((keyName, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <TextPrimary className='!font-medium !text-dark !text-sm'>{TITLE_ENUM[keyName]}:</TextPrimary>
            <TextPrimary className='!text-sm'>{details[keyName]}</TextPrimary>
          </div>
        ))}
      </div>
      <Button onClick={onSubmit} className="!mt-6.5">Submit</Button>
    </div>
  )
}

export default LastStepContent