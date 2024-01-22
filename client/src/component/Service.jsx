import React from "react";
import styles from "../style";

import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
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
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Service;
