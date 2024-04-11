import React from 'react'
import "./Contact.css";
import bharti from '../images/bharti.jpeg'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='flex'>
      <div>
      </div>
      <div className='mt-10'>
        <h1 className='text-center text-5xl font-bold'>Hello there!</h1>
        <p className='p-20 text-3xl'>I'm <span className='font-bold'> Bharti Tiwari</span>, a passionate front-end developer with expertise in HTML, CSS, JavaScript, React, and Tailwind CSS. If you have any questions, need assistance with a project, or just want to connect, feel free to reach out. I'm always excited to collaborate and explore new opportunities.</p>
        <h1 className='text-center p-5 text-2xl'>How to Reach Me:

        </h1>






        <div className="card-u">
          <div className="content-u">
            <div className="back-u">
              <div className="back-content-u">



                <img src={bharti} />
              </div>
            </div>
            <div className="front-u">

              <div className="img-u">
                <div className="circle-u">
                </div>
                <div className="circle-u" id="right">
                </div>
                <div className="circle-u" id="bottom">
                </div>
              </div>

              <div className="front-content-u">
                <small className="badge-u"></small>
                <div>
                  <ul className="flex  social-list">
                    <li>
                      <a href="bhartitiwari071998@gmail.com"><i className="fab fa-google-plus-g icon"></i></a></li>

                    <li>
                      <a href=" https://www.linkedin.com/in/bharticoder"><i className="fab fa-linkedin-in icon"></i></a></li>



                  </ul>
                </div>
                <div className="description-u">
                  <div className="title-u">
                    <ul className='flex flex-col gap-9'>
                      <li>Email:<span> bhartitiwari071998@gmail.com</span></li>
                      <li>LinkedIn: <span> https://www.linkedin.com/in/bharticoder/</span></li>
                      <li>GitHub:<span> simplycoderbharti</span></li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>






        <p className='text-center text-2xl mt-9 p-20'>Whether you're looking for web development services or just want to chat about the latest trends in front-end development, I'd love to hear from you. Let's build something amazing together!</p>

        <h4 className='ml-12 text-xl'>Best regards,
          Bharti Tiwari

        </h4>
      </div>





    </div>
  )
}

export default Contact