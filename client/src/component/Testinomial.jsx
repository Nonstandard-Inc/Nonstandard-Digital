import React from "react";
import styles from "../style";

import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
const Testinomial = () => (
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
      className="w-full flex justify-between
          items-center md:flex-row flex-col sm:mb-16
           mb-6 relative z-[1] "
    >
      <h1 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us{" "}
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[550px] `}>
          We take pride in the positive feedback we receive, as our clients
          consistently praise our dedication to delivering outstanding digital
          solutions. People are saying that we are more than just a service
          provider; we are trusted partners in their success journey.
        </p>
      </div>
    </div>
    <div
      className="flex flex-wrap 
    sm:justify-start justify-center w-full
    feedback-container relative z-[1]"
    >
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testinomial;
