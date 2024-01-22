import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px]
   ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full
     ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="iicon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4
        className="font-poppins font-semibold
        text-white text-[18px] leading-[23px]"
      >
        {title}
      </h4>
      <p
        className="font-poppins font-normal
       text-dimWhite text-[18px] leading-[23px] mb-1"
      >
        {content}
      </p>
    </div>
  </div>
);
const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Let's Build Something Great Together{" "}
          <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Whether you are a start-up looking to establish your online presence
          or an established business aiming to scale,  NONSTANDARD DIGITAL is
          here to support you. Let's embark on a journey to transform your
          digital presence and achieve unparalleled success.{" "}
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard index={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
