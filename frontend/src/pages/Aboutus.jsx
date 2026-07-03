import React from 'react'

const Aboutus = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-sm mb-3">
          <div className="row py-4">
            <div className="col-lg">
              <h1 className='display-2 font-semibold text-center'><span className='text-prime'>Career Techguru</span> is where the world of business meets their goal</h1>
            </div>
          </div>
        </div>
        <div className="container-sm mb-3">
          <div className="row py-4">
            <div className="col-lg">
              <img src="https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="img-fluid rounded" />
            </div>
            <div className="col-lg">
              <h3 className='text-prime h3'>About us</h3>
              <p>Career Techguru, at its core, is transforming how businesses operate on a day-to-day basis.
                Our AI professionals outshine conventional roles, blending voice and cognitive capabilities
                for 24/7 productivity without compromise. Tailored for seamless integration, our solutions, 
                coupled with pioneering augmented reality innovations, don't just advance operational efficiency; 
                they redefine the potential of workplace, where precision, efficiency and human creativity is amplified 
                by AI, achieving unparalleled performance.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aboutus