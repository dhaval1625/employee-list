import React from 'react'
import SubmitIcon from '../icons/Submit'
import HeadingMedium from '../typography/HeadingMedium'
import TextPrimary from '../typography/TextPrimary'
import Button from '../buttons/Button'

function LastStepContent() {
  return (
    <div className='flex items-center flex-col space-y-5'>
      <SubmitIcon />
      <HeadingMedium>Submit your quote request</HeadingMedium>
      <TextPrimary className="text-center max-w-[495px]">Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.</TextPrimary>
      <Button className="!mt-6.5">Submit</Button>
    </div>
  )
}

export default LastStepContent