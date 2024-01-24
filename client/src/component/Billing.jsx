import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { features2 } from "../constants";
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px]
   ${index !== features2.length - 1 ? "mb-6" : "mb-0"} feature-card`}
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
const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={`${layout.sectionImgReverse} flex flex-col`}>
      <div
        className="absolute z-[3] -left-1/2
           top-0 w-[50%] h-[50%] rounded-full white__gradient"
      />
      <div
        className="absolute z-[3] -left-1/2
           top-0 w-[50%] h-[50%] rounded-full pink__gradient"
      />
      <h2 className={styles.heading2}>
        Why Choose
        <br className="sm:block hidden" />
        NONSTANDARD DIGITAL?
      </h2>
      <p className={`${styles.paragraph} font-poppins font-normal
       text-dimWhite text-[18px] leading-[23px] mb-1 mt-5`}>
        At NONSTANDARD DIGITAL, we are passionate about bringing your digital
        dreams to life. With a dedicated team of skilled professionals, we
        specialize in delivering top-notch solutions in mobile application
        development, web application development, SEO (Search Engine
        Optimization), digital marketing, and a wide array of other services
      </p>
    </div>
    <div className={layout.sectionInfo}>
      <div className={`${layout.sectionImg} flex-col`}>
        {features2?.map((feature, index) => (
          <FeatureCard index={index} {...feature} />
        ))}
      </div>
    </div>
  </section>
);

export default Billing;
