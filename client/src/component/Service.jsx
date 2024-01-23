import React from "react";
import styles from "../style";
import { quotes } from '../assets'
import { services } from "../constants";
const ServiceCard = ({
  content  , title ,icon
}) => (
    <div className='flex justify-between flex-col
    px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10
     sm:mr-5 mr-0 my-5 feedback-card'>
         <img src={quotes} alt='double_quotes' className='w-[42px] h-[27px] object-contain' />
          <p className='font-poppins font-normal
           text-[18px leading-[32px] text-white
            my-10]'>
              {content}
              </p>
              <div className='flex flex-row mt-5'>
                 <img src={icon} alt='about_client' 
                 className='w-[48px] h-[48px] rounded-full'
                 />
                 <div className='flex flex-col  ml-5'>
                   <h4 className='font-poppins font-semibold
                   text-[20px] leading-[32px]  text-white'>{title}</h4>
                    <p className='font-poppins font-normal
                   text-[16px] leading-[32px]  text-white'>{title}</p>
                 </div>
              </div>
    </div>
  )

const Service = () => (
  <section
    id="client"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div
      className="absolute z-[0] w-[60%]
    h-[60%] -right-[50%] rounded-full blue__gradient
    "
    />
    <div
      className={`w-full flex justify-center
          items-center md:flex-col flex-col sm:mb-16
           mb-6 relative z-[1] ${styles.flexCenter}`}
    >
      <h1 className={`${styles.heading2}text-center`}>
        Our Offerings or Srvice{" "}
      </h1>
      <p className={`${styles.paragraph} text-center mt-4 `}>
          Our collaborative approach, technical expertise, and unwavering
          commitment to client satisfaction set us apart. When you choose
          NONSTANDARD DIGITAL, you're choosing a team that not only meets
          expectations but exceeds them. Discover what our clients are raving
          about and join the ranks of those who have experienced digital
          transformation with us
        </p>
      {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[550px] `}>
          Our collaborative approach, technical expertise, and unwavering
          commitment to client satisfaction set us apart. When you choose
          NONSTANDARD DIGITAL, you're choosing a team that not only meets
          expectations but exceeds them. Discover what our clients are raving
          about and join the ranks of those who have experienced digital
          transformation with us
        </p>
      </div> */}
    </div>
    <div
      className="flex flex-wrap 
    sm:justify-start justify-center w-full
    feedback-container relative z-[1]"
    >
      {services.map((card) => (
        
           <div className='flex justify-between flex-col
    px-10 py-12 rounded-[20px] max-w-[400px] md:mr-10 
     sm:mr-5 mr-0 my-5 feedback-card'>
         <img src={quotes} alt='double_quotes' className='w-[42px] h-[27px] object-contain' />
        
              <div className='flex items-center flex-col gap-10  mt-5'>
                 <img src={card.icon} alt='about_client' 
                 className='w-[58px] h-[58px] rounded-full'
                 />
                 <div className='flex flex-col gap-5  ml-5'>
                   <h4 className='font-poppins font-semibold w-[full]
                   text-[20px] leading-[32px]  text-white'>{card.title}</h4>
                    <p className='font-poppins font-normal
                   text-[16px] leading-[32px]  text-secondary'>{card.content}</p>
                 </div>
              </div>
    </div>
        
      ))}
    </div>
  </section>
);

export default Service;
