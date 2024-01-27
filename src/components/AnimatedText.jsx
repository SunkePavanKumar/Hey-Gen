import React, { useState, useEffect } from "react";
// import "./AnimatedText.css"; // Import your Tailwind CSS styles

const AnimatedText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    const animateText = () => {
      interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            const deletionInterval = setInterval(() => {
              if (currentIndex >= 0) {
                setDisplayedText(text.slice(0, currentIndex));
                currentIndex--;
              } else {
                clearInterval(deletionInterval);
                setTimeout(() => {
                  setDisplayedText("");
                  currentIndex = 0;
                  animateText(); // Start the animation again
                }, 500);
              }
            }, 50);
          }, 500);
        }
      }, 50);
    };

    animateText(); // Start the initial animation

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="animated-text">
      {displayedText}
      <span className="blink-pipe text-blue-500">|</span>
    </div>
  );
};

export default AnimatedText;
