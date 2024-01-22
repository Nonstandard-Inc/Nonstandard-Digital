import React from 'react';
import { stats } from '../constants';
import styles from '../style'
const Stats = () =>  (
    <section className={`${styles.flexCenter}
     flex-row flex-wrap sm:mb-20 mb-6
    `}>
   {
    stats.map((stat)=>(
      <div key={stat.id} className='flex-1 justify-start
      flex  items-center'>
           <h4 className='font-poppins font-semibold
           xs:leading-[53px] xs:text-[40px] text-[30]
            leading-[43px] text-white
           '>{stat.value}</h4>
           <p 
           className='font-poppins font-normal
           xs:leading-[26px] xs:text-[20px] text-[15]
            leading-[21px] text-gradient uppercase ml-3
           '
           >{stat.title}</p>

      </div>
    ))
   }
    </section>
  )


export default Stats