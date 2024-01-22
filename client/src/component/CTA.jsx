import React from "react";
import styles from "../style";
import Button from "./Button";
const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.padding}
    sm:flex-row flex-col bg-black-gradient rounded-[20px] box-shadow mt-20`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>Let's try our service now !</h2>
        <p className={`${styles.paragraph} max-w[470px] mt-5`}>
          Let's collaborate to turn your ideas into digital excellence. Contact
          NONSTANDARD DIGITAL today and embark on a journey to unparalleled
          success
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button styles="rounded-[10px] " />
      </div>
    </section>
  );
};

export default CTA;
