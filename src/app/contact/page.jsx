import ContactForm from '@/components/contactForm/ContactForm'
import MainFooter from '@/components/MainFooter/MainFooter'
import MainHeader from '@/components/MainHeader/MainHeader'
import React from 'react'

function page() {
  return (
    <>
      <MainHeader/>
      <br />
      <br />
      <main>
      <ContactForm/>
      </main>
      <MainFooter/>
    </>
  )
}

export default page
