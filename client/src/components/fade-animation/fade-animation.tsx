import React, { useState, PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import styles from "./fade-animation.module.scss";

export const FadeAnimation = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fade-in");

  return (
    <div
      className={`
  ${styles["fade-animation"]}
  ${styles[`fade-animation--${transitionStage}`]}
`}
      onAnimationEnd={() => {
        if (transitionStage === "fade-out") {
          setTransitionStage("fade-in");
          setDisplayLocation(location);
        }
      }}
    >
      {children}
    </div>
  );
};
