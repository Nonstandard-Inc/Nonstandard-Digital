import React from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";
const CardDetails = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal
        <br className="sm:block hidden" />
        in few easy step.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Master modern web development by building a responsive React JS
        application consisting of a stunning hero section, high-quality assets
        and gradients, business stats, reusable feature sections with
        call-to-action buttons, testimonials, and more! …
      </p>
      <Button styles="mt-10 rounded-[10px]" />
    </div>
     <div className={layout.sectionImg}>
       <img src={card} alt="card" className="w-[100%] h-[100%] object-contain" />
     </div>
  </section>
);

export default CardDetails;
