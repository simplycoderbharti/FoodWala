import React from 'react'
import google from '../images/google.png'
import apple from '../images/apple.webp'
import logo2 from '../images/logo2.png'

function Footer() {
  return (
    <div>
          <section className=" footer flex bg-black text-white space-between flex-wrap gap-20 p-12">
              <div className='w-1/6'>
                  <img src ={logo2}/>
              </div>
              <div>
                  <h4 className="text-xl text-gray-400">Company</h4>
                  <ul className="mt-8 leading-10 text-lg">
                      <li>About us</li>
                      <li>Team</li>
                      <li>Careers</li>
                      <li>Swiggy Blog</li>
                      <li>Bug Bounty</li>
                      <li>Swiggy one</li>

                  </ul>
              </div>
              <div>
                  <h4 className="text-xl text-gray-400">Contact</h4>
                  <ul className="mt-8 leading-10 text-lg">
                      <li>Help & Support</li>
                      <li>Patrtner with us</li>
                      <li>Ride with us</li>
                  </ul>
              </div>
              <div>
                  <h4 className="text-xl text-gray-400">Legal</h4>
                  <ul className="mt-8 leading-10 text-lg">
                      <li>Terms & Condition</li>
                      <li>Refund & Cancellation</li>
                      <li>Privacy Policy</li>
                      <li>Cookie Poolicy</li>
                      <li>OfferTerms</li>
                      <li>Phishing & Fraud</li>

                  </ul>
              </div>
              <div className='goole-apple'>
                  <img src={google} property="true" className='bg-black goole' />
                  <img src={apple} property="true" className='mt-5 apple' />
              </div>
          </section>
    </div>
  )
}

export default Footer
