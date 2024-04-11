import React from 'react'

function SignUp() {
  return (
    <div>
          <div className=' bg-orange-500  '>
              <div className='container text-center m-auto p-36'>
                  <div className='flex gap-3 flex-col justify-center  m-auto'>
                      <div className='w-4/12 m-auto md:h-full md:w-48'>
                          <img src={boy} />
                      </div>

                      <div className='w-8/12 m-auto  md:w-full lg:w-48'>
                          <div className='header'>
                              <div className='text-2xl' >{state}</div>
                              <div></div>
                          </div>
                          <form onChange={handleSubmit}>
                              {state === "Log in" ? <div></div> : <div className='input mt-10 w-12/12  '>
                                  <input type='text' placeholder='name' value={formvalues.username} className='text  border border-solid w-full p-2 onChange={handleChange} ' />
                                  <p>{formError.username}</p>
                              </div>}

                              <div className='input mt-5'>

                                  <input type='email' placeholder='Email' value={formvalues.email} className='text border border-solid  w-full p-2' onChange={handleChange} />
                                  <p>{formError.email}</p>
                              </div>

                              <div className='input mt-5 w-full'>

                                  <input type='Password' placeholder='password' value={formvalues.password} className='text border border-solid  w-full  p-2 px-3' onChange={handleChange} />
                                  <p>{formError.password}</p>
                              </div>
                          </form>
                          {/* {state === "Sign Up" ? <div></div> : <div className='forgot mt-5'>Forgot Password ? <span className='hover:text-blue-600'>Click Here</span></div>} */}

                          <div className='mt-6 flex justify-center gap-3'>
                              <button className='btn px-3 py-2 bg-white text-black' onClick={() => { setState("Sign Up") }}>Sign Up</button>
                              {/* <button className='btn px-3 py-2 bg-white text-black' onClick={() => { setState("Log in") }}>Log in</button> */}
                          </div>
                      </div>
                  </div>

              </div>
          </div>
    </div>
  )
}

export default SignUp
