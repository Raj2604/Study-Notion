import React from 'react'
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'  
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import timelineImage from '../../../assets/Images/TimelineImage.png'
const timeline = [
  {
    Logo:Logo1,
    heading:"Leadership",
    Description:"Fully Committed to success company",

  },
  {
    Logo:Logo2,
    heading:"Leadership",
    Description:"Fully Committed to success company",

  },
  {
    Logo:Logo3,
    heading:"Leadership",
    Description:"Fully Committed to success company",

  },
  {
    Logo:Logo4,
    heading:"Solve the problem",
    Description:"Fully Committed to success company",

  }
]
const TimeLineSection = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-20 mb-20 items-center'>
        <div className='lg:w-[45%] flex flex-col gap-14 lg:gap-3'>
            {
                timeline.map( (element,index) => {
                  return(
                    <div  key={index} className='flex flex-col lg:gap-3'>

                      <div className="flex gap-6" >
                        <div className='w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]'>
                          <img src={element.Logo}/>
                        </div>
                        

                        <div>
                          <h2 className='font-semibold text-[18px]'>{element.heading}</h2>
                          <p className='text-base'>{element.Description}</p>
                        </div>


                      </div>
                      <div className={`${index === 3  ? " " : "hidden lg:block h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px] "}`}>
                      </div>

                        
                    </div>
                  )
                })
            }

            
        </div>

        <div className='relative shadow-[10px_0px_50px_-5px] shadow-blue-200 '>
              <img src={timelineImage} className='rounded-xl shadow-[20px_20px_rgba(255,255,255)] '/>

              <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-10 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <div className='flex items-center gap-5 border-r border-caribbeangreen-300 px-7'>
                  <p className='text-3xl font-bold'>
                    10
                  </p>
                  <p className='text-carribbeangreen-300 text-sm'>Years Of experience</p>
                </div>

                <div className='flex gap-5 items-center px-7'>
                <p className='text-3xl font-bold'>
                    250
                  </p>
                  <p className='text-carribbeangreen-300 text-sm'>TYPES OF COURSES</p>
                </div>

              </div>
        </div>
    </div>
  )
}

export default TimeLineSection