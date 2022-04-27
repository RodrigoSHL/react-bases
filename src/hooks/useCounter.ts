import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const MAX_COUNT = 10;

export const useCounter= () => {

const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    if (counter < MAX_COUNT) {
      return setCounter((prev) => prev + 1);
    }
    return console.log("Can not add than more 10");
  };

  useEffect(() => {
    if (counter < MAX_COUNT) return;
    console.log("%c You get a max value", "color:white; background-color:red");

    const tl = gsap.timeline();
    tl.to(counterElement.current, {y: -10,duration: 0.2,ease: "ease.out",})
        .to(counterElement.current, { y: 0, duration: 1, ease: "bounce.out" });
  }, [counter]);
  
    return {
        counter,
        counterElement,
        handleClick
    }
}