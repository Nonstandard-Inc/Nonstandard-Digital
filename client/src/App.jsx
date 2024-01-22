import React from 'react'
import styles from "./style"
import {
  Navbar,
  Hero,
  Button,
  Billing,
  Business,
  CardDetails,
  Client,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  Stats,
  Testinomial,
  Service
} from "./component"

const App = () => 
   (
    <div className='bg-primary w-full overflow-hidden'>
       <div className={`${styles.padding} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
           <Navbar/>
         </div>
       </div>
       <div className={`bg-primary ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           <Hero />
         </div>
       </div>
       <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
           <Stats/>
           <Business/>
           <Billing/> 
           <Service/>
           <Testinomial/>
           <Client />
           <CTA/>
           <Footer />
         </div>
       </div>

    </div>
  )


export default App